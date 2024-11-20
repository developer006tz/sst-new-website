<script setup lang="ts">
import { categories, projects } from '~/stores/portfolio';
import type { Project } from '~/types/portfolio';

useHead({
  title: 'Portfolio',
  meta: [
    {
      name: 'description',
      content: 'Explore our successful projects and innovative solutions',
    },
    {
      name: 'keywords',
      content: 'portfolio, socialsmarttech, successful projects, innovative solutions',
    },
    {
      property: 'og:title',
      content: 'Portfolio',
    },
    {
      property: 'og:description',
      content: 'Explore our successful projects and innovative solutions',
    },
    {
      property: 'og:image',
      content: 'https://res.cloudinary.com/dcmwnrvzk/image/upload/v1732090786/social-smarttech-icon_y5dogm.png',
    },
    {
      property: 'og:url',
      content: 'https://socialsmarttech.com/portfolio',
    },
  ],
});

const activeCategory = ref('all');
const isModalOpen = ref(false);
const selectedProject = ref<Project | null>(null);

const filteredProjects = computed(() => {
  if (activeCategory.value === 'all') return projects;
  return projects.filter(project => project.category === activeCategory.value);
});

const openProjectDetails = (project: Project) => {
  selectedProject.value = project;
  isModalOpen.value = true;
};
</script>
<template>
     <CoreBgImage /> 

     <CorePageHeading 
      blackTitle="Our"
      blueTitle="Portfolio"
      description="Explore our successful projects and innovative solutions"
    />

    <UiPortfolioFilterSection 
      v-model="activeCategory"
      :categories="categories"
    />


    <UiPortfolioGrid :projects="filteredProjects"
      @view-details="openProjectDetails"
    />

    <UiPortfolioProjectDetailsModal
      v-model="isModalOpen"
      :project="selectedProject"
    />

    <CoreCalltoAction
      :action="{
        title: 'Ready to Start Your Project?',
        description: 'Let\'s work together to bring your ideas to life',
        buttonLabel: 'Get Started',
        style: 'bg-gradient-to-b from-primary to-secondary/40'
      }"
    />
</template>
