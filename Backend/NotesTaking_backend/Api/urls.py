from django.urls import path
from Authentication.views import *
from Notes_app.views import *
from rest_framework_simplejwt.views import TokenRefreshView

urlpatterns = [
    path('registration/', Registration,name='registration'),
    path('login/', MyTokenobtainedPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('notes_management/', Notes_Management.as_view(), name='notes_management'),
]
