from django.db import models

class Dam(models.Model):
    name = models.CharField(max_length=50)

class FishCount(models.Model):
    date = models.DateField
    count = models.IntegerField(default=0)
    dam = models.ForeignKey(Dam, on_delete=models.CASCADE)



# Create your models here.
# class FishCount(models.Model):
#     date = models.DateField()
#     dam = models.CharField(max_length=50)
#     count = models.IntegerField(default=0)
    