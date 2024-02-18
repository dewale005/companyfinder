from django.contrib import admin
from .models import Company, Industry, Keyword, Locality

class CompanyAdmin(admin.ModelAdmin):
    search_fields = ['company_name']
    filter_horizontal = ('locality','keywords',)
    list_display = ('id', 'company_name', "website", "industry",)

admin.site.register(Company, CompanyAdmin)
admin.site.register(Locality)
admin.site.register(Industry)
admin.site.register(Keyword)

# Register your models here.
