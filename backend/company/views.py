from rest_framework import generics
from .models import Company
from .serializers import companySerializer

class CompanyListAPIView(generics.ListAPIView):
    """Manage Companies List"""
    serializer_class = companySerializer
    queryset = Company.objects.all()

class CompanyRetrieveAPIView(generics.RetrieveAPIView):
    """Manage Companies List"""
    serializer_class = companySerializer
    queryset = Company.objects.all()

class SearchCompanyListAPIView(generics.ListAPIView):
    serializer_class = companySerializer
    
    def get_queryset(self):
        query = self.kwargs.get('query')
        return Company.objects.filter(is_archived=False, company_name__icontains=query)
    
class SimilarCompanyListAPIView(generics.ListAPIView):
    serializer_class = companySerializer
    
    def get_queryset(self):
        query = self.kwargs.get('pk')
        company = Company.objects.get(id=query)
        return Company.objects.filter(is_archived=False, industry=company.industry, keywords__in=company.keywords.all()).exclude(id=query).distinct()
    