from django.db import models
from .project import Project


class ProjectImage(models.Model):
    objects = models.Manager()

    picture = models.ImageField(upload_to='project/image/')

    project_id = models.ForeignKey(Project, on_delete=models.CASCADE)

    def __str__(self):
        return '{}'.format(self.project_id.title)