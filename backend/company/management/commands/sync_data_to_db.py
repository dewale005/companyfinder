"""
Django command to sync csv file to db
"""
import os 
import csv
import datetime
from django.core.management.base import BaseCommand
from ...models import Company, Industry, Locality, Keyword

class Command(BaseCommand):
    """Django command to wait for database."""

    def handle(self, *args, **options):
        """Entrypoint for command."""
        Company.objects.all().delete()
        Industry.objects.all().delete()
        Locality.objects.all().delete()
        Keyword.objects.all().delete()
        self.stdout.write('Data Syncing has started')
        BASE_DIR = os.path.dirname(os.path.abspath(__file__))
        file = os.path.join(BASE_DIR, 'companies_data.csv')
        reader = csv.reader(open(file))
        locality_list = []
        keyword_list = []
        industry_list = []
        company_list = []
        for row in reader:

            company_data = {
                "linkedin_url": row[1].strip(),
                "company_name": row[2].strip(),
                "industry": row[3].strip(),
                "website": row[4].strip(),
                "tagline": row[5].strip(),
                "about": row[6].strip(),
                "year_founded": row[7].strip(),
                "locality": [ item.strip() for item  in row[8].split(',')],
                "country": row[9].strip(),
                "current_employee_estimate": row[10].strip(),
                "keywords": [ item.strip() for item  in row[11].split(',')],
            }

            locality_list += list(set([ item.strip() for item  in row[8].split(',')]) - set(locality_list))
            keyword_list += list(set([ item.strip() for item  in row[11].split(',')]) - set(keyword_list))

            if row[3] not in industry_list:
                industry_list.append(row[3])
            
            company_list.append(company_data)

        # industry_list = list(dict.fromkeys(industry_list))
        locality_list.sort()
        keyword_list.sort()
        industry_list.sort()

        Locality.objects.bulk_create([Locality(name=val) for val in locality_list])
        Keyword.objects.bulk_create([Keyword(name=val) for val in keyword_list])
        Industry.objects.bulk_create([Industry(name=val) for val in industry_list])

        for company in company_list:
           added_company=  Company.objects.create(
                linkedin_url=company['linkedin_url'],
                company_name=company['company_name'],
                industry=Industry.objects.filter(name=company['industry']).first(),
                website=company['website'],
                tagline=company['tagline'],
                about=company['about'],
                year_founded=company['year_founded'],
                country=company['country'],
                current_employee_estimate=company['current_employee_estimate'],
            )
           
           added_company.keywords.set(Keyword.objects.filter(name__in=company['keywords']))
           added_company.locality.set(Locality.objects.filter(name__in=company['locality']))
    

        self.stdout.write(self.style.SUCCESS('Database sync succsessfuly!'))