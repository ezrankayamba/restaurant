from django.contrib import admin
from django.urls import path, include
from . import views
from . import serializers
from . import models
from rest_framework import routers, viewsets


class RestaurantViewSet(viewsets.ModelViewSet):
    queryset = models.Restaurant.objects.all()
    serializer_class = serializers.RestaurantSerializer


class DishViewSet(viewsets.ModelViewSet):
    queryset = models.Dish.objects.all()
    serializer_class = serializers.DishSerializer


class DishItemViewSet(viewsets.ModelViewSet):
    queryset = models.DishItem.objects.all()
    serializer_class = serializers.DishItemSerializer


router = routers.DefaultRouter()
router.register('restaurants', RestaurantViewSet)
router.register('dishes', DishViewSet)
router.register('dishitems', DishItemViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
