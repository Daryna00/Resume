from rest_framework import generics, permissions, viewsets, parsers, response
from rest_framework.generics import (
    get_object_or_404, ListCreateAPIView, RetrieveUpdateDestroyAPIView
)

from custom_user.models import MyUser
from . import models
from . import serializers
from .services import delete_old_file


class SocialLinkListCreateView(ListCreateAPIView):
    """Create and List Social Link"""

    permission_classes = [permissions.IsAuthenticated]
    serializer_class = serializers.SocialLinkSerializer

    def get_queryset(self):
        return models.SocialLink.objects.filter(user=self.request.user).select_related('user')

    def create(self, request, *args, **kwargs):
        data = request.data
        serializer = serializers.SocialLinkSerializer(data=data, many=isinstance(data, list))
        serializer.is_valid(raise_exception=True)
        serializer.save(user=self.request.user)
        return response.Response(serializer.data)


class SocialLinkRUDView(RetrieveUpdateDestroyAPIView):
    """ Read, update and delete Social Link """

    permission_classes = [permissions.IsAuthenticated]
    serializer_class = serializers.SocialLinkSerializer

    def get_queryset(self):
        return models.SocialLink.objects.filter(user=self.request.user).select_related('user')


class EmploymentHistoryListCreateView(ListCreateAPIView):
    """Create and List Employment History"""

    permission_classes = [permissions.IsAuthenticated]
    serializer_class = serializers.EmploymentHistorySerializer

    def get_queryset(self):
        return models.EmploymentHistory.objects.filter(
            user=self.request.user
        ).select_related('user')

    def create(self, request, *args, **kwargs):
        data = request.data
        serializer = serializers.EmploymentHistorySerializer(data=data, many=isinstance(data, list))
        serializer.is_valid(raise_exception=True)
        serializer.save(user=self.request.user)
        return response.Response(serializer.data)


class EmploymentHistoryRUDView(RetrieveUpdateDestroyAPIView):
    """ Read, update and delete Employment History """

    permission_classes = [permissions.IsAuthenticated]
    serializer_class = serializers.EmploymentHistorySerializer

    def get_queryset(self):
        return models.EmploymentHistory.objects.filter(
            user=self.request.user
        ).select_related('user')


class EducationListCreateView(ListCreateAPIView):
    """Create and List Education"""

    permission_classes = [permissions.IsAuthenticated]
    serializer_class = serializers.EducationSerializer

    def get_queryset(self):
        return models.Education.objects.filter(user=self.request.user).select_related('user')

    def create(self, request, *args, **kwargs):
        data = request.data
        serializer = serializers.EducationSerializer(data=data, many=isinstance(data, list))
        serializer.is_valid(raise_exception=True)
        serializer.save(user=self.request.user)
        return response.Response(serializer.data)


class EducationRUDView(RetrieveUpdateDestroyAPIView):
    """ Read, update and delete Education """

    permission_classes = [permissions.IsAuthenticated]
    serializer_class = serializers.EducationSerializer

    def get_queryset(self):
        return models.Education.objects.filter(user=self.request.user).select_related('user')


class CoursesListCreateView(ListCreateAPIView):
    """Create and List Courses"""

    permission_classes = [permissions.IsAuthenticated]
    serializer_class = serializers.CoursesSerializer

    def get_queryset(self):
        return models.Courses.objects.filter(user=self.request.user).select_related('user')

    def create(self, request, *args, **kwargs):
        data = request.data
        serializer = serializers.CoursesSerializer(data=data, many=isinstance(data, list))
        serializer.is_valid(raise_exception=True)
        serializer.save(user=self.request.user)
        return response.Response(serializer.data)


class CoursesRUDView(RetrieveUpdateDestroyAPIView):
    """ Read, update and delete Courses """

    permission_classes = [permissions.IsAuthenticated]
    serializer_class = serializers.CoursesSerializer

    def get_queryset(self):
        return models.Courses.objects.filter(user=self.request.user).select_related('user')


class SkillsListCreateView(ListCreateAPIView):
    """Create and List Skills"""

    permission_classes = [permissions.IsAuthenticated]
    serializer_class = serializers.SkillsSerializer

    def get_queryset(self):
        return models.Skills.objects.filter(user=self.request.user).select_related('user')

    def create(self, request, *args, **kwargs):
        data = request.data
        serializer = serializers.SkillsSerializer(data=data, many=isinstance(data, list))
        serializer.is_valid(raise_exception=True)
        serializer.save(user=self.request.user)
        return response.Response(serializer.data)


class SkillsRUDView(RetrieveUpdateDestroyAPIView):
    """ Read, update and delete Skills """

    permission_classes = [permissions.IsAuthenticated]
    serializer_class = serializers.SkillsSerializer

    def get_queryset(self):
        return models.Skills.objects.filter(user=self.request.user).select_related('user')


class LanguagesListCreateView(ListCreateAPIView):
    """Create and List Languages"""

    permission_classes = [permissions.IsAuthenticated]
    serializer_class = serializers.LanguagesSerializer

    def get_queryset(self):
        return models.Languages.objects.filter(user=self.request.user).select_related('user')

    def create(self, request, *args, **kwargs):
        data = request.data
        serializer = serializers.LanguagesSerializer(data=data, many=isinstance(data, list))
        serializer.is_valid(raise_exception=True)
        serializer.save(user=self.request.user)
        return response.Response(serializer.data)


class LanguagesRUDView(RetrieveUpdateDestroyAPIView):
    """ Read, update and delete Languages """

    permission_classes = [permissions.IsAuthenticated]
    serializer_class = serializers.LanguagesSerializer

    def get_queryset(self):
        return models.Languages.objects.filter(user=self.request.user).select_related('user')


class MainInfoView(viewsets.ModelViewSet):
    """CRUD Main Info"""

    parser_classes = (parsers.MultiPartParser,)
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
            'user_skills', 'user_languages', 'user_pdf'
        )

    def get_object(self):
        obj = get_object_or_404(self.get_queryset())
        self.check_object_permissions(self.request, obj)
        return obj
