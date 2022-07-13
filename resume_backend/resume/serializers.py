from django.conf import settings
from rest_framework import serializers

from custom_user.models import MyUser
from custom_user.serializers import MyUserInfoSerializer
from .services import delete_old_file
from . import models


class BaseSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(read_only=True)


class SocialLinkListSerializer(serializers.ListSerializer):
    """ Social Link bulk_create serializer """

    def create(self, validated_data):
        social_links = [models.SocialLink(**item) for item in validated_data]
        return models.SocialLink.objects.bulk_create(social_links)


class SocialLinkSerializer(BaseSerializer):
    """Social Link Serializer"""

    class Meta:
        model = models.SocialLink
        fields = ('id', 'user', 'name', 'link')
        list_serializer_class = SocialLinkListSerializer

    def create(self, validated_data):
        return models.SocialLink.objects.create(**validated_data)


class EmploymentHistoryListSerializer(serializers.ListSerializer):
    """ Employment History bulk_create serializer """

    def create(self, validated_data):
        employment_history = [models.EmploymentHistory(**item) for item in validated_data]
        return models.EmploymentHistory.objects.bulk_create(employment_history)


class EmploymentHistorySerializer(BaseSerializer):
    """Employment History Serializer"""

    class Meta:
        model = models.EmploymentHistory
        fields = ('id', 'user', 'company', 'vacancy', 'city', 'about', 'start_date', 'end_date')
        list_serializer_class = EmploymentHistoryListSerializer

    def create(self, validated_data):
        return models.EmploymentHistory.objects.create(**validated_data)


class EducationListSerializer(serializers.ListSerializer):
    """ Education bulk_create serializer """

    def create(self, validated_data):
        education = [models.Education(**item) for item in validated_data]
        return models.Education.objects.bulk_create(education)


class EducationSerializer(BaseSerializer):
    """Education Serializer"""

    class Meta:
        model = models.Education
        fields = ('id', 'user', 'institution', 'name', 'about', 'start_date', 'end_date')
        list_serializer_class = EducationListSerializer

    def create(self, validated_data):
        return models.Education.objects.create(**validated_data)


class CoursesListSerializer(serializers.ListSerializer):
    """ Courses bulk_create serializer """

    def create(self, validated_data):
        courses = [models.Courses(**item) for item in validated_data]
        return models.Courses.objects.bulk_create(courses)


class CoursesSerializer(BaseSerializer):
    """Courses Serializer"""

    class Meta:
        model = models.Courses
        fields = ('id', 'user', 'company', 'name', 'start_date', 'end_date')
        list_serializer_class = CoursesListSerializer

    def create(self, validated_data):
        return models.Courses.objects.create(**validated_data)


class SkillsListSerializer(serializers.ListSerializer):
    """ Skills bulk_create serializer """

    def create(self, validated_data):
        skills = [models.Skills(**item) for item in validated_data]
        return models.Skills.objects.bulk_create(skills)


class SkillsSerializer(BaseSerializer):
    """Skills Serializer"""

    class Meta:
        model = models.Skills
        fields = ('id', 'user', 'name', 'skill')
        list_serializer_class = SkillsListSerializer

    def create(self, validated_data):
        return models.Skills.objects.create(**validated_data)


class LanguagesListSerializer(serializers.ListSerializer):
    """ Languages bulk_create serializer """

    def create(self, validated_data):
        languages = [models.Languages(**item) for item in validated_data]
        return models.Languages.objects.bulk_create(languages)


class LanguagesSerializer(BaseSerializer):
    """Languages Serializer"""

    class Meta:
        model = models.Languages
        fields = ('id', 'user', 'name', 'skill')
        list_serializer_class = LanguagesListSerializer

    def create(self, validated_data):
        return models.Languages.objects.create(**validated_data)


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
        delete_old_file(instance.photo.path)
        return super().update(instance, validated_data)


class ResumePDFSerializer(BaseSerializer):
    """Resume PDF Serializer"""

    class Meta:
        model = models.ResumePDF
        fields = ('id', 'user', 'pdf_file')


class FullUserInfoSerializer(serializers.ModelSerializer):
    """Full User Info Serializer"""

    user_main_info = MainInfoSerializer()
    user_links = SocialLinkSerializer(many=True)
    user_employment = EmploymentHistorySerializer(many=True)
    user_education = EducationSerializer(many=True)
    user_courses = CoursesSerializer(many=True)
    user_skills = SkillsSerializer(many=True)
    user_languages = LanguagesSerializer(many=True)
    # user_pdf = ResumePDFSerializer(many=True)

    class Meta:
        model = MyUser
        fields = (
            'user_main_info', 'user_links', 'user_employment', 'user_education', 'user_courses',
            'user_skills', 'user_languages'
        )
