from django.db import models

# Create your models here.
class Register(models.Model):
    Username=models.CharField(max_length=100)
    Email=models.EmailField(unique=True,blank=False,null=False)
    Password=models.CharField(max_length=128)
    Mobile=models.CharField(max_length=10)

    def __str__(self):
        return self.Username
    
class Booking(models.Model):
    Username=models.CharField(max_length=100)
    Mobile=models.CharField(max_length=10)
    Date=models.DateField()
    Time=models.TimeField()
    Reason=models.TextField()