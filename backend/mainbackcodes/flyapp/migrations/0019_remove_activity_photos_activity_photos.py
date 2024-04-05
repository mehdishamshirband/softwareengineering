# Generated by Django 5.0.3 on 2024-04-04 01:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('flyapp', '0018_remove_hotel_photos_hotel_photos'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='activity',
            name='photos',
        ),
        migrations.AddField(
            model_name='activity',
            name='photos',
            field=models.ManyToManyField(blank=True, to='flyapp.photo'),
        ),
    ]
