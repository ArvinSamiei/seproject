from django.shortcuts import render
import mimetypes
from django.http import HttpResponse


def download_image(request, imageName):
    with open('images/' + imageName, "rb") as f:
        return HttpResponse(f.read(), content_type="image/jpeg")
