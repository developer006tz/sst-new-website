import type { ContactForm, Social } from "~/types/contact";

export const services = [
    'Mobile App Development',
    'Web Application Development',
    'Website Development',
    'System Development',
    'Software Consultation',
    'Database Design',
    'Software Architecture',
    'Logistics & Freight Software'
  ];
  
  export const socials: Social[] = [
    {
      name: 'LinkedIn',
      icon: 'mdi:linkedin',
      link: '#'
    },
    {
      name: 'Instagram',
      icon: 'mdi:instagram',
      link: '#'
    },
    {
      name: 'TikTok',
      icon: 'ion:logo-tiktok',
      link: '#'
    }
  ];
  
  export const form = ref<ContactForm>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });