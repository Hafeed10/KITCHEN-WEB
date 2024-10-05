from django.urls import path
from . import views

urlpatterns = [
    path('', views.getData, name='get_data'),  # You might want to give this path a name
    path('add/', views.addItem, name='add_item'),
]
