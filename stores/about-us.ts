import type { CompanyValue, Milestone, Partner, Stat, TeamMember, Testimonial } from "~/types/about";

export const companyValues: CompanyValue[] = [
    {
      title: 'Innovation',
      description: 'We constantly push boundaries to deliver cutting-edge solutions that drive business growth.',
      icon: 'mdi:lightbulb'
    },
    {
      title: 'Excellence',
      description: 'We maintain the highest standards in everything we do, from code quality to customer service.',
      icon: 'mdi:star'
    },
    {
      title: 'Integrity',
      description: 'We build trust through transparency, honesty, and ethical business practices.',
      icon: 'mdi:shield-check'
    }
  ];
  
  export const teamMembers: TeamMember[] = [
    {
      name: 'John Doe',
      position: 'CEO & Founder',
      image: '/api/placeholder/400/400'
    },
    {
      name: 'Jane Smith',
      position: 'Technical Director',
      image: '/api/placeholder/400/400'
    },
    {
      name: 'Mike Johnson',
      position: 'Lead Developer',
      image: '/api/placeholder/400/400'
    },
    {
      name: 'Sarah Wilson',
      position: 'Project Manager',
      image: '/api/placeholder/400/400'
    }
  ];
  
  export const stats: Stat[] = [
    { value: '50+', label: 'Clients Served' },
    { value: '100+', label: 'Projects Completed' },
    { value: '4+', label: 'Years Experience' },
    { value: '15+', label: 'Team Members' }
  ];
  
  export const milestones: Milestone[] = [
    {
      year: '2019',
      title: 'Company Founded',
      description: 'SocialSmartTech was established with a vision to transform businesses through technology.'
    },
    {
      year: '2021',
      title: 'First Major Project',
      description: 'Successfully delivered our first enterprise-level logistics management system.'
    },
    {
      year: '2022',
      title: 'Interprise Software Development',
      description: 'Expanded our services to include custom software development for small , medium-sized businesses to large enterprises.'
    },
    {
      year: '2024',
      title: 'Fastest-Growing Tech Company',
      description: 'Recognized as one of the fastest-growing technology companies in the region.'
    }
  ];
  
  export const testimonials: Testimonial[] = [
    {
      content: "SocialSmartTech transformed our logistics operations with their innovative software solutions. Their team's expertise and dedication to quality are outstanding.",
      name: "Elisante Kanza",
      position: "Manager",
      company: "Conveyance Logistics",
      avatar: "/api/placeholder/100/100"
    },
    {
      content: "My company's brand identity website was completely transformed by SocialSmartTech's web development team. They delivered a fresh, modern look that perfectly represents our values.",
      name: "Michael Kapinga",
      position: "Brand Identity Manager",
      company: "KapingaDesigns",
      avatar: "/api/placeholder/100/100"
    },
    {
      content: "My company's brand identity website and its cms was accomplished by SocialSmartTech's team. They are very professional and through new tech they are using, they delivered a fresh, modern look that perfectly represents our values.",
      name: "Lambert Nyembo",
      position: "Manager",
      company: "Congo Tanzania Mining Consultancy",
      avatar: "/api/placeholder/100/100"
    }
  ];
  
  export const partners: Partner[] = [
    {
      name: "Ctmcl",
      logo: "/images/clients/ctmcl-company-initial-and-long-name-720x225.png"
    },
    {
      name: "Mwancelele Insurance",
      logo: "/images/clients/mwancelele-insurance.png"
    },
    {
      name: "Company 3",
      logo: "/images/clients/way-impex.jpg"
    },
    {
      name: "Conveyance Logistics",
      logo: "/images/clients/conveyance-logistics.png"
    },
    {
      name: "Kapinga Designs",
      logo: "/images/clients/kapinga-designs-brand-logo.png"
    },
    {
      name: "Huku Events",
      logo: "/images/clients/huku-events.jpg"
    }
  ];