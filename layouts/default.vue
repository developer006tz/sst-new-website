<template>
    <div class="min-h-screen bg-light-400">
      <header v-motion="'slide-down'" class="fixed w-full z-50 bg-white/80 backdrop-blur-lg shadow-sm">
        <nav class="container py-4 flex items-center justify-between">
          <NuxtLink to="/" class="flex items-center space-x-2">
            <NuxtImg 
              src="https://res.cloudinary.com/dcmwnrvzk/image/upload/v1731598362/social-smarttech-logo_hvn5fr.png"
              alt="SocialSmartTech Logo"
              width="150"
              height="50"
              class="h-12 w-auto"
            />
          </NuxtLink>
          
          <div class="hidden md:flex items-center space-x-8">
            <NuxtLink v-for="item in navItems" 
              :key="item.path" 
              :to="item.path"
              class="font-medium text-dark-600 hover:text-primary transition-colors"
            >
              {{ item.name }}
            </NuxtLink>
            <NuxtLink :to="'contact-us'" class="btn bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-600 transition-colors">
              Contact Us
            </NuxtLink>
          </div>
        </nav>
      </header>
  
      <main class="pt-20">
        <slot />
      </main>
    </div>
  </template>
  
  <script setup lang="ts">
  import type { NavItem } from '~/types';
  
  const navItems: NavItem[] = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about-us' },
    { name: 'Portfolio', path: '/portfolio' },
  ]
  </script>