from rest_framework import serializers

from .models import MyUser
from .services import delete_old_avatar


class MyUserInfoSerializer(serializers.ModelSerializer):
    """ Get User information """

    class Meta:
        model = MyUser
        fields = (
            'first_name', 'last_name', 'middle_name', 'nickname', 'phone', 'avatar', 'address',
            'biography', 'birthday', 'github', 'linkedin', 'facebook',
        )

    def update(self, instance, validated_data):
        if instance.avatar:
            delete_old_avatar(instance.avatar.path)
        return super().update(instance, validated_data)
