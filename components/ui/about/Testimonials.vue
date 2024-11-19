<template>
  <section class="py-20 relative">
    <div
        class="absolute max-w-[20%] mx-auto max-h-[60%]  inset-0 bg-gradient-to-tr from-primary to-secondary rounded-full blur-3xl opacity-40">
    </div>
    <div class="container">
      <div v-motion="reveal" class="text-center max-w-2xl mx-auto mb-16">
        <h2 class="text-light-300">Client Testimonials</h2>
        <p class="mt-4 text-dark-500">
          What our clients say about working with us
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-8">
        <div v-for="(testimonial, index) in testimonials" :key="index" v-motion="card_enter"
          :custom="{ delay: index * 100 }" class="glass-effect p-8 rounded-2xl shadow-lg">
          <div class="flex items-center mb-6">
            <Icon name="mdi:format-quote-open" class="w-8 h-8 text-primary" />
          </div>
          <p class="text-dark-500 mb-6">{{ testimonial.content }}</p>
          <div class="flex items-center">
            <!-- <div class="w-12 h-12 rounded-full  overflow-hidden">
              <NuxtImg :src="testimonial.avatar" :alt="testimonial.name" class="w-full h-full object-cover" />
            </div> -->
            <div class="ml-4">
              <h4 class="font-semibold text-primary/70">{{ testimonial.name }}</h4>
              <p class="text-sm text-dark-500">{{ testimonial.position +', '+ testimonial.company }}</p>
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