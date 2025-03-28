from django.db import models
from Authentication.models import CustomUser
import uuid
# Create your models here.

class Notes(models.Model): 
    
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    title = models.CharField(max_length=100, blank=False)
    content = models.TextField(blank=False,null=False)
    created_on = models.DateTimeField(auto_now_add=True)
    latest_update = models.DateTimeField(auto_now=True)
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE,related_name='user')
    
    class Meta: 
        ordering = ['-created_on']