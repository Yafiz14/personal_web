from .models import Register
from django import forms 
from .models import Booking


class RegisterForm(forms.ModelForm):
    ConfirmPassword=forms.CharField(widget=forms.PasswordInput)
    class Meta:
        model=Register
        fields="Username","Email","Password","Mobile"
        widget={
            'Password':forms.PasswordInput()
        }
class BookingForm(forms.ModelForm):
    class Meta:
        model=Booking
        fields='__all__'
        widgets={
            'Date':forms.DateInput(attrs={'type':'date'}),
            'Time':forms.TimeInput(attrs={'type':'time'})
        }