<script setup lang="ts">
import { fade_in } from '~/lib/motions';
</script>

<template>
    <section class="py-20 bg-gradient-to-r from-primary to-secondary  text-center text-white">
        <div 
          v-motion="fade_in"
          class="container text-center text-white"
        >
          <h2 class="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p class="text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss how our solutions can help you achieve your business goals
          </p>
          <button class="btn bg-white text-primary hover:bg-light-100 px-8 py-3 rounded-lg transition-all">
            Schedule a Consultation
          </button>
        </div>
      </section>
</template>