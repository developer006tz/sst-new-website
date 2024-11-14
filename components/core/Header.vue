<!-- components/core/Header.vue -->
<template>
  <header v-motion="'slide-down'" class="fixed w-full z-50 bg-white md:bg-white/50 backdrop-blur-lg shadow-sm">
    <nav class="container py-4 flex items-center justify-between">
      <NuxtLink to="/" class="flex items-center space-x-2">
        <NuxtImg src="https://res.cloudinary.com/dcmwnrvzk/image/upload/v1731598362/social-smarttech-logo_hvn5fr.png"
          alt="SocialSmartTech Logo" width="150" height="50" class="h-12 w-auto" />
      </NuxtLink>

      <!-- Desktop Menu -->
      <div class="hidden md:flex items-center space-x-8">
        <NuxtLink v-for="item in navItems" :key="item.path" :to="item.path"
          class="font-medium text-dark-600 hover:text-primary transition-colors">
          {{ item.name }}
        </NuxtLink>
        <NuxtLink :to="'contact-us'"
          class="btn bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-600 transition-colors">
          Contact Us
        </NuxtLink>
      </div>

      <!-- Mobile Menu Button -->
      <button @click="isMenuOpen = !isMenuOpen" class="md:hidden p-2 text-dark-600 hover:text-primary transition-colors"
        aria-label="Toggle menu">
        <Icon :name="isMenuOpen ? 'mdi:close' : 'mdi:menu'" class="w-6 h-6" />
      </button>
    </nav>

    <!-- Mobile Menu -->
    <Transition enter-active-class="transition duration-200 ease-out" enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0" leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 -translate-y-4">
      <div v-if="isMenuOpen"
        class="md:hidden absolute top-full left-0 w-full bg-white backdrop-blur-lg shadow-lg border-t border-gray-100">
        <div class="container py-4 space-y-4">
          <NuxtLink v-for="item in navItems" :key="item.path" :to="item.path"
            class="block font-medium text-dark-600 hover:text-primary transition-colors py-2"
            @click="isMenuOpen = false" v-motion="{
              initial: { opacity: 0, y: 40 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 800,
                  ease: 'easeOut'
                }
              }
            }">
            {{ item.name }}
          </NuxtLink>
          <NuxtLink :to="'contact-us'"
            class="block w-full btn bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-600 transition-colors text-center"
            @click="isMenuOpen = false" v-motion="{
              initial: { scale: 0.5, opacity: 0 },
              visible: {
                scale: 1,
                opacity: 1,
                transition: {
                  duration: 600,
                  ease: 'easeOut'
                }
              },
              hover: {
                scale: 1.05,
                transition: {
                  duration: 300
                }
              }
            }">
            Contact Us
          </NuxtLink>
        </div>
      </div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
import type { NavItem } from '~/types';
import { ref } from 'vue';
import { onClickOutside, onKeyStroke } from '@vueuse/core';

const isMenuOpen = ref(false);

const route = useRoute();
watch(() => route.path, () => {
  isMenuOpen.value = false;
});

onClickOutside(ref(null), () => {
  isMenuOpen.value = false;
});

onKeyStroke('Escape', () => {
  isMenuOpen.value = false;
});

const navItems: NavItem[] = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'About', path: '/about-us' },
  { name: 'Portfolio', path: '/portfolio' },
];
</script>

<style scoped>
/*Prevent body scroll when menu is open */
:global(body.menu-open) {
  overflow: hidden;
}
</style>