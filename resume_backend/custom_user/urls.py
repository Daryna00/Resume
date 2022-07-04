from django.urls import path

from . import views


urlpatterns = [
    path('', views.MyUserProfileView.as_view()),
]
