# Generated by Django 3.2.14 on 2022-07-11 18:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('resume', '0005_auto_20220711_2100'),
    ]

    operations = [
        migrations.AlterField(
            model_name='languages',
            name='skill',
            field=models.IntegerField(choices=[(1, 1), (2, 2), (3, 3), (4, 4), (5, 5)], default=1, max_length=1, verbose_name='Skill'),
        ),
    ]
