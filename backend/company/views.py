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
    # lookup_field = "id"