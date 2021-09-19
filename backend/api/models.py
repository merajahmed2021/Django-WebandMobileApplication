from django.db import models
from django.contrib.auth.models import User
from django.conf import settings

# Create your models here.

class Post(models.Model):
    # user = models.OneToOneField(User, on_delete=models.CASCADE)
    # user = models.ForeignKey(User, related_name="leads", on_delete=models.CASCADE,  blank=True)
    # user = models.ForeignKey('auth.User', related_name="leads", on_delete=models.CASCADE,  blank=True)
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=100)
    content = models.TextField()
    image = models.ImageField(upload_to='post_images')
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return self.title