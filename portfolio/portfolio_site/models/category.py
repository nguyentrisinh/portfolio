from django.db import models
from .project import Project


CATEGORY_TYPE = (
    (1, 'Mobile'),
    (2, 'Web'),
    (3, 'Desktop'),
    (4, 'Linux')
)


class Category(models.Model):
    objects = models.Manager()

    type = models.SmallIntegerField(choices=CATEGORY_TYPE)

    project_id = models.ForeignKey(Project, on_delete=models.CASCADE)

    def __str__(self):
        return '{}: {}'.format(self.project_id.title, self.get_type_display())
