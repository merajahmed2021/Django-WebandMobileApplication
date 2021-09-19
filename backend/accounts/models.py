from django.db import models
from django.contrib.auth.models import User

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=255, blank=True)
    college = models.CharField(max_length=255, blank=True)
    # website = models.URLField(max_length=255, blank=True)
    image = models.ImageField(upload_to='profile_images')
    city = models.CharField(max_length=255, blank=True)
    skills = models.TextField(help_text="Comma Seperated value")
    bio = models.TextField()
    twitter = models.CharField(max_length=255, blank=True)
    facebook = models.CharField(max_length=255, blank=True)
    linkedin = models.CharField(max_length=255, blank=True)
    instagram = models.CharField(max_length=255, blank=True)

    def __str__(self):
        return self.name
