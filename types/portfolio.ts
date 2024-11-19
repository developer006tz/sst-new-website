export interface Project {
    id: number;
    title: string;
    shortDescription: string;
    description: string;
    image: string;
    type: string;
    client: string;
    duration: string;
    technologies: string[];
    features: string[];
    category: string;
  }

  export interface Category {
    slug: string;
    label: string;
    }