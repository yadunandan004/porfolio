from django.conf.urls import url
from port_app import views

urlpatterns=[
	url(r'^$',views.prim,name="primary"),
	url(r'^data/',views.index,name="index")
]