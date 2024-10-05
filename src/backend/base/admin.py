from django.contrib import admin
from .models import *

admin.site.register(Item)
admin.site.register(CustomerGallery)
  # Ensure both fields are here
admin.site.register(About)