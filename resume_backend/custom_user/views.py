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
