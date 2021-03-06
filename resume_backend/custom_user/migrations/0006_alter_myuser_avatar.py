# Generated by Django 3.2.14 on 2022-07-09 15:00

import custom_user.services
import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('custom_user', '0005_alter_myuser_avatar'),
    ]

    operations = [
        migrations.AlterField(
            model_name='myuser',
            name='avatar',
            field=models.ImageField(blank=True, null=True, upload_to=custom_user.services.get_path_upload_avatar, validators=[django.core.validators.FileExtensionValidator(allowed_extensions=['jpg', 'png']), custom_user.services.validate_size_image], verbose_name='Avatar'),
        ),
    ]
