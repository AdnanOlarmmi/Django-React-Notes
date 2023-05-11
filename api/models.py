from django.contrib.auth.models import AbstractUser
from django.db import models

# Create your models here.

class User(AbstractUser):
    USER_ROLE_CHOICES = (
        ('admin', 'Admin'),
        ('user', 'User'),
    )
    user_role = models.CharField(max_length=10, choices=USER_ROLE_CHOICES, default='user')

class Note(models.Model):
    body = models.TextField(null=True, blank=True)
    updated = models.DateTimeField(auto_now=True)
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.body[0:50]