from django.shortcuts import render
from django.http import HttpResponse
from django.http import JsonResponse

# Create your views here.

def index(request):
    return HttpResponse("Hello, world. You're at the notes index.")

def getRoutes(request):
    return JsonResponse("Our API", safe=False)