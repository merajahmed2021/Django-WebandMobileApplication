from django.urls import path, include
from .api import RegisterAPI, LoginAPI, UserAPI
from knox import views as knox_views
from .views import ViewProfileView,ProfileView,ProfileUpdateView
# from django.views.decorators.csrf import csrf_exempt

urlpatterns = [
  path('api/auth', include('knox.urls')),
  path('api/auth/register', RegisterAPI.as_view()),
  path('api/auth/login', LoginAPI.as_view()),
  path('api/auth/user', UserAPI.as_view()),
  path('api/auth/logout', knox_views.LogoutView.as_view(), name='knox_logout'),
  
  path('user/profile/<int:pk>/', ViewProfileView.as_view()),
  path('user/createprofile/', ProfileView.as_view()),

  path('user/editprofile/<int:pk>/',  ProfileUpdateView.as_view()),
  
  # path('user/editprofile/<str:pk>/',ProfileUpdateView, name="task-update"),
  # path('user/editprofile/<int:pk>/',  csrf_exempt(ProfileView.as_view())),

]