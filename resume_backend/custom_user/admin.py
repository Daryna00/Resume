from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from django.utils.safestring import mark_safe
from django.utils.translation import gettext_lazy as _

from .forms import CustomUserCreationForm, CustomUserChangeForm
from .models import MyUser


class MyUserAdmin(UserAdmin):

    add_form = CustomUserCreationForm
    form = CustomUserChangeForm

    list_display = (
        "id",
        "email",
        "phone",
        "first_name",
        "last_name",
        "is_active",
        "get_avatar"
    )
    list_display_links = ('id', 'email',)
    search_fields = ('email', 'first_name', 'last_name',)
    ordering = ('email',)
    readonly_fields = (
        'first_login', 'last_login', 'date_joined', 'get_avatar', 'phone',
    )
    fieldsets = (
        (None, {"fields": ("email", "password")}),
        (_("Personal info"), {"fields": ("first_name", "last_name", "middle_name")}),
        (
            _("Permissions"),
            {
                "fields": (
                    "is_active",
                    "is_staff",
                    "is_superuser",
                    "groups",
                    "user_permissions",
                ),
            },
        ),
        (_('Important dates'), {'fields': ('first_login', 'last_login', 'date_joined')}),
        (_("Additional information"), {"fields": (
            "phone", "avatar", "get_avatar", "gender", "birthday", "address", "biography",
            "github", "linkedin",
        )}),
    )
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'password1', 'password2', 'is_staff', 'is_active')}
        ),
    )

    save_as = True
    save_on_top = True

    def get_avatar(self, obj):
        """Avatar in admin panel"""

        if obj.avatar:
            return mark_safe(f'<img src="{obj.avatar.url}" width="100">')
        else:
            return f'Avatar not set'

    get_avatar.short_description = 'Avatar_mini'


admin.site.register(MyUser, MyUserAdmin)
