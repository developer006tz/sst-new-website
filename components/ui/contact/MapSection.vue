<script setup lang="ts">
import { fade_in } from '~/lib/motions';
</script>

<template>
    <section class="py-20 bg-light-300">
      <div class="container">
        <div 
          v-motion="fade_in"
          class="rounded-2xl overflow-hidden shadow-lg h-[400px]"
        >
          <div class="w-full h-full bg-gray-200 flex items-center justify-center">
            <p class="text-dark-600">Map will be displayed here</p>
          </div>
        </div>
      </div>
    </section>
</template>