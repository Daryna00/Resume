from django.urls import path

from . import views


urlpatterns = [
    path('social-link/', views.SocialLinkView.as_view({'get': 'list', 'post': 'create'})),
    path('social-link/<int:pk>/', views.SocialLinkView.as_view(
        {'put': 'update', 'delete': 'destroy'}
    )),

    path('employmeny/', views.EmploymentHistoryView.as_view({'get': 'list', 'post': 'create'})),
    path('employmeny/<int:pk>/', views.EmploymentHistoryView.as_view(
        {'put': 'update', 'delete': 'destroy'}
    )),

    path('education/', views.EducationView.as_view({'get': 'list', 'post': 'create'})),
    path('education/<int:pk>/', views.EducationView.as_view(
        {'put': 'update', 'delete': 'destroy'}
    )),

    path('courses/', views.CoursesView.as_view({'get': 'list', 'post': 'create'})),
    path('courses/<int:pk>/', views.CoursesView.as_view({'put': 'update', 'delete': 'destroy'})),

    path('skills/', views.SkillsView.as_view({'get': 'list', 'post': 'create'})),
    path('skills/<int:pk>/', views.SkillsView.as_view({'put': 'update', 'delete': 'destroy'})),

    path('languages/', views.LanguagesView.as_view({'get': 'list', 'post': 'create'})),
    path('languages/<int:pk>/', views.LanguagesView.as_view(
        {'put': 'update', 'delete': 'destroy'}
    )),

    path('main-info/', views.MainInfoView.as_view({'get': 'list', 'post': 'create'})),
    path('main-info/<int:pk>/', views.MainInfoView.as_view({'put': 'update', 'delete': 'destroy'})),

    path('full-info/', views.FullUserInfoAPIView.as_view()),

]
