<script setup lang="ts">
import { bounce_in } from '~/lib/motions';
import { stats } from '~/stores/about-us';
</script>

<template>
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
</template>