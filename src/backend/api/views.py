from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from base.models import Item,About
from .serializers import *


# Create your views here.
@api_view(['GET'])
def getData(request):
    items = Item.objects.all()
    items = About.objects.all()
    serializer = ItemSerializer(items, many=True)
    serializer = AboutSerializer(items, many=True)
    person = {'name': 'Hafeex', 'description':'','image': ''}  # This variable is unused; consider removing it if unnecessary
    return Response(serializer.data)


@api_view(['POST'])
def addItem(request):
    serializer = ItemSerializer(data=request.data)
    serializer = AboutSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=201)  # Return created status on success
    return Response(serializer.errors, status=400)  # Return error status on failure
