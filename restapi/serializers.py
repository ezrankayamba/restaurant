from rest_framework import serializers
from . import models


class DishItemSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = models.DishItem
        fields = ['id', 'name', 'dish', 'price']


class DishSerializer(serializers.HyperlinkedModelSerializer):
    items = DishItemSerializer(many=True)

    class Meta:
        model = models.Dish
        fields = ['id', 'name', 'restaurant', 'items']


class RestaurantSerializer(serializers.HyperlinkedModelSerializer):
    dishes = DishSerializer(many=True)

    class Meta:
        model = models.Restaurant
        fields = ['id', 'name', 'dishes']
