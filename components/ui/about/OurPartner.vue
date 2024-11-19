<template>
  <section class="py-20 ">
    <div class="container">
      <div v-motion="reveal" class="text-center max-w-2xl mx-auto mb-16">
        <h2 class="text-light-300">Our Clients</h2>
        <p class="mt-4 text-dark-500">
          Trusted by leading companies across industries
        </p>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
        <div v-for="(partner, index) in partners" :key="partner.name" v-motion="fade_in" :custom="{ delay: index * 50 }"
          class="group p-6 bg-white rounded-xl hover:shadow-lg transition-all duration-300">
          <NuxtImg :src="partner.logo" :alt="partner.name"
            class="w-full h-12 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { fade_in, reveal } from '~/lib/motions';
import { partners } from '~/stores/about-us';


</script>