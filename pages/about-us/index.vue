<!-- pages/about-us/index.vue -->
<template>
  <main class="overflow-hidden">
    <!-- Hero Section -->
    <section class="relative py-20 md:py-32 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div class="container">
        <div 
          v-motion="hero_text"
          class="max-w-3xl mx-auto text-center"
        >
          <h1 class="text-dark-800">About <span class="text-primary">SocialSmartTech</span></h1>
          <p class="mt-6 text-lg text-dark-600">
            Pioneering innovative software solutions to transform businesses since 2020
          </p>
        </div>
      </div>
    </section>

    <!-- Our Story -->
    <section class="py-20">
      <div class="container">
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div 
            v-motion="slide_right"
            class="space-y-6"
          >
            <h2 class="text-dark-800">Our Story</h2>
            <p class="text-dark-600">
              Founded in 2020, SocialSmartTech emerged from a vision to bridge the gap between complex business challenges and innovative technology solutions. Our journey began with a focus on logistics software and has since expanded to encompass a wide range of digital transformation services.
            </p>
            <p class="text-dark-600">
              Today, we're proud to serve businesses across East Africa, helping them leverage technology to achieve their goals and stay ahead in an increasingly digital world.
            </p>
          </div>
          <div 
            v-motion="zoom_in"
            class="relative"
          >
            <div class="absolute inset-0 bg-gradient-to-tr from-primary-100 to-secondary-100 rounded-3xl blur-3xl opacity-30"></div>
            <NuxtImg
              src="https://res.cloudinary.com/dcmwnrvzk/image/upload/v1731598362/social-smarttech-logo_hvn5fr.png"
              alt="SocialSmartTech"
              class="relative w-full h-auto rounded-3xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Values Section -->
    <section class="py-20 bg-light-300">
      <div class="container">
        <div 
          v-motion="reveal"
          class="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 class="text-dark-800">Our Values</h2>
          <p class="mt-4 text-dark-600">
            The principles that guide our work and relationships
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div 
            v-for="(value, index) in companyValues"
            :key="value.title"
            v-motion="card_enter"
            :custom="{ delay: index * 100 }"
            class="bg-white p-8 rounded-2xl shadow-lg"
          >
            <div class="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
              <Icon :name="value.icon" class="w-7 h-7 text-primary"/>
            </div>
            <h3 class="text-xl font-semibold mb-4">{{ value.title }}</h3>
            <p class="text-dark-600">{{ value.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Section -->
    <section class="py-20">
      <div class="container">
        <div 
          v-motion="reveal"
          class="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 class="text-dark-800">Our Team</h2>
          <p class="mt-4 text-dark-600">
            Meet the experts behind our success
          </p>
        </div>

        <div class="grid md:grid-cols-4 gap-8">
          <div 
            v-for="(member, index) in teamMembers"
            :key="member.name"
            v-motion="card_enter"
            :custom="{ delay: index * 100 }"
            class="group"
          >
            <div class="relative overflow-hidden rounded-2xl mb-4">
              <div class="aspect-w-1 aspect-h-1 bg-light-300">
                <NuxtImg
                  :src="member.image"
                  :alt="member.name"
                  class="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            </div>
            <h4 class="text-lg font-semibold">{{ member.name }}</h4>
            <p class="text-primary">{{ member.position }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="py-20 bg-primary text-white">
      <div class="container">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div 
            v-for="stat in stats"
            :key="stat.value"
            v-motion="bounce_in"
            class="text-center"
          >
            <div class="text-4xl md:text-5xl font-bold mb-2">{{ stat.value }}</div>
            <p class="text-primary-100">{{ stat.label }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Timeline Section -->
  <section class="py-20 bg-light-300">
    <div class="container">
      <div 
        v-motion="reveal"
        class="text-center max-w-2xl mx-auto mb-16"
      >
        <h2 class="text-dark-800">Our Journey</h2>
        <p class="mt-4 text-dark-600">
          Key milestones that shaped our success
        </p>
      </div>

      <div class="relative">
        <!-- Timeline Line -->
        <div class="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20"></div>

        <!-- Timeline Items -->
        <div class="space-y-16">
          <div 
            v-for="(milestone, index) in milestones" 
            :key="milestone.year"
            v-motion="fade_in"
            :custom="{ delay: index * 100 }"
            class="relative"
          >
            <!-- Timeline Dot -->
            <div class="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-primary rounded-full"></div>

            <!-- Content -->
            <div class="grid md:grid-cols-2 gap-8 items-center">
              <div :class="index % 2 === 0 ? 'md:text-right' : 'md:order-2'">
                <div class="bg-white p-6 rounded-2xl shadow-lg">
                  <span class="text-primary font-bold text-lg">{{ milestone.year }}</span>
                  <h3 class="text-xl font-semibold mt-2">{{ milestone.title }}</h3>
                  <p class="text-dark-600 mt-2">{{ milestone.description }}</p>
                </div>
              </div>
              <div class="md:col-span-1" :class="index % 2 === 0 ? 'md:order-2' : ''">
                <!-- Placeholder for potential images -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Testimonials Section -->
  <section class="py-20">
    <div class="container">
      <div 
        v-motion="reveal"
        class="text-center max-w-2xl mx-auto mb-16"
      >
        <h2 class="text-dark-800">Client Testimonials</h2>
        <p class="mt-4 text-dark-600">
          What our clients say about working with us
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-8">
        <div 
          v-for="(testimonial, index) in testimonials"
          :key="index"
          v-motion="card_enter"
          :custom="{ delay: index * 100 }"
          class="bg-white p-8 rounded-2xl shadow-lg"
        >
          <div class="flex items-center mb-6">
            <Icon name="mdi:format-quote-open" class="w-8 h-8 text-primary/30"/>
          </div>
          <p class="text-dark-600 mb-6">{{ testimonial.content }}</p>
          <div class="flex items-center">
            <div class="w-12 h-12 rounded-full bg-light-300 overflow-hidden">
              <NuxtImg
                :src="testimonial.avatar"
                :alt="testimonial.name"
                class="w-full h-full object-cover"
              />
            </div>
            <div class="ml-4">
              <h4 class="font-semibold">{{ testimonial.name }}</h4>
              <p class="text-sm text-dark-600">{{ testimonial.position }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Partners Section -->
  <section class="py-20 bg-light-300">
    <div class="container">
      <div 
        v-motion="reveal"
        class="text-center max-w-2xl mx-auto mb-16"
      >
        <h2 class="text-dark-800">Our Partners</h2>
        <p class="mt-4 text-dark-600">
          Trusted by leading companies across industries
        </p>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
        <div 
          v-for="(partner, index) in partners"
          :key="partner.name"
          v-motion="fade_in"
          :custom="{ delay: index * 50 }"
          class="group p-6 bg-white rounded-xl hover:shadow-lg transition-all duration-300"
        >
          <NuxtImg
            :src="partner.logo"
            :alt="partner.name"
            class="w-full h-12 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
          />
        </div>
      </div>
    </div>
  </section>

    <!-- Call to Action -->
    <section class="py-20">
      <div class="container">
        <div 
          v-motion="fade_in"
          class="bg-gradient-to-r from-primary to-secondary rounded-3xl p-12 text-center text-white"
        >
          <h2 class="text-3xl md:text-4xl font-bold mb-6">
            Ready to Work Together?
          </h2>
          <p class="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Let's discuss how we can help you achieve your business goals
          </p>
          <NuxtLink 
            to="/contact-us"
            class="inline-block bg-white text-primary px-8 py-3 rounded-lg hover:bg-light-100 transition-colors"
          >
            Get in Touch
          </NuxtLink>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { bounce_in, card_enter, fade_in, hero_text, reveal, slide_right, zoom_in } from '~/lib/motions';

interface CompanyValue {
  title: string;
  description: string;
  icon: string;
}

interface TeamMember {
  name: string;
  position: string;
  image: string;
}

interface Stat {
  value: string;
  label: string;
}

interface Milestone {
  year: string;
  title: string;
  description: string;
}

interface Testimonial {
  content: string;
  name: string;
  position: string;
  avatar: string;
  company?: string;
}

interface Partner {
  name: string;
  logo: string;
}

const companyValues: CompanyValue[] = [
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

const teamMembers: TeamMember[] = [
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

const stats: Stat[] = [
  { value: '50+', label: 'Clients Served' },
  { value: '100+', label: 'Projects Completed' },
  { value: '4+', label: 'Years Experience' },
  { value: '15+', label: 'Team Members' }
];

const milestones: Milestone[] = [
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

const testimonials: Testimonial[] = [
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

const partners: Partner[] = [
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
</script>