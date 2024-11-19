<template>
    <section class="py-12">
      <div class="container">
        <div v-motion="fade_in" class="flex flex-wrap justify-center gap-4">
          <button 
            v-for="category in categories" 
            :key="category.slug" 
            @click="$emit('update:modelValue', category.slug)"
            class="px-6 py-2 rounded-full transition-all duration-300" 
            :class="[
              modelValue === category.slug
                ? 'bg-primary text-white shadow-lg'
                : ' text-dark-600 hover:bg-light-400'
            ]"
          >
            {{ category.label }}
          </button>
        </div>
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  import { fade_in } from '~/lib/motions';
  import type { Category } from '~/types/portfolio';
  
  defineProps<{
    modelValue: string;
    categories: Category[];
  }>();
  
  defineEmits<{
    'update:modelValue': [value: string];
  }>();
  </script>