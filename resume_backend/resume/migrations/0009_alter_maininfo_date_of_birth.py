# Generated by Django 3.2.14 on 2022-07-12 08:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('resume', '0008_auto_20220712_1059'),
    ]

    operations = [
        migrations.AlterField(
            model_name='maininfo',
            name='date_of_birth',
            field=models.DateField(blank=True, null=True, verbose_name='Date of Birth'),
        ),
    ]
