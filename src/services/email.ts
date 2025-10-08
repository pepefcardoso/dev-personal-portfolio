import emailjs from "@emailjs/browser";

export interface EmailData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export const sendEmail = async (data: EmailData) => {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const userId = import.meta.env.VITE_EMAILJS_USER_ID;

  if (!serviceId || !templateId || !userId) {
    console.error("EmailJS credentials are not configured in .env.local file.");
    throw new Error("EmailJS is not configured.");
  }

  const templateParams = {
    name: data.name,
    email: data.email,
    phone: data.phone,
    message: data.message,
  };

  return await emailjs.send(serviceId, templateId, templateParams, userId);
};
