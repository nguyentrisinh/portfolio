# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.http import HttpResponse
from django.template import loader, Context

from django.shortcuts import render


# Create your views here.
def index(request):
    return render(request, 'index.html')


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
    return render(request, 'contact.html')


def profile(request, *args, **kwargs):
    return render(request, 'profile.html')
