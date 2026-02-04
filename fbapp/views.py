from django.shortcuts import render
from .forms import RegisterForm
from django.contrib.auth.models import User
from django.shortcuts import redirect
from django.contrib import messages
from django.contrib.auth import authenticate,login,logout
from  .models import Register as Register
from .models import Booking 
from .forms import BookingForm

def index(request):
    if request.method=='POST':
        logname=request.POST.get('lofname')
        logpass=request.POST.get('lofpass')
        user=authenticate(username=logname,password=logpass)
        if user is not None:
            login(request,user)
            reg=Register.objects.get(Username=user.username)
            return render(request,'dashboard.html',{'det':reg})
        elif "Date" in request.POST:
          form = BookingForm(request.POST)
          if form.is_valid():
             form.save()
             return render(request,'dashboard.html',{'success':'Appointment booked successfully'})
        else:
            return render(request,'index.html',{'error':'invalid credentials'})
  
    return render(request,'index.html') 

def register(request):
    if request.method=='POST':
        form=RegisterForm(request.POST)
        if form.is_valid():
            data=form.cleaned_data
            Username=data['Username']
            Email=data['Email']
            Mobile=data['Mobile']
            Password=data['Password']
            Confirm_password=data['ConfirmPassword']
            if Password!=Confirm_password:
                return render(request,'register.html',{'error':'password not matching'})
            elif len(Mobile)!=10:
                return render(request,'register.html',{'error':'invalid mobile number'})
            elif User.objects.filter(email=Email).exists():
                return render(request,'register.html',{'error':'email already exists'})
            elif User.objects.filter(username=Username).exists():
                return render(request,'register.html',{'error':"username already in use"})
            else:
                user=User.objects.create_user(username=Username,email=Email,password=Password)
                form.save()
                return redirect('index')
    return render(request,'register.html')

