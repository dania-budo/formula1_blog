from django.shortcuts import render, HttpResponse
# Create your views here.
def home(request):
    return render(request, "index.html")

def about(request):
    return render(request, "about.html")

def form(request):
    return render(request, "form.html")

def gallery(request):
    return render(request, "gallery.html")

def chatbot(request):
    return render(request, "chatbot.html")