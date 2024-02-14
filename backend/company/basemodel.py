import uuid
from django.db import models
from django.utils.timezone import now

class BaseAbstractModel(models.Model):

    """
    This models defines base models thats implements common fields
    """

    class Meta:
        abstract = True
        ordering = ['-created_at']

    id = models.UUIDField(primary_key=True, unique=True, default=uuid.uuid4, editable=False)
    is_archived = models.BooleanField(default=False)
    created_at = models.DateTimeField(default=now, blank=False, editable=False)
    updated_at = models.DateTimeField(default=now, blank=False, editable=False)

    def soft_delete(self):
        """soft  delete a model instance"""
        self.is_archived=True
        self.save()