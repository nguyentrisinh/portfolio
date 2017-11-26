from django.db import models
from .project import Project

PLATFORM = (
    (1, 'IOS'),
    (2, 'ANDROID'),
    (3, 'WEB'),
    (4, 'WINDOWS')
)


class Link(models.Model):
    objects = models.Manager()

    url = models.CharField(max_length=255, null=True, blank=True)
    platform = models.SmallIntegerField(choices=PLATFORM)

    project_id = models.ForeignKey(Project, on_delete=models.CASCADE)

    def __str__(self):
        return '{}: {}'.format(self.project_id.title, self.get_platform_display())
