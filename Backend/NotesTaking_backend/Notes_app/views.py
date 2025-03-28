from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view,permission_classes
from rest_framework.permissions import IsAuthenticated
from .serializer import *


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def Notes_Creating(request):
    
    data = request.data
    if not data: 
        return Response('Please provide required fields', status=status.HTTP_400_BAD_REQUEST)
    
    serializer = NotesSerializer(data=data)
    if serializer.is_valid():
        serializer.save()
        return Response('Notes Created Successfully', status=status.HTTP_201_CREATED)
    else:
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)