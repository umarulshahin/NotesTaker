import re
from rest_framework import serializers
from .models import Notes

class NotesSerializer(serializers.ModelSerializer):
    
    class Meta: 
        model = Notes
        fields = ['title', 'content', 'user']
        read_only_fields = ['created_on', 'latest_update']
    
    def validate(self, data):
        base_pattern = r'^[A-Za-z].{2,}$'

        if not data.get("title") or not data.get("content"):
            raise serializers.ValidationError("Please provide required fields")

        if not re.fullmatch(base_pattern, data["title"]):
            raise serializers.ValidationError("Invalid Title: Title must contain at least 3 characters and must start with a letter")

        if not re.fullmatch(base_pattern, data["content"]):
            raise serializers.ValidationError("Invalid Content: Content must contain at least 3 characters and must start with a letter")

        return data

    def create(self, validated_data):
        return Notes.objects.create(**validated_data)
