# Setting Up EmailJS for the Contact Form

The contact form uses [EmailJS](https://www.emailjs.com/) to send emails directly from the client-side without needing a backend server.

## Steps to Configure EmailJS

1.  **Create an EmailJS Account**

    - Go to [EmailJS](https://www.emailjs.com/) and sign up for a free account.

2.  **Add an Email Service**

    - From your EmailJS dashboard, navigate to "Email Services".
    - Click "Add New Service" and select your email provider (Gmail, Outlook, etc.).
    - Follow the instructions to connect your email account.

3.  **Create an Email Template**

    - Go to the "Email Templates" section.
    - Click "Create New Template" and design your email template.
    - Make sure to include template variables: `{{from_name}}`, `{{from_email}}`, and `{{message}}`.

4.  **Configure Environment Variables**
    - In the root of the project, create a file named `.env.local`.
    - Add your EmailJS credentials to this file, prefixed with `VITE_` as shown below:
      ```env
      VITE_EMAILJS_SERVICE_ID="YOUR_SERVICE_ID"
      VITE_EMAILJS_TEMPLATE_ID="YOUR_TEMPLATE_ID"
      VITE_EMAILJS_USER_ID="YOUR_USER_ID"
      ```

## Testing the Contact Form

After setting up your credentials in the `.env.local` file, test your contact form by submitting a test message. Check your email inbox to make sure you receive the test message.

## Security Note

The `.env.local` file is included in the `.gitignore` and should **never** be committed to version control. This keeps your credentials secure.
