from django.db import models

# Create your models here.
class FishCount(models.Model):
    date = models.DateField()
    dam = models.CharField(max_length=50)
    count = models.IntegerField(default=0)
    