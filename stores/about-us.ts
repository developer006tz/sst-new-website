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
      year: '2020',
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
      title: 'Team Expansion',
      description: 'Grew our team to 15+ professionals and opened our new office in Dar es Salaam.'
    },
    {
      year: '2023',
      title: 'Regional Recognition',
      description: 'Recognized as one of the fastest-growing tech companies in East Africa.'
    }
  ];
  
  export const testimonials: Testimonial[] = [
    {
      content: "SocialSmartTech transformed our logistics operations with their innovative software solutions. Their team's expertise and dedication to quality are outstanding.",
      name: "Sarah Johnson",
      position: "Operations Director",
      company: "Global Logistics Ltd",
      avatar: "/api/placeholder/100/100"
    },
    {
      content: "Working with SocialSmartTech has been a game-changer for our business. Their custom software solutions have significantly improved our efficiency.",
      name: "Michael Chen",
      position: "CEO",
      company: "Tech Solutions Inc",
      avatar: "/api/placeholder/100/100"
    },
    {
      content: "The team's technical expertise and commitment to delivering quality solutions sets them apart. They're not just vendors, but true technology partners.",
      name: "David Williams",
      position: "IT Manager",
      company: "Express Shipping Co",
      avatar: "/api/placeholder/100/100"
    }
  ];
  
  export const partners: Partner[] = [
    {
      name: "Company 1",
      logo: "/api/placeholder/200/100"
    },
    {
      name: "Company 2",
      logo: "/api/placeholder/200/100"
    },
    {
      name: "Company 3",
      logo: "/api/placeholder/200/100"
    },
    {
      name: "Company 4",
      logo: "/api/placeholder/200/100"
    },
    {
      name: "Company 5",
      logo: "/api/placeholder/200/100"
    },
    {
      name: "Company 6",
      logo: "/api/placeholder/200/100"
    }
  ];