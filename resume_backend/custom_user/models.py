from django.contrib.auth.validators import UnicodeUsernameValidator
from django.core.validators import FileExtensionValidator
from django.db import models
from django.utils.translation import gettext_lazy as _
from django.contrib.auth.models import BaseUserManager, AbstractUser

from .services import get_path_upload_avatar, validate_size_image


class CustomUserManager(BaseUserManager):
    """
    Custom user model manager where email is the unique identifiers
    for authentication instead of usernames.
    """

    def create_user(self, email, password=None, **extra_fields):
        """
        Create and save a User with the given email and password.
        """
        if not email:
            raise ValueError(_('The Email must be set'))
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save()
        return user

    def create_superuser(self, email, password, **extra_fields):
        """
        Create and save a SuperUser with the given email and password.
        """
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        extra_fields.setdefault('is_active', True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError(_('Superuser must have is_staff=True.'))
        if extra_fields.get('is_superuser') is not True:
            raise ValueError(_('Superuser must have is_superuser=True.'))
        return self.create_user(email, password, **extra_fields)


class MyUser(AbstractUser):
    """ Custom User model """

    username_validator = UnicodeUsernameValidator()

    email = models.EmailField(_('Email address'), unique=True)
    username = None
    is_active = models.BooleanField(
        _("active"),
        default=False,
        help_text=_(
            "Designates whether this user should be treated as active. "
            "Unselect this instead of deleting accounts."
        ),
    )
    nickname = models.CharField(
        max_length=150, blank=True, null=True, unique=True, verbose_name='Nickname'
    )
    middle_name = models.CharField(
        max_length=150, blank=True, null=True, verbose_name='Middle name'
    )
    first_login = models.DateTimeField(
        blank=True, null=True, verbose_name='First login'
    )
    phone = models.CharField(max_length=14, blank=True, null=True, verbose_name='Phone')
    avatar = models.ImageField(
        upload_to=get_path_upload_avatar,
        blank=True,
        null=True,
        validators=[FileExtensionValidator(allowed_extensions=['jpg', 'png']), validate_size_image],
        verbose_name='Avatar'
    )
    address = models.TextField(blank=True, null=True, verbose_name='Address')
    biography = models.TextField(blank=True, null=True, verbose_name='Biography')
    github = models.CharField(
        max_length=150, blank=True, null=True, verbose_name='Link on Github'
    )
    linkedin = models.CharField(
        max_length=150, blank=True, null=True, verbose_name='Link on Linkedin'
    )
    facebook = models.CharField(
        max_length=150, blank=True, null=True, verbose_name='Link on Facebook'
    )
    birthday = models.DateField(blank=True, null=True, verbose_name='Date of Birth')

    objects = CustomUserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    class Meta:
        verbose_name = 'User'
        verbose_name_plural = 'Users'
        ordering = ['-id']

    def __str__(self):
        return self.email
