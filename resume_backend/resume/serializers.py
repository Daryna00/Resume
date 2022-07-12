from django.conf import settings
from rest_framework import serializers

from custom_user.models import MyUser
from custom_user.serializers import MyUserInfoSerializer
from .services import delete_old_photo
from . import models


class BaseSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(read_only=True)


class SocialLinkSerializer(BaseSerializer):
    """Social Link Serializer"""

    class Meta:
        model = models.SocialLink
        fields = ('id', 'user', 'name', 'link')


class EmploymentHistorySerializer(BaseSerializer):
    """Employment History Serializer"""

    class Meta:
        model = models.EmploymentHistory
        fields = ('id', 'user', 'name', 'about', 'start_date', 'end_date')


class EducationSerializer(BaseSerializer):
    """Education Serializer"""

    class Meta:
        model = models.Education
        fields = ('id', 'user', 'name', 'about', 'start_date', 'end_date')


class CoursesSerializer(BaseSerializer):
    """Courses Serializer"""

    class Meta:
        model = models.Courses
        fields = ('id', 'user', 'name', 'start_date', 'end_date')


class SkillsSerializer(BaseSerializer):
    """Skills Serializer"""

    class Meta:
        model = models.Skills
        fields = ('id', 'user', 'name', 'skill')


class LanguagesSerializer(BaseSerializer):
    """Languages Serializer"""

    class Meta:
        model = models.Languages
        fields = ('id', 'user', 'name', 'skill')


class MainInfoSerializer(BaseSerializer):
    """ Main Info Serializer """

    class Meta:
        model = models.MainInfo
        fields = (
            'user', 'email', 'first_name', 'last_name', 'middle_name', 'phone', 'photo',
            'country', 'city', 'additional_address_info', 'date_of_birth', 'vacancy', 'about_me',
            'hobbies'
        )

    def update(self, instance, validated_data):
        delete_old_photo(instance.photo.path)
        return super().update(instance, validated_data)


class FullUserInfoSerializer(serializers.ModelSerializer):
    """Full User Info Serializer"""

    user_main_info = MainInfoSerializer()
    user_links = SocialLinkSerializer(many=True)
    user_employment = EmploymentHistorySerializer(many=True)
    user_education = EducationSerializer(many=True)
    user_courses = CoursesSerializer(many=True)
    user_skills = SkillsSerializer(many=True)
    user_languages = LanguagesSerializer(many=True)

    class Meta:
        model = MyUser
        fields = (
            'user_main_info', 'user_links', 'user_employment', 'user_education', 'user_courses',
            'user_skills', 'user_languages',
        )
