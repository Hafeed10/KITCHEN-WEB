from rest_framework import serializers  # Correct import for serializers
from base.models import *

class ItemSerializer(serializers.ModelSerializer):  # Corrected the class name and inheritance
    class Meta:
        model = Item
        fields = '__all__'  # Corrected field specification

class CustomerGallerySerializer(serializers.ModelSerializer):  # Corrected the class name and inheritance
    class Meta:
        model = CustomerGallery
        fields = '__all__'  # Corrected field specification


class AboutSerializer(serializers.ModelSerializer):  # Corrected the class name and inheritance
    class Meta:
        model = About
        fields = '__all__'  # Corrected field specification

