from django.shortcuts import render
from rest_framework import generics as rst
from . import serializers
from . import models


class RestaurantListView(rst.ListCreateAPIView):
    serializer_class = serializers.RestaurantSerializer
    queryset = models.Restaurant.objects.all()


class DishListView(rst.ListCreateAPIView):
    serializer_class = serializers.DishSerializer
    queryset = models.Dish.objects.all()


class DishItemListView(rst.ListCreateAPIView):
    serializer_class = serializers.DishItemSerializer
    queryset = models.DishItem.objects.all()
