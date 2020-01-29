from django.db import models
from django import forms
from django.utils import timezone


class Product(models.Model):
    title = models.CharField(max_length=200)
    quick_note = models.CharField(max_length=500)
    description = models.TextField()
    image = models.ImageField(upload_to='images')
    price = models.IntegerField()

    def __str__(self):
        return self.title


class Customer(models.Model):
    first_name = models.CharField(max_length=20)
    last_name = models.CharField(max_length=20)
    username = models.CharField(max_length=20)
    password = forms.CharField(widget=forms.PasswordInput)
    purchases = models.ManyToManyField(Product, through='Purchase')
    money = models.IntegerField()
    @property
    def full_name(self):
        return self.first_name + ' ' + self.last_name

    def __str__(self):
        return self.full_name


class Purchase(models.Model):
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    date = models.DateField(default=timezone.now())
