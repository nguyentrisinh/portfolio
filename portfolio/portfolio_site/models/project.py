from django.db import models
from django.utils.text import slugify
from django.core.exceptions import ValidationError


class Project(models.Model):
    objects = models.Manager()

    title = models.CharField(max_length=255, null=False, blank=False)
    sub_title = models.CharField(max_length=255, null=True, blank=True)
    slug = models.SlugField(default=None, unique=True, null=True, blank=True)
    description = models.TextField(null=True, blank=True)
    client = models.CharField(max_length=255, null=True, blank=True)
    role = models.CharField(max_length=255, null=True, blank=True)
    skills = models.CharField(max_length=255, null=True, blank=True)
    length = models.CharField(max_length=255, null=True, blank=True)
    thumbnail = models.ImageField(upload_to='project/thumbnail/')

    def __str__(self):
        return '{}'.format(self.title)

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)

        super(Project, self).save()
