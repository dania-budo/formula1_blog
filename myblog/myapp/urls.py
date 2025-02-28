from django.urls import path
from . import views
from django.views.generic import TemplateView
urlpatterns = [
    path('', views.home, name='home'),
    path('about/', views.about, name='about'),
    path('form/', views.form, name='form'),
    path('gallery/', views.gallery, name='gallery'),
    path('chatbot/', views.chatbot, name='chatbot'),

]