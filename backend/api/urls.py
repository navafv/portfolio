from django.urls import path
from api.views import ContactSubmitView

urlpatterns = [
    path('contact/', ContactSubmitView.as_view(), name='contact-submit'),
]
