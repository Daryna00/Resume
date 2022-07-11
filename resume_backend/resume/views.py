from django.conf import settings
from rest_framework import generics, permissions, viewsets, parsers
from rest_framework.generics import get_object_or_404

from custom_user.models import MyUser
from . import models
from . import serializers


class SocialLinkView(viewsets.ModelViewSet):
    """CRUD Social Link"""

    serializer_class = serializers.SocialLinkSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return models.SocialLink.objects.filter(user=self.request.user).select_related('user')

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class EmploymentHistoryView(viewsets.ModelViewSet):
    """CRUD Employment History"""

    serializer_class = serializers.EmploymentHistorySerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return models.EmploymentHistory.objects.filter(user=self.request.user).select_related('user')

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class EducationView(viewsets.ModelViewSet):
    """CRUD Education"""

    serializer_class = serializers.EducationSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return models.Education.objects.filter(user=self.request.user).select_related('user')

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class CoursesView(viewsets.ModelViewSet):
    """CRUD Courses"""

    serializer_class = serializers.CoursesSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return models.Courses.objects.filter(user=self.request.user).select_related('user')

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class SkillsView(viewsets.ModelViewSet):
    """CRUD Skills"""

    serializer_class = serializers.SkillsSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return models.Skills.objects.filter(user=self.request.user).select_related('user')

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class LanguagesView(viewsets.ModelViewSet):
    """CRUD Languages"""

    serializer_class = serializers.LanguagesSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return models.Languages.objects.filter(user=self.request.user).select_related('user')

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class MainInfoView(viewsets.ModelViewSet):
    """CRUD Main Info"""

    serializer_class = serializers.MainInfoSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return models.MainInfo.objects.filter(user=self.request.user).select_related('user')

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class FullUserInfoAPIView(generics.RetrieveAPIView):
    """ Get Full User Info """

    serializer_class = serializers.FullUserInfoSerializer

    def get_queryset(self):
        return MyUser.objects.filter(id=self.request.user.id).prefetch_related(
            'user_main_info', 'user_links', 'user_employment', 'user_education', 'user_courses',
            'user_skills', 'user_languages'
        )

    def get_object(self):
        obj = get_object_or_404(self.get_queryset())
        self.check_object_permissions(self.request, obj)
        return obj
