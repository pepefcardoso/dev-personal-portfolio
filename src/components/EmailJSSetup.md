
# Setting Up EmailJS for the Contact Form

The contact form uses [EmailJS](https://www.emailjs.com/) to send emails directly from the client-side without needing a backend server.

## Steps to Configure EmailJS

1. **Create an EmailJS Account**
   - Go to [EmailJS](https://www.emailjs.com/) and sign up for a free account

2. **Add an Email Service**
   - From your EmailJS dashboard, navigate to "Email Services"
   - Click "Add New Service" 
   - Select your email provider (Gmail, Outlook, etc.)
   - Follow the instructions to connect your email account

3. **Create an Email Template**
   - Go to the "Email Templates" section
   - Click "Create New Template"
   - Design your email template using the provided editor
   - Make sure to include template variables: `{{from_name}}`, `{{from_email}}`, and `{{message}}`
   - Save your template

4. **Update Your Code**
   - In the `Contact.tsx` file, replace the placeholder values with your actual EmailJS credentials:
     ```typescript
     const serviceId = "YOUR_EMAILJS_SERVICE_ID"; // Replace with your service ID
     const templateId = "YOUR_EMAILJS_TEMPLATE_ID"; // Replace with your template ID
     const userId = "YOUR_EMAILJS_USER_ID"; // Replace with your user ID (public key)
     ```

5. **Initialize EmailJS**
   - You can add the initialization code in your main application file or in the Contact component

## Testing the Contact Form
After setting up EmailJS, test your contact form by submitting a test message. Check your email inbox to make sure you receive the test message.

## Security Note
The EmailJS user ID (public key) is safe to include in client-side code. However, never include private API keys in your frontend code.

## Troubleshooting
If emails are not being sent:
1. Check the console for error messages
2. Verify your EmailJS credentials
3. Make sure your email service is connected properly
4. Check if you've reached the free tier limits of EmailJS
