# Generated by Django 3.2.14 on 2022-07-13 12:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('resume', '0012_auto_20220713_1458'),
    ]

    operations = [
        migrations.AddField(
            model_name='courses',
            name='about',
            field=models.TextField(blank=True, verbose_name='About'),
        ),
    ]
