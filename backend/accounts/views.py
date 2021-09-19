from .serializers import ProfileSerializer
from .models import Profile
from rest_framework.views import APIView
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.response import Response
from rest_framework import status
from django.core.exceptions import ObjectDoesNotExist

from django.contrib.auth.models import User
from rest_framework import  permissions

# from braces.views import CsrfExemptMixin
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.csrf import csrf_protect
from django.utils.decorators import method_decorator

# from rest_framework.decorators import api_view
# from .clear import csrf_clear


class ViewProfileView(APIView):
    def get(self, request, *args, **kwargs):
        Profile_id = int(kwargs['pk'])
        posts = Profile.objects.get(user=Profile_id)
        serializer = ProfileSerializer(posts)
        return Response(serializer.data)

# @csrf_exempt
# @method_decorator(csrf_exempt, name='dispatch')
# @method_decorator(basic_auth_required(
    # target_test=lambda request: not request.user.is_authenticated
# ), name='dispatch')

# @method_decorator(csrf_exempt, name='dispatch')
class ProfileView(APIView):
    permission_classes = [
      permissions.IsAuthenticated,
    ]
    parser_classes = (MultiPartParser, FormParser)

    def get(self, request, *args, **kwargs):
        Profiles= Profile.objects.filter(user_id = self.request.user.id)
        serializer = ProfileSerializer(Profiles, many=True)
        return Response(serializer.data)

    def post(self, request, *args, **kwargs):
        Profiles_serializer = ProfileSerializer(data=request.data)
        print(request.data)
        if Profiles_serializer.is_valid():
            Profiles_serializer.save(user=request.user)
            return Response(Profiles_serializer.data, status=status.HTTP_201_CREATED)
        else:
            print('error', Profiles_serializer.errors)
            return Response(Profiles_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def delete(self, request, *args, **kwargs):
        Profile_id = int(kwargs['pk'])
        try:
            profile = Profile.objects.get(id=Profile_id)
            profile.delete()
            return Response({'msg': 'Profile deleted'}, status=status.HTTP_200_OK)
        except ObjectDoesNotExist:
            return Response({'error': "No Profile found"}, status=status.HTTP_404_NOT_FOUND)

    # @csrf_exempt
    # @need_post_parameters([PARAM_MESSAGE_OBJ])
    # def post(self, request, *args, **kwargs):
        # Profile_id = int(kwargs['pk'])
        # Profiles_serializer = ProfileSerializer(Profile_id,data=request.data)
        # print(request.data)
        # if Profiles_serializer.is_valid():
            # Profiles_serializer.save(user=request.user)
            # return Response(Profiles_serializer.data, status=status.HTTP_201_CREATED)
        # else:
            # print('error', Profiles_serializer.errors)
            # return Response(Profiles_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        
 


# @api_view(['POST'])
# def ProfileUpdateView(request, pk):
# 	task = Profile.objects.get(id=pk)
# 	serializer = ProfileSerializer(instance=task, data=request.data)
# 	if serializer.is_valid():
# 		serializer.save()
# 	return Response(serializer.data)
# @csrf_protect


class ProfileUpdateView(APIView):
    permission_classes = [
      permissions.IsAuthenticated,
    ]
    parser_classes = (MultiPartParser, FormParser)   
        
    def post(self, request, *args, **kwargs):
        Profile_id = int(kwargs['pk'])
        task = Profile.objects.get(id=Profile_id)
        serializer = ProfileSerializer(instance=task, data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            print('error', serializer.errors)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        # if serializer.is_valid():
            # serializer.save()
        # return Response(serializer.data)

        # Profile_id = int(kwargs['pk'])
        # Profiles_serializer = ProfileSerializer(Profile_id,data=request.data)
        # print(request.data)
        # if Profiles_serializer.is_valid():
        #     Profiles_serializer.save(user=request.user)
        #     return Response(Profiles_serializer.data, status=status.HTTP_201_CREATED)
        # else:
        #     print('error', Profiles_serializer.errors)
        #     return Response(Profiles_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
