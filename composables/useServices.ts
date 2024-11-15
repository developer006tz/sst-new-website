import type { ServiceDetail } from "~/types/service"
export const useServices = () => {
    const services: Record<string, ServiceDetail> = {
      'web-application-development': {
        slug: 'web-application-development',
        title: 'Web Application Development',
        description: 'Create powerful, scalable, and user-friendly web applications tailored to your business needs',
        icon: 'mdi:application-brackets',
        headerImage: '/api/placeholder/800/600',
        benefits: [
          {
            title: 'Scalable Solutions',
            description: 'Build applications that grow with your business',
            icon: 'mdi:graph-line'
          },
        ],
        features: [
          {
            title: 'Custom Development',
            description: 'Tailored solutions that match your exact requirements',
            icon: 'mdi:code-braces'
          },
        ],
        process: [
          {
            step: 1,
            title: 'Discovery',
            description: 'Understanding your needs and requirements',
            icon: 'mdi:magnify'
          },
        ],
        technologies: [
          {
            name: 'React',
            icon: 'mdi:react',
            description: 'Modern frontend development'
          },
        ],
        faqs: [
          {
            question: 'How long does it take to develop a web application?',
            answer: 'The development timeline varies based on the complexity and requirements of your project...'
          },
        ],
        relatedServices: ['mobile-development', 'ui-ux-design', 'cloud-solutions']
      },
    }
  
    return {
      getService: (slug: string) => services[slug],
      getAllServices: () => services,
      getRelatedServices: (slug: string) => {
        return services[slug].relatedServices.map((slug) => services[slug])
      }
    }
  }