from .serializers import PostSerializer
from .models import Post
from rest_framework.views import APIView
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.response import Response
from rest_framework import status
from django.core.exceptions import ObjectDoesNotExist

from django.contrib.auth.models import User
from rest_framework import  permissions


class ViewPostView(APIView):
    def get(self, request, *args, **kwargs):
        posts = Post.objects.all().order_by('-id')
        serializer = PostSerializer(posts, many=True)
        return Response(serializer.data)


class PostView(APIView):
    permission_classes = [
      permissions.IsAuthenticated,
    ]
    parser_classes = (MultiPartParser, FormParser)

    def get(self, request, *args, **kwargs):
        posts= Post.objects.filter(user_id = self.request.user.id)
        serializer = PostSerializer(posts, many=True)
        return Response(serializer.data)

    def post(self, request, *args, **kwargs):
        posts_serializer = PostSerializer(data=request.data)
        if posts_serializer.is_valid():
            posts_serializer.save(user=request.user)
            return Response(posts_serializer.data, status=status.HTTP_201_CREATED)
        else:
            print('error', posts_serializer.errors)
            return Response(posts_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def delete(self, request, *args, **kwargs):
        post_id = int(kwargs['pk'])
        try:
            post = Post.objects.get(id=post_id)
            post.delete()
            return Response({'msg': 'Post deleted'}, status=status.HTTP_200_OK)
        except ObjectDoesNotExist:
            return Response({'error': "No post found"}, status=status.HTTP_404_NOT_FOUND)

    # def put(self, request, *args, **kwargs):
        # article = kwargs.get('id')
        # serializer = PostSerializer(article, data=request.data)
        # if serializer.is_valid():
            # serializer.save()
            # return Response(serializer.data)
        # return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    # def put(self, request, pk, format=None):
        # post_id = int(kwargs['pk'])
        # print(post_id)
        # serializer = PostSerializer(snippet, data=request.data)
        # if serializer.is_valid():
            # serializer.save()
            # return Response(serializer.data)
        # return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class PostDetailsView(APIView):
    def get(self, request, *args, **kwargs):
        post_id = int(kwargs['pk'])
        posts = Post.objects.get(id=post_id)
        serializer = PostSerializer(posts)
        return Response(serializer.data)



""" Concrete View Classes
#CreateAPIView
Used for create-only endpoints.
#ListAPIView
Used for read-only endpoints to represent a collection of model instances.
#RetrieveAPIView
Used for read-only endpoints to represent a single model instance.
#DestroyAPIView
Used for delete-only endpoints for a single model instance.
#UpdateAPIView
Used for update-only endpoints for a single model instance.
##ListCreateAPIView
Used for read-write endpoints to represent a collection of model instances.
RetrieveUpdateAPIView
Used for read or update endpoints to represent a single model instance.
#RetrieveDestroyAPIView
Used for read or delete endpoints to represent a single model instance.
#RetrieveUpdateDestroyAPIView
Used for read-write-delete endpoints to represent a single model instance.
"""
