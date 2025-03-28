from django.urls import path
from Authentication.views import *
from Notes_app.views import *
from rest_framework_simplejwt.views import TokenRefreshView

urlpatterns = [
    path('registration/', Registration,name='registration'),
    path('login/', MyTokenobtainedPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('notes_create/', Notes_Creating, name='notes_create'),
]
