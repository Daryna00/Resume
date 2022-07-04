from rest_framework import serializers

from .models import MyUser


class MyUserInfoSerializer(serializers.ModelSerializer):
    """ Get User information """

    # avatar = serializers.ImageField(read_only=True)

    class Meta:
        model = MyUser
        fields = (
            'first_name', 'last_name', 'middle_name', 'phone', 'avatar', 'address', 'biography',
            'github', 'linkedin', 'birthday', 'gender'
        )
