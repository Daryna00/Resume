# Generated by Django 3.2.14 on 2022-07-10 13:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('custom_user', '0007_auto_20220710_1544'),
    ]

    operations = [
        migrations.AlterField(
            model_name='myuser',
            name='nickname',
            field=models.CharField(blank=True, max_length=150, null=True, unique=True, verbose_name='Nickname'),
        ),
    ]
