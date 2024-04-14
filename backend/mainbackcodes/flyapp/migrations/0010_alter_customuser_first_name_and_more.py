# Generated by Django 5.0.3 on 2024-04-14 02:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('flyapp', '0009_customuser_username'),
    ]

    operations = [
        migrations.AlterField(
            model_name='customuser',
            name='first_name',
            field=models.CharField(blank=True, max_length=30, null=True),
        ),
        migrations.AlterField(
            model_name='customuser',
            name='last_name',
            field=models.CharField(blank=True, max_length=30, null=True),
        ),
        migrations.AlterField(
            model_name='customuser',
            name='username',
            field=models.CharField(max_length=20, null=True, unique=True),
        ),
    ]
