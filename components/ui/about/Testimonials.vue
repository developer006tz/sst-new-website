<template>
    <section class="py-20">
    <div class="container">
      <div 
        v-motion="reveal"
        class="text-center max-w-2xl mx-auto mb-16"
      >
        <h2 class="text-dark-800">Client Testimonials</h2>
        <p class="mt-4 text-dark-600">
          What our clients say about working with us
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-8">
        <div 
          v-for="(testimonial, index) in testimonials"
          :key="index"
          v-motion="card_enter"
          :custom="{ delay: index * 100 }"
          class="bg-white p-8 rounded-2xl shadow-lg"
        >
          <div class="flex items-center mb-6">
            <Icon name="mdi:format-quote-open" class="w-8 h-8 text-primary/30"/>
          </div>
          <p class="text-dark-600 mb-6">{{ testimonial.content }}</p>
          <div class="flex items-center">
            <div class="w-12 h-12 rounded-full bg-light-300 overflow-hidden">
              <NuxtImg
                :src="testimonial.avatar"
                :alt="testimonial.name"
                class="w-full h-full object-cover"
              />
            </div>
            <div class="ml-4">
              <h4 class="font-semibold">{{ testimonial.name }}</h4>
              <p class="text-sm text-dark-600">{{ testimonial.position }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { card_enter, reveal } from '~/lib/motions';
import { testimonials } from '~/stores/about-us';


</script>