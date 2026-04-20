from django.urls import path
from api.views import ContactSubmitView, health_check

urlpatterns = [
    path('contact/', ContactSubmitView.as_view(), name='contact-submit'),
    path('health/', health_check, name='health-check')
]
