from django.db import models
from .basemodel import BaseAbstractModel
from django.utils.timezone import now


# -----------------------------------
# Definition for the Industry Model
# -----------------------------------

class Industry(BaseAbstractModel):
    """ This is the Industry Model"""

    class Meta:
        verbose_name = "Industry"
        verbose_name_plural = "Industries"

    name = models.CharField(max_length=255, blank=False, null=False)

    def __str__(self) -> str:
        return self.name

# -----------------------------------
# Definition for the Locality Model
# -----------------------------------
    
class Locality(BaseAbstractModel):
    """ This is the Locality Model"""

    class Meta:
        verbose_name = "Locality"
        verbose_name_plural = "Localities"

    name = models.CharField(max_length=255, blank=False, null=False)

    def __str__(self) -> str:
        return self.name

# -----------------------------------
# Definition for the Keywords Model
# ----------------------------------- 
    
class Keyword(BaseAbstractModel):
    """ This is the Locality Model"""

    class Meta:
        verbose_name = "Keyword"
        verbose_name_plural = "Keywords"

    name = models.CharField(max_length=255, blank=False, null=False)


    def __str__(self) -> str:
        return self.name
    

# -----------------------------------
# Definition for the Companies Model
# ----------------------------------- 
    
class Company(BaseAbstractModel):
    """ This is the Locality Model"""

    class Meta:
        verbose_name = "Company"
        verbose_name_plural = "Companies"

    company_name = models.CharField(max_length=255, blank=False, null=False)
    linkedin_url = models.URLField(blank=True, null=True)
    industry = models.ForeignKey(Industry, related_name="company_industry", on_delete=models.DO_NOTHING, limit_choices_to={'is_archived': False}, blank=True, null=True)
    website = models.URLField(blank=True, null=True)
    tagline = models.CharField(max_length=255, blank=True, null=True)
    about = models.CharField(max_length=6000, blank=True, null=True)
    year_founded = models.DateField(blank=True, null=True)
    locality = models.ManyToManyField(Locality, related_name="company_locality", limit_choices_to={'is_archived': False})
    country = models.CharField(max_length=255, blank=True, null=True)
    current_employee_estimate = models.CharField(max_length=255, blank=True, null=True)
    keywords = models.ManyToManyField(Keyword, related_name="company_keywords", limit_choices_to={'is_archived': False})


    def __str__(self) -> str:
        return self.company_name
