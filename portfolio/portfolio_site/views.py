# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.http import HttpResponse
from django.template import loader, Context

from django.shortcuts import render

from .models import Contact


# Create your views here.
def index(request):
    contact = Contact.objects.all().first()
    context = {
        "contact": contact
    }
    return render(request, 'index.html', context=context)


def work_detail(request, *args, **kwargs):
    context = {
        'content': 'test'
    }
    return render(request, 'work-details.html', context)


def test(request, *args, **kwargs):
    return render(request, 'index-1.html')


def portfolio(request, *args, **kwargs):
    return render(request, 'portfolio.html')


def contact(request, *args, **kwargs):
    contact = Contact.objects.all().first()
    context = {
        "contact": contact
    }
    return render(request, 'contact.html', context=context)


def profile(request, *args, **kwargs):
    return render(request, 'profile.html')
