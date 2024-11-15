export interface ServiceDetail {
    slug: string;
    title: string;
    description: string;
    icon: string;
    headerImage: string;
    benefits: {
      title: string;
      description: string;
      icon: string;
    }[];
    features: {
      title: string;
      description: string;
      icon: string;
    }[];
    process: {
      step: number;
      title: string;
      description: string;
      icon: string;
    }[];
    technologies: {
      name: string;
      icon: string;
      description: string;
    }[];
    faqs: {
      question: string;
      answer: string;
    }[];
    relatedServices: string[];
  }

  export interface Service {
    id: string;
    title: string;
    description: string;
    icon: string;
    features: string[];
    link: string;
  }
  
  export interface TechStack {
    name: string;
    icon: string;
  }