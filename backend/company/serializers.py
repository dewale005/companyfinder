from rest_framework import serializers
from .models import Company

class companySerializer(serializers.ModelSerializer):
    locality = serializers.SlugRelatedField(read_only=True, slug_field='name', many=True)
    keywords = serializers.SlugRelatedField(read_only=True, slug_field='name', many=True)
    industry = serializers.SlugRelatedField(read_only=True, slug_field='name')

    class Meta:
        model = Company
        exclude = ('is_archived', 'created_at', 'updated_at')