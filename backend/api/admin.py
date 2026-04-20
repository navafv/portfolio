import urllib.parse
from django.contrib import admin
from django.utils.html import format_html
from api.models import ContactMessage

admin.site.site_header = "Navaf's Command Center"
admin.site.site_title = "Portfolio Admin"
admin.site.index_title = "Lead Management CRM"
admin.site.site_url = "http://localhost:5173"

@admin.register(ContactMessage)
class ContactMessageAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'created_at', 'is_read', 'reply_action')
    list_filter = ('is_read', 'created_at')
    search_fields = ('name', 'email', 'message')
    readonly_fields = ('created_at', 'reply_action')
    
    def reply_action(self, obj):
        subject = "Re: Your Inquiry on My Portfolio"
        
        message_snippet = obj.message[:50] + "..." if len(obj.message) > 50 else obj.message
        
        body_template = f"Hi {obj.name},\r\n\r\nThanks for reaching out! Regarding your message:\r\n> \"{message_snippet}\"\r\n\r\n"
        
        encoded_subject = urllib.parse.quote(subject)
        encoded_body = urllib.parse.quote(body_template)
        
        mailto_link = f"mailto:{obj.email}?subject={encoded_subject}&body={encoded_body}"
        
        return format_html(
            '<a href="{}" target="_blank" rel="noopener noreferrer" class="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-1.5 px-3 rounded-lg text-sm transition-all shadow-sm">Reply via Mail</a>',
            mailto_link
        )
    
    reply_action.short_description = "Action"
