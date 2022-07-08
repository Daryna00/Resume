from django.shortcuts import redirect
from rest_framework import permissions
from rest_framework.generics import get_object_or_404
from rest_framework.viewsets import generics

from .models import MyUser
from .serializers import MyUserInfoSerializer


class MyUserProfileView(generics.RetrieveUpdateAPIView):
    """ View for User profile """

    serializer_class = MyUserInfoSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return MyUser.objects.filter(id=self.request.user.id)

    def get_object(self):
        obj = get_object_or_404(self.get_queryset())
        self.check_object_permissions(self.request, obj)
        return obj


def get_activation_url(request, uid, token, *args, **kwargs):
    new_port = '3000'
    hostname = request.get_host().split(':')[0]
    url = 'http://' + hostname + ':' + new_port + '/' + 'activate/' + uid + '/' + token + '/'
    return redirect(url)


def get_reset_password_url(request, uid, token, *args, **kwargs):
    new_port = '3000'
    hostname = request.get_host().split(':')[0]
    url = 'http://' + hostname + ':' + new_port + '/' + 'password/reset/confirm/' \
          + uid + '/' + token + '/'
    return redirect(url)

