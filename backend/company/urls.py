from django.urls import path
from . import views

urlpatterns = [
    path('companies', views.CompanyListAPIView.as_view(), name="companies" ),
    path('company/<str:pk>', views.CompanyRetrieveAPIView.as_view(), name="company" ),
]