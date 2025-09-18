import emailjs from '@emailjs/browser';

// Initialize EmailJS - we'll initialize with specific keys per function
// No global init needed

export interface EmailData {
  name: string;
  email: string;
  company?: string;
  projectType?: string;
  budget?: string;
  message: string;
  timeline?: string;
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
      company: data.company || '',
      project_type: data.projectType || '',
      budget: data.budget || '',
      message: data.message,
      timeline: data.timeline || '',
      to_email: 'allan@smeyatsky.com',
    };

    // Initialize with contact form public key
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_CONTACT_PUBLIC_KEY || '');

    const result = await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_CONTACT_SERVICE_ID || '',
      process.env.NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE_ID || '',
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

    const templateParams = {
      from_email: data.email,
      from_name: data.name || '',
      to_email: 'allan@smeyatsky.com',
      signup_date: new Date().toLocaleDateString(),
    };

    // Initialize with newsletter public key
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_NEWSLETTER_PUBLIC_KEY || '');

    const result = await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_NEWSLETTER_SERVICE_ID || '',
      process.env.NEXT_PUBLIC_EMAILJS_NEWSLETTER_TEMPLATE_ID || '',
      templateParams
    );

    console.log('Newsletter signup sent successfully:', result);
    return true;
  } catch (error) {
    console.error('Error sending newsletter signup:', error);
    return false;
  }
};