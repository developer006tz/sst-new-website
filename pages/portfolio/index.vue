<!-- pages/portfolio/index.vue -->
<template>
  <main class="overflow-hidden">
    <!-- Hero Section -->
    <section class="relative py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div class="container">
        <div v-motion="hero_text" class="max-w-3xl mx-auto text-center">
          <h1 class="text-light-300">Our <span class="text-primary">Portfolio</span></h1>
          <p class="mt-6 text-lg text-dark-600">
            Explore our successful projects and innovative solutions
          </p>
        </div>
      </div>
    </section>

    <!-- Portfolio Filter Section -->
    <section class="py-12">
      <div class="container">
        <div v-motion="fade_in" class="flex flex-wrap justify-center gap-4">
          <button v-for="category in categories" :key="category" @click="activeCategory = category"
            class="px-6 py-2 rounded-full transition-all duration-300" :class="[
              activeCategory === category
                ? 'bg-primary text-white shadow-lg'
                : ' text-dark-600 hover:bg-light-400'
            ]">
            {{ category }}
          </button>
        </div>
      </div>
    </section>

    <!-- Portfolio Grid -->
    <section class="py-12">
      <div class="container">
        <TransitionGroup tag="div" class="grid md:grid-cols-2 lg:grid-cols-3 gap-8" name="portfolio">
          <div v-for="project in filteredProjects" :key="project.id" v-motion="fade_in" class="group">
            <div class="relative overflow-hidden rounded-2xl bg-white shadow-lg">
              <!-- Project Image -->
              <div class="relative aspect-[4/3] overflow-hidden">
                <NuxtImg :src="project.image" :alt="project.title"
                  class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
                <!-- Overlay -->
                <div
                  class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div
                    class="absolute bottom-0 left-0 right-0 p-6 translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 class="text-xl font-semibold text-white mb-2">{{ project.title }}</h3>
                    <p class="text-white/80">{{ project.shortDescription }}</p>
                  </div>
                </div>
              </div>

              <!-- Project Info -->
              <div class="p-6">
                <div class="flex flex-wrap gap-2 mb-4">
                  <span v-for="tech in project.technologies" :key="tech"
                    class="text-sm px-3 py-1 rounded-full bg-primary/10 text-primary">
                    {{ tech }}
                  </span>
                </div>

                <div class="flex items-center justify-between">
                  <span class="text-dark-600">{{ project.type }}</span>
                  <button @click="openProjectDetails(project)"
                    class="flex items-center text-primary hover:text-primary-600 transition-colors">
                    View Details
                    <Icon name="mdi:arrow-right" class="w-5 h-5 ml-1" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </TransitionGroup>
      </div>
    </section>

    <!-- Project Details Modal -->
    <TransitionRoot appear :show="isModalOpen" as="template">
      <Dialog as="div" @close="closeModal" class="relative z-50">
        <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0" enter-to="opacity-100"
          leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0">
          <div class="fixed inset-0 bg-black/50 backdrop-blur-sm" />
        </TransitionChild>

        <div class="fixed inset-0 overflow-y-auto">
          <div class="flex min-h-full items-center justify-center p-4">
            <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0 scale-95"
              enter-to="opacity-100 scale-100" leave="duration-200 ease-in" leave-from="opacity-100 scale-100"
              leave-to="opacity-0 scale-95">
              <DialogPanel class="w-full max-w-3xl bg-white rounded-2xl overflow-hidden">
                <div v-if="selectedProject" class="relative">
                  <!-- Project Image -->
                  <div class="relative aspect-video">
                    <NuxtImg :src="selectedProject.image" :alt="selectedProject.title"
                      class="w-full h-full object-cover" />
                  </div>

                  <!-- Content -->
                  <div class="p-8">
                    <h3 class="text-2xl font-semibold mb-4">{{ selectedProject.title }}</h3>
                    <p class="text-dark-600 mb-6">{{ selectedProject.description }}</p>

                    <!-- Project Details -->
                    <div class="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 class="font-semibold mb-2">Technologies Used</h4>
                        <div class="flex flex-wrap gap-2">
                          <span v-for="tech in selectedProject.technologies" :key="tech"
                            class="text-sm px-3 py-1 rounded-full bg-primary/10 text-primary">
                            {{ tech }}
                          </span>
                        </div>
                      </div>

                      <div>
                        <h4 class="font-semibold mb-2">Project Details</h4>
                        <ul class="space-y-2 text-dark-600">
                          <li>
                            <span class="font-medium">Client:</span> {{ selectedProject.client }}
                          </li>
                          <li>
                            <span class="font-medium">Duration:</span> {{ selectedProject.duration }}
                          </li>
                          <li>
                            <span class="font-medium">Type:</span> {{ selectedProject.type }}
                          </li>
                        </ul>
                      </div>
                    </div>

                    <!-- Key Features -->
                    <div class="mt-6">
                      <h4 class="font-semibold mb-2">Key Features</h4>
                      <ul class="grid md:grid-cols-2 gap-4">
                        <li v-for="feature in selectedProject.features" :key="feature"
                          class="flex items-center text-dark-600">
                          <Icon name="mdi:check-circle" class="w-5 h-5 text-primary mr-2" />
                          {{ feature }}
                        </li>
                      </ul>
                    </div>
                  </div>

                  <!-- Close Button -->
                  <button @click="closeModal"
                    class="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/80 backdrop-blur flex items-center justify-center hover:bg-white transition-colors">
                    <Icon name="mdi:close" class="w-6 h-6" />
                  </button>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>

    <!-- CTA Section -->
    <section class="py-20 ">
      <div class="container">
        <div v-motion="fade_in"
          class="bg-gradient-to-r from-primary to-secondary rounded-3xl p-12 text-center text-white">
          <h2 class="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p class="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Let's work together to bring your ideas to life
          </p>
          <NuxtLink to="/contact-us"
            class="inline-block bg-white text-primary px-8 py-3 rounded-lg hover:bg-light-100 transition-colors">
            Get Started
          </NuxtLink>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { Dialog, DialogPanel, TransitionRoot, TransitionChild } from '@headlessui/vue'
import { fadeVisible } from '@vueuse/motion';
import { fade_in, hero_text } from '~/lib/motions';

interface Project {
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

const categories = [
  'All',
  'Web Applications',
  'Mobile Apps',
  'Logistics Systems',
  'Enterprise Software'
];

const activeCategory = ref('All');
const isModalOpen = ref(false);
const selectedProject = ref<Project | null>(null);

const projects: Project[] = [
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
    category: "Logistics Systems"
  },
  // Add more projects...
];

const filteredProjects = computed(() => {
  if (activeCategory.value === 'All') return projects;
  return projects.filter(project => project.category === activeCategory.value);
});

const openProjectDetails = (project: Project) => {
  selectedProject.value = project;
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
};
</script>

<style scoped>
.portfolio-enter-active,
.portfolio-leave-active {
  transition: all 0.5s ease;
}

.portfolio-enter-from,
.portfolio-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>