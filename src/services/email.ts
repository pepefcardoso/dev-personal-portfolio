
import emailjs from "emailjs-com";

export interface EmailData {
  name: string;
  email: string;
  message: string;
}

export const sendEmail = async (data: EmailData): Promise<emailjs.EmailJSResponseStatus> => {
  // Replace these with your actual EmailJS service, template, and user IDs
  const serviceId = "YOUR_EMAILJS_SERVICE_ID";
  const templateId = "YOUR_EMAILJS_TEMPLATE_ID";
  const userId = "YOUR_EMAILJS_USER_ID";
  
  // Prepare template parameters
  const templateParams = {
    from_name: data.name,
    from_email: data.email,
    message: data.message,
  };
  
  // Send email using EmailJS
  return emailjs.send(serviceId, templateId, templateParams, userId);
};
