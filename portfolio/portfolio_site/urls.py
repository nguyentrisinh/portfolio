from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^portfolio/$', views.portfolio, name='portfolio'),
    url(r'^contact/$', views.contact, name='contact'),
    url(r'^test/$', views.test, name='test'),
    url(r'^work_detail/(?P<job_id>[\w]+)/$', views.work_detail, name='work details'),
]