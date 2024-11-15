import type { Service, TechStack } from "~/types/service";

export const services: Service[] = [
    {
      id: 'mobile-dev',
      title: 'Mobile App Development',
      description: 'Create powerful, user-friendly mobile applications for iOS and Android platforms.',
      icon: 'mdi:cellphone',
      features: [
        'Native & Cross-platform Development',
        'UI/UX Design',
        'App Store Optimization',
        'Performance Optimization'
      ],
      link: '/services/mobile-development'
    },
    {
        id: 'ui-ux',
        title: 'UI/UX Design',
        description: 'Design intuitive and engaging user interfaces for web and mobile applications.',
        icon: 'mdi:palette',
        features: [
          'Wireframing & Prototyping',
          'User Research',
          'Responsive Design',
          'User Testing'
        ],
        link: '/services/ui-ux-design'

    },
    {
      id: 'web-app',
      title: 'Web Application Development',
      description: 'Build scalable and responsive web applications with modern technologies.',
      icon: 'mdi:application-brackets',
      features: [
        'Full-stack Development',
        'Progressive Web Apps',
        'API Integration',
        'Cloud Deployment'
      ],
      link: '/services/web-applications'
    },
    {
      id: 'website',
      title: 'Website Development',
      description: 'Design and develop stunning websites that drive engagement and conversions.',
      icon: 'mdi:web',
      features: [
        'Responsive Design',
        'SEO Optimization',
        'Content Management',
        'Performance Optimization'
      ],
      link: '/services/website-development'
    },
    {
      id: 'system-dev',
      title: 'System Development',
      description: 'Custom enterprise systems designed to streamline your business operations.',
      icon: 'mdi:desktop-tower-monitor',
      features: [
        'Enterprise Solutions',
        'System Integration',
        'Legacy System Migration',
        'Scalable Architecture'
      ],
      link: '/services/system-development'
    },
    {
      id: 'consultation',
      title: 'Software Consultation',
      description: 'Expert guidance on software strategy, architecture, and implementation.',
      icon: 'mdi:account-tie',
      features: [
        'Technical Assessment',
        'Solution Architecture',
        'Technology Selection',
        'Best Practices'
      ],
      link: '/services/consultation'
    },
    {
      id: 'database',
      title: 'Database Design',
      description: 'Optimize your data architecture for performance, scalability, and security.',
      icon: 'mdi:database',
      features: [
        'Schema Design',
        'Performance Tuning',
        'Data Migration',
        'Security Implementation'
      ],
      link: '/services/database-design'
    },
    {
      id: 'architecture',
      title: 'Software Architecture',
      description: 'Design robust and scalable software architectures for your applications.',
      icon: 'mdi:vector-arrange-above',
      features: [
        'System Design',
        'Microservices Architecture',
        'Cloud Architecture',
        'Performance Optimization'
      ],
      link: '/services/software-architecture'
    },
    {
      id: 'logistics',
      title: 'Logistics & Freight Software',
      description: 'Specialized software solutions for logistics and freight management.',
      icon: 'mdi:truck-delivery',
      features: [
        'Route Optimization',
        'Inventory Management',
        'Real-time Tracking',
        'Analytics Dashboard'
      ],
      link: '/services/logistics-software'
    }
  ];
  
  export const techStacks: TechStack[] = [
    { name: 'React', icon: 'mdi:react' },
    { name: 'NextJs', icon: 'lineicons:nextjs' },
    { name: 'Vue.js', icon: 'mdi:vuejs' },
    { name: 'Nuxt', icon: 'mdi:nuxt' },
    { name: 'Flutter', icon: 'material-symbols:flutter' },
    { name: 'Node.js', icon: 'mdi:nodejs' },
    { name: 'Laravel', icon: 'simple-icons:laravel' },
    { name: 'Django', icon: 'akar-icons:django-fill' },
    { name: 'PostgreSQL', icon: 'simple-icons:postgresql' },
    { name: 'MySQL', icon: 'simple-icons:mysql' },
    { name: 'AWS', icon: 'mdi:aws' },
    { name: 'Docker', icon: 'mdi:docker' },
  ];