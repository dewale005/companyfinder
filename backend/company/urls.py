from django.urls import path
from . import views

urlpatterns = [
    path('companies', views.CompanyListAPIView.as_view(), name="companies" ),
    path('company/<str:pk>', views.CompanyRetrieveAPIView.as_view(), name="company" ),
    path('search/<str:query>', views.SearchCompanyListAPIView.as_view(), name="company_search" ),
    path('similar-companies/<str:pk>', views.SimilarCompanyListAPIView.as_view(), name="similar_company" ),
]