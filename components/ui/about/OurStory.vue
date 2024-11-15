<script setup lang="ts">
import { slide_right, zoom_in } from '~/lib/motions';
import { logoMain } from '~/stores/images';
</script>

<template>
    <section class="py-2">
      <div class="container">
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div 
            v-motion="slide_right"
            class="space-y-6"
          >
            <h2 class="text-dark-800">Our Story</h2>
            <p class="text-dark-600">
              Founded in 2019, SocialSmartTech emerged from a vision to bridge the gap between complex business challenges and innovative technology solutions. Our journey began with a focus on logistics software and has since expanded to encompass a wide range of digital transformation services.
            </p>
            <p class="text-dark-600">
              Today, we're proud to serve businesses across East Africa, helping them leverage technology to achieve their goals and stay ahead in an increasingly digital world.
            </p>
          </div>
          <div 
            v-motion="zoom_in"
            class="relative"
          >
            <NuxtImg
              :src="logoMain"
              alt="SocialSmartTech"
              class="relative w-full h-auto "
            />
          </div>
        </div>
      </div>
    </section>
</template>