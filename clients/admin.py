from django.contrib import admin
from clients.models import Client

class ClientAdmin(admin.ModelAdmin):
	list_display = ('name', 'email', 'address')

admin.site.register(Client, ClientAdmin)
