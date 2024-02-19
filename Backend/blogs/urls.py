from django.urls import path
from . import views




urlpatterns = [
    path('blogslist/', views.Blog_list),
    path('contacts/', views.create_contact)
]