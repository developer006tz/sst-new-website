<template>
    <section class="py-12">
      <div class="container">
        <TransitionGroup tag="div" class="grid md:grid-cols-2 lg:grid-cols-3 gap-8" name="portfolio">
          <div v-for="project in projects" :key="project.id" v-motion="fade_in" class="group">
            <div class="relative overflow-hidden rounded-2xl bg-primary/10 shadow-lg">
              <!-- Project Image -->
              <div class="relative aspect-[4/3] overflow-hidden p-2">
                <NuxtImg 
                  :src="project.image" 
                  :alt="project.title"
                  class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" 
                />
                <!-- Overlay -->
                <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div class="absolute bottom-0 left-0 right-0 p-6 translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 class="text-xl font-semibold text-white mb-2">{{ project.title }}</h3>
                    <p class="text-white/80">{{ project.shortDescription }}</p>
                  </div>
                </div>
              </div>
              <!-- Project Info -->
              <div class="p-6">
                <div class="flex flex-wrap gap-2 mb-4">
                  <span 
                    v-for="tech in project.technologies" 
                    :key="tech"
                    class="text-sm px-3 py-1 rounded-full bg-primary/10 text-primary"
                  >
                    {{ tech }}
                  </span>
                </div>
  
                <div class="flex items-center justify-between">
                  <span class="text-dark-600">{{ project.type }}</span>
                  <button 
                    @click="$emit('view-details', project)"
                    class="flex items-center text-primary hover:text-primary-600 transition-colors"
                  >
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
  </template>
  
  <script setup lang="ts">
  import { fade_in } from '~/lib/motions';
 import type { Project } from '~/types/portfolio';
  
  defineProps<{
    projects: Project[];
  }>();
  
  defineEmits<{
    'view-details': [project: Project];
  }>();
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