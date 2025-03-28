from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from .serializer import *
from rest_framework.views import APIView

#............................................Notes Management............................................
class Notes_Management(APIView):
    
    permission_classes = [IsAuthenticated]
    
    #............create notes............
    def post(self,request):
        
        serializer = NotesSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'message': 'Notes Created Successfully'}, status=status.HTTP_201_CREATED)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    #............get all notes............
    def get(self,request): 
        
        id = request.data.get('id')
        
        if not id : 
            return Response('Please provide id', status=status.HTTP_400_BAD_REQUEST)
        
        try: 
            
            notes = Notes.objects.filter(user=id)
            serializer = NotesSerializer(notes,many=True)
            return Response(serializer.data,status=status.HTTP_200_OK)
        
        except Exception as e: 
            
            return Response(str(e), status=status.HTTP_400_BAD_REQUEST)
        
    #............update notes............
    def put(self,request): 
        
        data = request.data
        
        try: 
            if not data['id']: 
                return Response('Please provide id', status=status.HTTP_400_BAD_REQUEST)
            
            note = Notes.objects.get(id = data['id'])
            serializer = NotesSerializer(note, data=request.data,partial=True)
            
            if serializer.is_valid():
                serializer.save()
                return Response({'message': 'Notes Updated Successfully'}, status=status.HTTP_200_OK)
            
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except Notes.DoesNotExist:
            return Response('Note does not exist', status=status.HTTP_400_BAD_REQUEST)
        
    def delete(self,request): 
        
        id = request.data.get('id')
        
        if not id : 
            return Response('Please provide id', status=status.HTTP_400_BAD_REQUEST)
        
        try: 
            
            note = Notes.objects.get(id=id)
            note.delete()
            return Response({'message': 'Note Deleted Successfully'},status=status.HTTP_200_OK)
        
        except Notes.DoesNotExist:
            return Response('Note does not exist', status=status.HTTP_400_BAD_REQUEST)