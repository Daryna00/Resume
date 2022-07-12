from django.core.exceptions import ObjectDoesNotExist
from django.db.models.signals import post_save
from django.dispatch import receiver
from django.shortcuts import redirect
from django.utils import timezone
from rest_framework import permissions, parsers
from rest_framework.generics import get_object_or_404
from rest_framework.viewsets import generics

from resume.models import MainInfo
from .models import MyUser
from .serializers import MyUserInfoSerializer


class MyUserProfileView(generics.RetrieveUpdateAPIView):
    """ View for User profile """

    parser_classes = (parsers.MultiPartParser,)
    serializer_class = MyUserInfoSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return MyUser.objects.filter(id=self.request.user.id)

    def get_object(self):
        obj = get_object_or_404(self.get_queryset())
        if obj.first_login is None:
            obj.first_login = timezone.now()
            obj.save()
        self.check_object_permissions(self.request, obj)
        return obj


@receiver(post_save, sender=MyUser)
def save_or_create_profile(sender, instance, created, **kwargs):
    if created:
        MainInfo.objects.create(user=instance)
    else:
        try:
            instance.user_main_info.save()
        except ObjectDoesNotExist:
            MainInfo.objects.create(user=instance)


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
