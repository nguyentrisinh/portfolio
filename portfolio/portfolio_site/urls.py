from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^portfolio/$', views.portfolio, name='portfolio'),
    url(r'^profile/$', views.profile, name='profile'),
    url(r'^contact/$', views.contact, name='contact'),
    url(r'^test/$', views.test, name='test'),
    url(r'^project_detail/$', views.project_detail, name='project details'),
]