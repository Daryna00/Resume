from django.conf import settings
from django.core.validators import FileExtensionValidator
from django.db import models

from .services import get_path_upload_photo, validate_size_image, get_path_upload_pdf


class MainInfo(models.Model):
    """ Main Info Model """

    user = models.OneToOneField(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name='user_main_info',
        verbose_name='User'
    )
    email = models.EmailField(blank=True, verbose_name='Email')
    first_name = models.CharField(max_length=150, blank=True, verbose_name='First name')
    last_name = models.CharField(max_length=150, blank=True, verbose_name='Last name')
    middle_name = models.CharField(max_length=150, blank=True, verbose_name='Middle name')
    phone = models.CharField(max_length=14, blank=True, verbose_name='Phone')
    photo = models.ImageField(
        upload_to=get_path_upload_photo,
        blank=True,
        null=True,
        validators=[FileExtensionValidator(allowed_extensions=['jpg', 'png']), validate_size_image],
        verbose_name='Photo'
    )
    country = models.CharField(max_length=50, blank=True, verbose_name='Country')
    city = models.CharField(max_length=50, blank=True, verbose_name='City')
    additional_address_info = models.TextField(
        max_length=500, blank=True, verbose_name='Additional address info'
    )
    date_of_birth = models.DateField(blank=True, null=True, verbose_name='Date of Birth')
    vacancy = models.CharField(max_length=250, blank=True, verbose_name='Vacancy')
    about_me = models.TextField(blank=True, verbose_name='About me')
    hobbies = models.TextField(blank=True, verbose_name='Hobbies')

    def __str__(self):
        return f"{self.user} - {self.id}"

    class Meta:
        verbose_name = 'Main Info'
        verbose_name_plural = 'Main Info'
        ordering = ['-id']


class SocialLink(models.Model):
    """Social Link Model"""

    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name='user_links',
        verbose_name='User',
    )
    name = models.CharField(max_length=50, blank=True, verbose_name='Link name')
    link = models.URLField(max_length=300, blank=True, verbose_name='Link')

    def __str__(self):
        return f'{self.name}'

    class Meta:
        verbose_name = 'Social Link'
        verbose_name_plural = 'Social Links'
        ordering = ['-id']


class EmploymentHistory(models.Model):
    """Employment History Model"""

    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name='user_employment',
        verbose_name='User',
    )
    name = models.CharField(max_length=250, blank=True, verbose_name='Name')
    about = models.TextField(blank=True, verbose_name='About')
    start_date = models.DateField(blank=True, null=True, verbose_name='Start date')
    end_date = models.DateField(blank=True, null=True, verbose_name='End date')

    def __str__(self):
        return f'{self.name}'

    class Meta:
        verbose_name = 'Employment History'
        verbose_name_plural = 'Employment Histories'
        ordering = ['-id']


class Education(models.Model):
    """Education Model"""

    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name='user_education',
        verbose_name='User',
    )
    name = models.CharField(max_length=350, blank=True, verbose_name='Name')
    about = models.TextField(blank=True, verbose_name='About')
    start_date = models.DateField(blank=True, null=True, verbose_name='Start date')
    end_date = models.DateField(blank=True, null=True, verbose_name='End date')

    def __str__(self):
        return f'{self.name}'

    class Meta:
        verbose_name = 'Education'
        verbose_name_plural = 'Educations'
        ordering = ['-id']


class Courses(models.Model):
    """Courses Model"""

    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name='user_courses',
        verbose_name='User',
    )
    name = models.CharField(max_length=350, blank=True, verbose_name='Name')
    start_date = models.DateField(blank=True, null=True, verbose_name='Start date')
    end_date = models.DateField(blank=True, null=True, verbose_name='End date')

    def __str__(self):
        return f'{self.name}'

    class Meta:
        verbose_name = 'Course'
        verbose_name_plural = 'Courses'
        ordering = ['-id']


class Skills(models.Model):
    """Skills Model"""

    CHOICE_SKILL = (
        (1, 1),
        (2, 2),
        (3, 3),
        (4, 4),
        (5, 5),
    )

    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name='user_skills',
        verbose_name='User',
    )
    name = models.CharField(max_length=250, blank=True, verbose_name='Name')
    skill = models.IntegerField(
        choices=CHOICE_SKILL, default=1, verbose_name='Skill'
    )

    def __str__(self):
        return f'{self.name}'

    class Meta:
        verbose_name = 'Skill'
        verbose_name_plural = 'Skills'
        ordering = ['-id']


class Languages(models.Model):
    """Languages Model"""

    CHOICE_SKILL = (
        (1, 1),
        (2, 2),
        (3, 3),
        (4, 4),
        (5, 5),
    )

    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name='user_languages',
        verbose_name='User',
    )
    name = models.CharField(max_length=100, blank=True, verbose_name='Name')
    skill = models.IntegerField(
        choices=CHOICE_SKILL, default=1, verbose_name='Skill'
    )

    def __str__(self):
        return f'{self.name}'

    class Meta:
        verbose_name = 'Language'
        verbose_name_plural = 'Languages'
        ordering = ['-id']


class ResumePDF(models.Model):
    """ Model for resume PDF files """

    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name='user_pdf',
        verbose_name='User',
    )
    pdf_file = models.FileField(
        upload_to=get_path_upload_pdf,
        blank=True,
        null=True,
        validators=[FileExtensionValidator(allowed_extensions=['pdf'])],
        verbose_name='Resume PDF File'
    )

    def __str__(self):
        return f'{self.user} - {self.id}'

    class Meta:
        verbose_name = 'User PDF file'
        verbose_name_plural = 'User PDF files'
        ordering = ['-id']
