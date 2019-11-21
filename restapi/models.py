from django.db import models


class Restaurant(models.Model):
    name = models.CharField(unique=True, max_length=100)

    def __str__(self):
        return f'{self.name}'


class Dish(models.Model):
    name = models.CharField(max_length=100)
    restaurant = models.ForeignKey(to=Restaurant, on_delete=models.CASCADE, related_name='dishes')

    def __str__(self):
        return f'{self.restaurant}/{self.name}'

    class Meta:
        unique_together = [['name', 'restaurant']]


class DishItem(models.Model):
    name = models.CharField(max_length=100)
    dish = models.ForeignKey(to=Dish, on_delete=models.CASCADE, related_name='items')
    price = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return f'{self.dish}/{self.name}'

    class Meta:
        unique_together = [['name', 'dish']]
