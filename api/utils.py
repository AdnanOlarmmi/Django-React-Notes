from .serializers import NoteSerializer
from rest_framework.response import Response
from .models import Note

def addNote(request):
    data = request.data
    note = Note.objects.create(body=data['body'])
    serializer = NoteSerializer(note, many=False)

    return Response(serializer.data)

def getAllNotes():
    notes = Note.objects.all()
    serializer = NoteSerializer(notes, many=True)
    return Response(serializer.data)

def updateNote(request, pk):
    data = request.data
    note = Note.objects.get(id=pk)
    serializer = NoteSerializer(instance=note, data=data)

    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)

def getNoteInfo(pk):
    note = Note.objects.get(id=pk)
    serializer = NoteSerializer(note, many=False)
    return Response(serializer.data)

def deleteNote(pk):
    note = Note.objects.get(id=pk)
    note.delete()

    return Response('Note was deleted')