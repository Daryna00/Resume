from django.contrib import admin
from django.utils.safestring import mark_safe

from .models import (
    MainInfo, SocialLink, EmploymentHistory, Education, Courses, Skills, Languages, ResumePDF
)


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
    search_fields = ('user', 'first_name', 'last_name')
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

    list_display = ("id", "user", "name")
    list_display_links = ("id", "user", "name")
    fields = ("user", "name", "link")
    search_fields = ('user', 'name')
    save_as = True
    save_on_top = True


@admin.register(EmploymentHistory)
class EmploymentHistoryAdmin(admin.ModelAdmin):
    """ Employment History """

    list_display = ("id", "user", "company", "city")
    list_display_links = ("id", "company", "user")
    fields = ("user", "company", "vacancy", "city", "about", "start_date", "end_date")
    search_fields = ('user', 'company', 'city')
    save_as = True
    save_on_top = True


@admin.register(Education)
class EducationAdmin(admin.ModelAdmin):
    """ Education """

    list_display = ("id", "user", "institution", "name", "start_date", "end_date")
    list_display_links = ("id", "user", "institution")
    fields = ("user", "institution", "name", "about", "start_date", "end_date")
    search_fields = ('user', 'institution', 'name')
    save_as = True
    save_on_top = True


@admin.register(Courses)
class CoursesAdmin(admin.ModelAdmin):
    """ Courses """

    list_display = ("id", "user", "company", "name", "start_date", "end_date")
    list_display_links = ("id", "company")
    fields = ("user", "company", "name", "about", "start_date", "end_date")
    search_fields = ('user', 'company', 'name')
    save_as = True
    save_on_top = True


@admin.register(Skills)
class SkillsAdmin(admin.ModelAdmin):
    """ Skills """

    list_display = ("id", "user", "name", "skill")
    list_display_links = ("id", "name")
    fields = ("user", "name", "skill")
    search_fields = ('user', 'name', 'skill')
    save_as = True
    save_on_top = True


@admin.register(Languages)
class LanguagesAdmin(admin.ModelAdmin):
    """ Languages """

    list_display = ("id", "name", "user", "skill")
    list_display_links = ("id", "name")
    fields = ("name", "user", "skill")
    search_fields = ('user', 'name', 'skill')
    save_as = True
    save_on_top = True


@admin.register(ResumePDF)
class ResumePDFAdmin(admin.ModelAdmin):
    """ Resume PDF """

    list_display = ("id", "user", "pdf_file")
    list_display_links = ("id", "user")
    fields = ("user", "pdf_file")
    search_fields = ('user',)
    save_as = True
    save_on_top = True
