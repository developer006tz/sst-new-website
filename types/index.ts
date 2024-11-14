export interface NavItem {
    name: string;
    path: string;
  }
  
  export interface Service {
    icon: string;
    title: string;
    description: string;
  }
  
  export interface Feature {
    icon: string;
    title: string;
    description: string;
  }
  
  export interface MotionProps {
    animation?: string;
    delay?: number;
    duration?: number;
    custom?: Record<string, any>;
  }