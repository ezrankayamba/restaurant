from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('restapi/', include('restapi.urls')),
]
# url(r'^api-auth/', include('rest_framework.urls'))
