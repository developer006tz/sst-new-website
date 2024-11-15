<script setup lang="ts">
import { hero_text } from '~/lib/motions';
</script>

<template>
    <section class="relative py-12 md:py-12 ">
      <div class="container">
        <div 
          v-motion="hero_text"
          class="max-w-3xl mx-auto text-center"
        >
          <h1 class="text-dark-800">Our <span class="text-primary">Services</span></h1>
          <p class="mt-6 text-lg text-dark-600">
            Comprehensive technology solutions to transform your business operations and drive growth
          </p>
        </div>
      </div>
    </section>
</template>