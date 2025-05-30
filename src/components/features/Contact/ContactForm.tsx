
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { useToast } from "@/hooks/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Mail } from "lucide-react";
import { sendEmail, EmailData } from "@/services/email";

const ContactForm = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Define form validation schema with translated messages
  const formSchema = z.object({
    name: z.string().min(2, { message: t('contact.validation.nameMin') }),
    email: z.string().email({ message: t('contact.validation.emailInvalid') }),
    message: z.string().min(10, { message: t('contact.validation.messageMin') }),
  });

  type FormValues = z.infer<typeof formSchema>;
  
  // Initialize react-hook-form with zod validation
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    try {
      // Send email using our service - ensure data is complete
      const emailData: EmailData = {
        name: data.name,
        email: data.email,
        message: data.message,
      };
      
      await sendEmail(emailData);
      
      // Show success toast
      toast({
        title: t('contact.formSuccess'),
        description: t('contact.formSuccessMessage'),
      });
      
      // Reset form
      form.reset();
    } catch (error) {
      console.error("Error sending email:", error);
      toast({
        title: t('contact.formError'),
        description: t('contact.formErrorMessage'),
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t('contact.nameLabel')}</FormLabel>
                <FormControl>
                  <Input 
                    placeholder={t('contact.namePlaceholder')} 
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t('contact.emailLabel')}</FormLabel>
                <FormControl>
                  <Input 
                    type="email"
                    placeholder={t('contact.emailPlaceholder')} 
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('contact.messageLabel')}</FormLabel>
              <FormControl>
                <Textarea
                  placeholder={t('contact.messagePlaceholder')}
                  rows={5}
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <Button 
          type="submit" 
          className="w-full md:w-auto"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>{t('contact.submitting')}</>
          ) : (
            <>
              <Mail className="mr-2" size={16} />
              {t('contact.submit')}
            </>
          )}
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;
