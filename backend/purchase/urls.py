from django.urls import path

from . import views

urlpatterns = [
    path('<int:product_id>/', views.detail, name='detail'),
    path('', views.index, name='index'),
    path('buy/<int:product_id>/', views.buy, name='buy'),
    # path('purchases/', views.see_purchases),
]
