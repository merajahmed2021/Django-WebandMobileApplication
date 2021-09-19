from django.urls import path, include
from .views import ViewPostView,PostView,PostDetailsView
from django.views.decorators.csrf import csrf_exempt

urlpatterns = [
    path('', ViewPostView.as_view()),
    path('create/', PostView.as_view()),
    path('dashboard/', PostView.as_view()),
    path('delete/<int:pk>/', PostView.as_view()),
    path('details/<int:pk>/', PostDetailsView.as_view()),
]
