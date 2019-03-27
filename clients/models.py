from django.db import models

class Client(models.Model):
	name = models.CharField(max_length=255)
	email = models.EmailField(max_length=255, unique=True)
	address = models.CharField(max_length=255)
	city = models.CharField(max_length=255)
	state = models.CharField(max_length=255)
	postcode = models.IntegerField()