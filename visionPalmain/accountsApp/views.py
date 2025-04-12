from django.shortcuts import render,HttpResponse

# Create your views here.
def Home(request):
    return HttpResponse("<h1><center>my visionPal app</center></h1>")