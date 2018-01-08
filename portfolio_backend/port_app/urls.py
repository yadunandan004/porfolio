from django.conf.urls import url
from port_app import views

urlpatterns=[
	url(r'^data/',views.index,name="index")
]