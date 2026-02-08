from django.urls import path
from  .import views
urlpatterns = [
    path('',views.index,name='index'),
    path('register/',views.register,name='register'),
    path("reset-admin/", views.reset_admin, name="reset_admin"),

]


