from django.urls import path
from . import views

urlpatterns = [
    path('getRoutes', views.getRoutes, name='getRoutes'),
    path('notes', views.getNotes, name="notes"),
    path('notes/<str:pk>/update', views.updateNote, name="update-note"),
    path('notes/<str:pk>/delete', views.deleteNote, name="delete-note"),
    path('notes/create', views.createNote, name="create-note"),
    path('notes/<str:pk>', views.getNote, name="note")
    
]