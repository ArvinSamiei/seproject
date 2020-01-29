from rest_framework.decorators import api_view
from django.shortcuts import render
from .models import *
from django.core import serializers
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
import json



def index(request):
    products = serializers.serialize(
        'json', Product.objects.all(), fields=('title', 'quick_note', 'price', 'image'))
    return HttpResponse(products)


def detail(request, product_id):
    print('heil')
    product = serializers.serialize(
        'json', Product.objects.filter(pk=product_id))
    return HttpResponse(product)

@api_view(['POST'])
@csrf_exempt
def buy(request, product_id):
    body_unicode = request.body.decode('utf-8')
    body = json.loads(body_unicode)
    username = body['username']
    product = Product.objects.filter(pk=product_id)[0]
    customer = Customer.objects.filter(username=username)[0]
    if customer.money >= product.price:
        customer.money -= product.price
        customer.purchases.add(product)
        customer.save()
        return HttpResponse('You Bought it successfully.')
    else:
        return HttpResponse("You don't have enough money.")
