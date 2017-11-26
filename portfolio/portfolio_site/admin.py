# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.contrib import admin
from .models import Contact, Project, Link, Category, ProjectImage

# Register your models here.
admin.site.register(Contact)
admin.site.register(Project)
admin.site.register(ProjectImage)
admin.site.register(Link)
admin.site.register(Category)
