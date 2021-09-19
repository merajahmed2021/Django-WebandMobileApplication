# Generated by Django 3.0.7 on 2021-05-10 03:58

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('accounts', '0002_delete_post'),
    ]

    operations = [
        migrations.CreateModel(
            name='Profile',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(blank=True, max_length=255)),
                ('college', models.CharField(blank=True, max_length=255)),
                ('image', models.ImageField(upload_to='profile_images')),
                ('city', models.CharField(blank=True, max_length=255)),
                ('skills', models.TextField(help_text='Comma Seperated value')),
                ('bio', models.TextField()),
                ('twitter', models.CharField(blank=True, max_length=255)),
                ('facebook', models.CharField(blank=True, max_length=255)),
                ('linkedin', models.CharField(blank=True, max_length=255)),
                ('instagram', models.CharField(blank=True, max_length=255)),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
