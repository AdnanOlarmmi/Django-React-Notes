from django.urls import path
from . import views

urlpatterns = [
    path('getRoutes', views.getRoutes, name='getRoutes'),
    path('notes', views.getNotes, name="notes"),
    path('notes/<str:pk>', views.getNote, name="note")
]