import type { Category, Project } from "~/types/portfolio";
import { conveyanceImg, ctmclImg, kapingaDesignsImg, logisticsManagementImg, myDoctorImg } from "./images";

export const projects: Project[] = [
    {
      id: 1,
      title: "Logistics Management System",
      shortDescription: "End-to-end logistics and supply chain management solution",
      description: "A comprehensive logistics management system that streamlines supply chain operations, inventory tracking, container sales, freight and forwarding activities.",
      image: logisticsManagementImg,
      type: "Enterprise Software",
      client: "Conveyance Logistics Ltd",
      duration: "8 months",
      technologies: ["Laravel", "javascript & Jquery", "PostgreSQL", "Docker"],
      link: "https://conveyance.socialsmarttech.com",
      features: [
        "Real-time tracking",
        "Inventory management",
        "Container sales, leasing, and tracking",
        "Clearing and forwarding",
        "Customer Management",
        "Invoive and billing",
        "Automated reporting",
      ],
      category: "logistics-systems"
    },
    {
       id: 2,
       title: "Conveyance Logistics website",
       shortDescription: "A Dynamic website for a conveyance logistics company", 
       description: "A dynamic website for a conveyance logistics company that provides self services such as quotation generation, container sales and realtime notifications through its online portal",
       image: conveyanceImg,
       type: "Web Application",
       client: "Conveyance Logistics Ltd",
       duration: "2 months",
       technologies: ["React", "Next.js", "Tailwind CSS", "Nodejs(Express)"],
       link: "https://conveyance.co.tz",
         features: [
            "Company profile presentation",
            "Quotation generation",
            "Container sales portal",
            "Realtime messages",
            "Customized  Email Templates",
            "Automated reporting",
         ],
         category: "web-applications"
    },
    {
        id: 3,
        title: "Kapinga Designs",
        shortDescription: "A portfolio website for a Brand identity Designer",
        description: "A portfolio website for a brand identity designer that showcases his work, services, and contact information.",
        image: kapingaDesignsImg,
        type: "Web Application",
        client: "Kapinga Designs",
        duration: "1 month",
        technologies: ["React", "Next.js", "Tailwind CSS", "AppWrite","Amazon S3 Bucker","Framer Motion"],
        link: "https://kapingadesigns.com",
        features: [
          "Portfolio presentation",
          "Service presentation",
          "Contact form",
          "Social media integration",
          "Customized  Email Templates",
          "Automated reporting",
        ],
        category: "web-applications"
    },
    {
        id: 4,
        title: "My Doctor 24hrs",
        shortDescription: "A telemedicine app that connects patients with doctors",
        description: "A telemedicine app that connects patients with doctors for online consultations, prescriptions, and follow-ups.",
        image: myDoctorImg,
        type: "Web Application",
        client: "My Doctor 24hrs",
        duration: "3 months",
        technologies: ["Vue Js", "Nuxt 3", "Rest Api's", "Twilio"],
        link: "https://mydoctor24hrs.com",
        features: [
          "Doctor-patient video calls",
          "Audio calls",
          "Appointment scheduling",
          "Online consultations",
          "Payments Integration",
          "In app messaging system",
        ],
        category: "web-applications"
    },
    {
      id: 5,
      title: "Congo Tanzania Mining Consultancy",
      shortDescription: "Providing innovative solutions and expert advice to mining companies and individuals in Tanzania",
      description: "A dynamic website, with (CMS) for a mining consultancy company that provides expert advice and innovative solutions to mining companies and individuals in Tanzania.",
      image: ctmclImg,
      type: "Dynamic web application",
      client: "CTML Co.Ltd",
      duration: "2 Weeks",
      technologies: ["Vue 3", "Nuxt js", "Tailwind CSS", "AzamPay", "Express js", "Supabase"],
      link: "https://ctmcl.co.tz",
      features: [
        "Company profile presentation",
        "Service presentation",
        "Contact form",
        "Payment Integration",
        "Appointment booking",
        "Email Templates",
        "Admin Dashboard",
      ],
      category: "web-applications"
    }
  ];

  export const categories: Category[] = [
    {
        slug: 'all',
        label: 'All'
    },
    {
        slug: 'web-applications',
        label: 'Web Applications'
    },
    {
        slug: 'mobile-apps',
        label: 'Mobile Apps'
    },
    {
        slug: 'logistics-systems',
        label: 'Logistics Systems'
    },
    {
        slug: 'ui-ux-design',
        label: 'UI/UX Design'
    }
  ];