from django.urls import path

from . import views


urlpatterns = [
    path('social-link/', views.SocialLinkListCreateView.as_view()),
    path('social-link/<int:pk>/', views.SocialLinkRUDView.as_view()),

    path('employment-history/', views.EmploymentHistoryListCreateView.as_view()),
    path('employment-history/<int:pk>/', views.EmploymentHistoryRUDView.as_view()),

    path('education/', views.EducationListCreateView.as_view()),
    path('education/<int:pk>/', views.EducationRUDView.as_view()),

    path('courses/', views.CoursesListCreateView.as_view()),
    path('courses/<int:pk>/', views.CoursesRUDView.as_view()),

    path('skills/', views.SkillsListCreateView.as_view()),
    path('skills/<int:pk>/', views.SkillsRUDView.as_view()),

    path('languages/', views.LanguagesListCreateView.as_view()),
    path('languages/<int:pk>/', views.LanguagesRUDView.as_view()),

    path('main-info/', views.MainInfoView.as_view({'get': 'list'})),
    path('main-info/<int:pk>/', views.MainInfoView.as_view({'put': 'update'})),

    path('full-info/', views.FullUserInfoAPIView.as_view()),

]


# urlpatterns = [
#     path('social-link/', views.SocialLinkView.as_view({'get': 'list', 'post': 'create'})),
#     path('social-link/<int:pk>/', views.SocialLinkView.as_view(
#         {'put': 'update', 'delete': 'destroy'}
#     )),
#
#     path('employmeny/', views.EmploymentHistoryView.as_view({'get': 'list', 'post': 'create'})),
#     path('employmeny/<int:pk>/', views.EmploymentHistoryView.as_view(
#         {'put': 'update', 'delete': 'destroy'}
#     )),
#
#     path('education/', views.EducationView.as_view({'get': 'list', 'post': 'create'})),
#     path('education/<int:pk>/', views.EducationView.as_view(
#         {'put': 'update', 'delete': 'destroy'}
#     )),
#
#     path('courses/', views.CoursesView.as_view({'get': 'list', 'post': 'create'})),
#     path('courses/<int:pk>/', views.CoursesView.as_view({'put': 'update', 'delete': 'destroy'})),
#
#     path('skills/', views.SkillsView.as_view({'get': 'list', 'post': 'create'})),
#     path('skills/<int:pk>/', views.SkillsView.as_view({'put': 'update', 'delete': 'destroy'})),
#
#     path('languages/', views.LanguagesView.as_view({'get': 'list', 'post': 'create'})),
#     path('languages/<int:pk>/', views.LanguagesView.as_view(
#         {'put': 'update', 'delete': 'destroy'}
#     )),
#
#     path('main-info/', views.MainInfoView.as_view({'get': 'list', 'post': 'create'})),
#     path('main-info/<int:pk>/', views.MainInfoView.as_view({'put': 'update', 'delete': 'destroy'})),
#
#     path('full-info/', views.FullUserInfoAPIView.as_view()),
#
# ]
