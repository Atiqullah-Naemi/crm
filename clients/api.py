from rest_framework import viewsets, permissions
from clients.models import Client
from .serializers import ClientSerializer


class ClientViewSet(viewsets.ModelViewSet):
	queryset = Client.objects.all()
	permission_classes = [
		permissions.AllowAny
	]
	serializer_class = ClientSerializer