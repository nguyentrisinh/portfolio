# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.http import HttpResponse
from django.template import loader, Context

from django.shortcuts import render

from .models import Contact, Project, ProjectImage, Category, Link


# Create your views here.
def index(request):
    contact = Contact.objects.all().first()
    context = {
        "contact": contact
    }
    return render(request, 'index.html', context=context)


def project_detail(request, *args, **kwargs):
    # get project detail by slug
    slug = request.GET.get('slug')
    project = Project.objects.get(slug=slug)

    # add extra info like categories, links, images
    project.categories = Category.objects.filter(project_id=project)
    links = Link.objects.filter(project_id=project)

    if links.exists():
        project.links = Link.objects.filter(project_id=project)
    else:
        project.links = None

    project.images = ProjectImage.objects.filter(project_id=project)

    # get previous project
    previous_project = Project.objects.filter(id__lt=project.id).order_by('-id')

    if previous_project.exists():
        previous_project = previous_project.first()
    else:
        previous_project = None

    # get next project
    next_project = Project.objects.filter(id__gt=project.id).order_by('id')

    if next_project.exists():
        next_project = next_project.first()
    else:
        next_project = None

    context = {
        'project': project,
        'previous_project': previous_project,
        'next_project': next_project
    }
    return render(request, 'work-details.html', context)


def test(request, *args, **kwargs):
    return render(request, 'index-1.html')


def portfolio(request, *args, **kwargs):
    projects = Project.objects.all()

    for project in projects:
        project.categories = Category.objects.filter(project_id=project)
        links = Link.objects.filter(project_id=project)

        if links.exists():
            project.links = Link.objects.filter(project_id=project)
        else:
            project.links = None

        project.images = ProjectImage.objects.filter(project_id=project)

    context = {
        'projects': projects
    }

    return render(request, 'portfolio.html', context=context)


def contact(request, *args, **kwargs):
    contact = Contact.objects.all().first()
    context = {
        "contact": contact
    }
    return render(request, 'contact.html', context=context)


def profile(request, *args, **kwargs):
    return render(request, 'profile.html')
