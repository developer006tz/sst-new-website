<template>
  <header v-motion="slideTop" class="fixed w-full z-50 backdrop-blur-xl md:backdrop-blur-none">

    <nav class="container py-1 flex items-center justify-between bg-white/0 md:bg-white/10 backdrop-blur-0  md:backdrop-blur-3xl backdrop-filter-none md:backdrop-filter rounded-full mt-4 relative">
      <NuxtLink to="/" class="flex items-center space-x-2 relative">
        <NuxtImg :src="logoMain"
          alt="SocialSmartTech Logo" width="64" height="64" class="h-16 w-auto" />
      </NuxtLink>

      <!-- Desktop Menu -->
      <div class="hidden md:flex items-center space-x-8">
        <NuxtLink v-for="item in navItems" :key="item.path" :to="item.path"
          class="font-medium text-white hover:text-primary transition-colors">
          {{ item.name }}
        </NuxtLink>
        <NuxtLink :to="'contact-us'"
          class="btn bg-primary text-white px-6 py-2 rounded-full hover:bg-primary-600 transition-colors">
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
        class="md:hidden absolute top-full left-0 w-full bg-dark-950 backdrop-blur-lg backdrop-filter shadow-lg border-t border-dark-900">
        <div class="container py-4 space-y-4">
          <NuxtLink v-for="item in navItems" :key="item.path" :to="item.path"
            class="block font-medium text-dark-500 hover:text-primary transition-colors py-2"
            @click="isMenuOpen = false" v-motion="slide_left">
            {{ item.name }}
          </NuxtLink>
          <NuxtLink :to="'contact-us'"
            class="block w-full btn bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-600 transition-colors text-center"
            @click="isMenuOpen = false" v-motion="bounce_in">
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
import {  logoMain } from '~/stores/images';
import { slideTop } from '@vueuse/motion';
import { bounce_in, slide_left } from '~/lib/motions';

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