<template>
    <section class="py-20">
      <div 
        v-motion 
        :variants="slideVisibleBottom"
        :delay="50"
        :duration="600"
        class="container"
      >
        <div class="bg-primary rounded-3xl p-12 text-center text-white" :class="action.style || 'bg-primary'">
          <h2 class="text-3xl md:text-4xl font-bold mb-6">
            {{ action.title }}
          </h2>
          <p class="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            {{ action.description }}
          </p>
          <NuxtLink 
            to="/contact-us"
            class="inline-block bg-white text-dark-950 font-sans font-semibold px-8 py-3 rounded-lg hover:bg-light-100 transition-colors"
          >
            {{ action.buttonLabel }}
          </NuxtLink>
        </div>
      </div>
    </section>
</template>

<script setup lang="ts">
import { slideVisibleBottom } from '@vueuse/motion';
import { defineProps } from 'vue';
import type { CallToAction } from '~/types';


defineProps({
  action: {
    type: Object as () => CallToAction,
    required: true
  }
});
</script>