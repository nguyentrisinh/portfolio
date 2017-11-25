from django.db import models


class Contact(models.Model):
    objects = models.Manager()

    address = models.CharField(max_length=255, null=True, blank=True)
    phone_one = models.CharField(max_length=20, null=True, blank=True)
    phone_two = models.CharField(max_length=20, null=True, blank=True)
    email_one = models.EmailField(null=True, blank=True)
    email_two = models.EmailField(null=True, blank=True)
    facebook_url = models.CharField(max_length=255, null=True, blank=True)
    twitter_url = models.CharField(max_length=255, null=True, blank=True)
    google_plus_url = models.CharField(max_length=255, null=True, blank=True)
    upword_url = models.CharField(max_length=255, null=True, blank=True)
    github_url = models.CharField(max_length=255, null=True, blank=True)