# from django.http import HttpResponse
from django.shortcuts import render

def homepage(request):
	return render(request, 'home.html')

def about(request):
	return render(request, 'about.html')

def test(request):
	return render(request, 'test.html')
