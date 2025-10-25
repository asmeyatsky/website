import emailjs from '@emailjs/browser';

// Initialize EmailJS - we'll initialize with specific keys per function
// No global init needed

export interface EmailData {
  name: string;
  email: string;
  message: string;
}

export const sendContactEmail = async (data: EmailData): Promise<boolean> => {
  try {
    // Only run on client-side
    if (typeof window === 'undefined') {
      console.log('EmailJS can only run on client-side');
      return false;
    }

    const templateParams = {
      from_name: data.name,
      from_email: data.email,
      message: data.message,
      to_email: 'allan@smeyatsky.com',
    };

    // Use hardcoded contact configuration for production reliability
    const contactPublicKey = '11IgiqqknI_1XVn7c';
    const contactServiceId = 'service_uyqiqsr';
    const contactTemplateId = 'template_ce8x97i';

    console.log('Contact EmailJS Config:', { contactPublicKey, contactServiceId, contactTemplateId });

    emailjs.init(contactPublicKey);

    const result = await emailjs.send(
      contactServiceId,
      contactTemplateId,
      templateParams
    );

    console.log('Contact email sent successfully:', result);
    return true;
  } catch (error) {
    console.error('Error sending contact email:', error);
    return false;
  }
};

export interface NewsletterData {
  email: string;
  name?: string;
}

export const sendNewsletterSignup = async (data: NewsletterData): Promise<boolean> => {
  try {
    // Only run on client-side
    if (typeof window === 'undefined') {
      console.log('EmailJS can only run on client-side');
      return false;
    }

    // Simple parameters for welcome template
    const templateParams = {
      email: data.email,
      name: data.name || 'Newsletter Subscriber',
    };

    // Use hardcoded newsletter configuration for production reliability
    const publicKey = '11IgiqqknI_1XVn7c';
    const serviceId = 'service_uyqiqsr';
    const templateId = 'template_pmw9ndd';

    console.log('Newsletter EmailJS Config:', { publicKey, serviceId, templateId });
    console.log('Newsletter Template Params:', templateParams);

    emailjs.init(publicKey);

    const result = await emailjs.send(
      serviceId,
      templateId,
      templateParams
    );

    console.log('Newsletter signup sent successfully:', result);
    return true;
  } catch (error) {
    console.error('Error sending newsletter signup:', error);
    if (error && typeof error === 'object' && 'text' in error) {
      console.error('EmailJS Error Details:', error.text);
    }
    if (error && typeof error === 'object' && 'status' in error) {
      console.error('EmailJS Status Code:', error.status);
    }
    return false;
  }
};