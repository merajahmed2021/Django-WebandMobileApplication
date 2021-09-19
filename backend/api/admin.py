from django.contrib import admin
from .models import Post
admin.site.register(Post)

# Register your models here.



# @admin.register(Post)
# class ArticleModel(admin.ModelAdmin):
    # list_filter = ('title', 'content','user')
    # list_display= ('title', 'content','user')
