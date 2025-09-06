import emailjs from '@emailjs/browser';

// Initialize EmailJS with public key from environment variables
if (typeof window !== 'undefined') {
  emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '');
}

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
      to_email: 'your_email@example.com', // Replace with your actual email
    };

    const result = await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
      templateParams
    );

    console.log('Email sent successfully:', result);
    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
};