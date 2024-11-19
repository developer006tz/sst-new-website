import type { Category, Project } from "~/types/portfolio";

export const projects: Project[] = [
    {
      id: 1,
      title: "Logistics Management System",
      shortDescription: "End-to-end logistics and supply chain management solution",
      description: "A comprehensive logistics management system that streamlines supply chain operations, inventory tracking, and delivery management.",
      image: "/api/placeholder/800/600",
      type: "Enterprise Software",
      client: "Global Logistics Ltd",
      duration: "8 months",
      technologies: ["Vue.js", "Node.js", "PostgreSQL", "Docker"],
      features: [
        "Real-time tracking",
        "Inventory management",
        "Route optimization",
        "Analytics dashboard",
        "Mobile app integration",
        "Automated reporting"
      ],
      category: "logistics-systems"
    },
    // Add more projects...
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