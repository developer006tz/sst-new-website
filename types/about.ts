export interface CompanyValue {
    title: string;
    description: string;
    icon: string;
  }
  
export interface TeamMember {
    name: string;
    position: string;
    image: string;
  }
  
  export interface Stat {
    value: string;
    label: string;
  }
  
  export interface Milestone {
    year: string;
    title: string;
    description: string;
  }
  
  export interface Testimonial {
    content: string;
    name: string;
    position: string;
    avatar: string;
    company?: string;
  }
  
  export interface Partner {
    name: string;
    logo: string;
  }
  