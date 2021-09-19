from rest_framework import permissions
from rest_framework.views import APIView
from .models import Contact
from django.core.mail import send_mail
from rest_framework.response import Response
# cumcgppublceiube
class ContactCreateView(APIView):
    permission_classes = (permissions.AllowAny, )
    def post(self, request, format=None):
        data = self.request.data
        print(data)
        try:
            # send_mail(data['subject'],
            #       'Name: '+ data['name']
            #     + '\nEmail: '+ data['email']
            #     + '\n\nMessage:\n' + data['message'],
            #     '[merajahmed2112@gmail.com]',
            #     ['[merajahmed211@gmail.com]'],
            #     fail_silently=False
            # )
            message='Name: '+ data['name']+ '\nEmail: '+ data['email']+ '\n\nMessage:\n' + data['message']
            send_mail(
                data['subject'],
                message,
                data['email'],
                ['merajahmed2112@gmail.com'],
                fail_silently=False,
            )
            contact = Contact(name=data['name'], email=data['email'], subject=data['subject'], message=data['message'])
            contact.save()
            return Response({'success': 'Message sent successfully'})

        except:
            return Response({'error': 'Message failed to send'})
