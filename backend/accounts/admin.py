from django.contrib import admin

from .models import Profile
# admin.site.register(Profile)

@admin.register(Profile)
class ArticleModel(admin.ModelAdmin):
    list_filter = ('name','college','city')
    list_display= ('name','college','city')

