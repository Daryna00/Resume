from django.contrib import admin
from django.utils.safestring import mark_safe

from .models import MainInfo, SocialLink, EmploymentHistory, Education, Courses, Skills, Languages


@admin.register(MainInfo)
class MainInfoAdmin(admin.ModelAdmin):
    """ Main Info """

    list_display = ("id", "user", "email", "first_name", "last_name", "phone")
    list_display_links = ("id", "user")
    fields = (
        "user", "email", "first_name", "last_name", "middle_name", "phone", "photo", "get_photo",
        "country", "city", "additional_address_info", "date_of_birth", "vacancy", "about_me",
        "hobbies",
    )
    readonly_fields = ("get_photo", )
    save_as = True
    save_on_top = True

    def get_photo(self, obj):
        """Avatar in admin panel"""

        if obj.avatar:
            return mark_safe(f'<img src="{obj.photo.url}" width="100">')
        else:
            return f'Photo not set'

    get_photo.short_description = 'Photo_mini'


@admin.register(SocialLink)
class SocialLinkAdmin(admin.ModelAdmin):
    """ Social Link """

    list_display = ("id", "name", "user")
    list_display_links = ("id", "name")
    fields = ("name", "link", "user")
    save_as = True
    save_on_top = True


@admin.register(EmploymentHistory)
class EmploymentHistoryAdmin(admin.ModelAdmin):
    """ Employment History """

    list_display = ("id", "name", "user")
    list_display_links = ("id", "name")
    fields = ("name", "user", "about", "start_date", "end_date")
    save_as = True
    save_on_top = True


@admin.register(Education)
class EducationAdmin(admin.ModelAdmin):
    """ Education """

    list_display = ("id", "name", "user", "start_date", "end_date")
    list_display_links = ("id", "name")
    fields = ("name", "user", "about", "start_date", "end_date")
    save_as = True
    save_on_top = True


@admin.register(Courses)
class CoursesAdmin(admin.ModelAdmin):
    """ Courses """

    list_display = ("id", "name", "user", "start_date", "end_date")
    list_display_links = ("id", "name")
    fields = ("name", "user", "start_date", "end_date",)
    save_as = True
    save_on_top = True


@admin.register(Skills)
class SkillsAdmin(admin.ModelAdmin):
    """ Skills """

    list_display = ("id", "name", "user", "skill")
    list_display_links = ("id", "name")
    fields = ("name", "user", "skill")
    save_as = True
    save_on_top = True


@admin.register(Languages)
class LanguagesAdmin(admin.ModelAdmin):
    """ Languages """

    list_display = ("id", "name", "user", "skill")
    list_display_links = ("id", "name")
    fields = ("name", "user", "skill")
    save_as = True
    save_on_top = True
