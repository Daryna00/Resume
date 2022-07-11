from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include
from drf_yasg import openapi
from drf_yasg.views import get_schema_view
from rest_framework import permissions
from custom_user.views import get_activation_url, get_reset_password_url

schema_view = get_schema_view(
   openapi.Info(
      title="Resume DRF API",
      default_version='v1',
      description="Docs",
      # terms_of_service="https://www.google.com/policies/terms/",
      # contact=openapi.Contact(email="contact@snippets.local"),
      # license=openapi.License(name="BSD License"),
   ),
   public=True,
   permission_classes=(permissions.AllowAny,)
)


urlpatterns = [
    path('admin/', admin.site.urls),

    path(
        'api/v1/swagger/', schema_view.with_ui('swagger', cache_timeout=0),name='schema-swagger-ui'
    ),
    path('api/v1/redoc/', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),

    path('api/v1/auth/', include('djoser.urls')),
    path('api/v1/auth/', include('djoser.urls.jwt')),
    path('api/v1/auth/', include('djoser.social.urls')),

    path('activate/<uid>/<token>/', get_activation_url),
    path('password/reset/confirm/<uid>/<token>/', get_reset_password_url),

    path('api/v1/my-profile/', include('custom_user.urls')),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

