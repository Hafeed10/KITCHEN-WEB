from django.db import models

class Item(models.Model):
    name = models.CharField(max_length=100)
    description = models.CharField(max_length=200)  # Ensure this line exists
    image = models.ImageField(upload_to='image',blank=True)

    def __str__(self):
        return self.name

class CustomerGallery(models.Model):
    title = models.CharField(max_length=200,blank=True)
    image = models.ImageField(upload_to='image',blank=True)

    def __str__(self):
        return self.title
    

class About(models.Model):
    title = models.CharField(max_length=200,blank=True)
    title_is = models.CharField(max_length=200,blank=True)
    description = models.CharField(max_length=200,blank=True)  
    image = models.ImageField(upload_to='image',blank=True)
    image_filde = models.ImageField(upload_to='image',blank=True)
    

    def __str__(self):
        return self.title    
    
    