<template>
  <header v-motion="slideTop" class="fixed w-full z-50 top-0 transform-gpu">
    <nav class="container mx-auto py-1 px-4 flex items-center justify-between 
              bg-white/10 md:bg-[#0C1020] backdrop-blur-lg md:border border-sst
             rounded-full mt-4 relative">
      <!-- Logo -->
      <NuxtLink to="/" class="flex items-center space-x-2 relative">
        <NuxtImg :src="logoMain" alt="SocialSmartTech Logo" width="64" height="64" class="h-16 w-auto" />
      </NuxtLink>

      <!-- Desktop Menu -->
      <div class="hidden md:flex items-center space-x-8">
        <NuxtLink v-for="item in navItems" :key="item.path" :to="item.path"
          class="font-medium text-white hover:text-primary transition-colors duration-200">
          {{ item.name }}
        </NuxtLink>
        <NuxtLink :to="'contact-us'" class="btn bg-primary text-white px-6 py-2 rounded-full 
                 hover:bg-primary-600 transition-colors duration-200">
          Contact Us
        </NuxtLink>
      </div>

      <!-- Mobile Menu Button -->
      <button @click="toggleMenu" class="md:hidden p-2 text-dark-500 hover:text-primary transition-colors"
        aria-label="Toggle menu">
        <Icon :name="isMenuOpen ? 'mdi:close' : 'mdi:menu'" class="w-6 h-6" />
      </button>
    </nav>

    <!-- Mobile Menu -->
    <Transition enter-active-class="transition duration-200 ease-out" enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0" leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 -translate-y-4">
      <div v-if="isMenuOpen" v-click-outside="closeMenu" class="md:hidden absolute top-full left-0 w-full 
               bg-dark-950/90 backdrop-blur-md
               shadow-lg border-t border-dark-900">
        <div class="container mx-auto py-4 space-y-4 px-4">
          <NuxtLink v-for="item in navItems" :key="item.path" :to="item.path" class="block font-medium text-dark-500 hover:text-primary 
                   transition-colors duration-200 py-2" @click="closeMenu" v-motion="slide_left">
            {{ item.name }}
          </NuxtLink>
          <NuxtLink :to="'contact-us'" class="block w-full btn bg-primary text-white px-6 py-2 
                   rounded-lg hover:bg-primary-600 
                   transition-colors duration-200 text-center" @click="closeMenu" v-motion="bounce_in">
            Contact Us
          </NuxtLink>
        </div>
      </div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { onKeyStroke } from '@vueuse/core';
import { logoMain } from '~/stores/images';
import { slideTop } from '@vueuse/motion';
import { bounce_in, slide_left } from '~/lib/motions';

interface NavItem {
  name: string;
  path: string;
}

const isMenuOpen = ref(false);
const route = useRoute();

const navItems: NavItem[] = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'About', path: '/about-us' },
  { name: 'Portfolio', path: '/portfolio' },
];

// Methods
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
  document.body.classList.toggle('menu-open', isMenuOpen.value);
};

const closeMenu = () => {
  if (isMenuOpen.value) {
    isMenuOpen.value = false;
    document.body.classList.remove('menu-open');
  }
};

// Watchers and Event Listeners
watch(() => route.path, closeMenu);

onKeyStroke('Escape', closeMenu);

// Handle cleanup when component is unmounted
onBeforeUnmount(() => {
  document.body.classList.remove('menu-open');
});
</script>

<style>
/* Base styles */
.menu-open {
  overflow: hidden;
}

/* Force hardware acceleration for smoother animations */
header {
  will-change: transform;
  transform: translateZ(0);
  -webkit-transform: translateZ(0);
  backface-visibility: hidden;
  perspective: 1000px;
}

/* Ensure backdrop-filter works consistently across browsers */
@supports (backdrop-filter: blur(12px)) or (-webkit-backdrop-filter: blur(12px)) {
  nav {
    -webkit-backdrop-filter: blur(12px);
    backdrop-filter: blur(12px);
  }
}
</style>