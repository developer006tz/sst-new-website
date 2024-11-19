<script setup lang="ts">
import { fade_in, reveal } from '~/lib/motions';
import { milestones } from '~/stores/about-us';
import { techBackground } from '~/stores/images';
</script>

<template>
  <section class="py-20 ">
    <div class="container">
      <div v-motion="reveal" class="text-center max-w-2xl mx-auto mb-16">
        <h2 class="text-light-300">Our Journey</h2>
        <p class="mt-4 text-dark-500">
          Key milestones that shaped our success
        </p>
      </div>

      <div class="relative">
        <!-- Timeline Line -->
        <div class="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20"></div>

        <!-- Timeline Items -->
        <div class="space-y-16">
          <div v-for="(milestone, index) in milestones" :key="milestone.year" v-motion="fade_in"
            :custom="{ delay: index * 100 }" class="relative">
            <!-- Timeline Dot -->
            <div class="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-primary rounded-full">
            </div>

            <!-- Content -->
            <div class="grid md:grid-cols-2 gap-8 items-center">
              <div :class="index % 2 === 0 ? 'md:text-right' : 'md:order-2'">
                <div class="bg-light-400 p-6 rounded-2xl shadow-lg">
                  <span class="text-primary font-bold text-lg">{{ milestone.year }}</span>
                  <h3 class="text-xl font-semibold mt-2">{{ milestone.title }}</h3>
                  <p class="text-dark-500 mt-2">{{ milestone.description }}</p>
                </div>
              </div>
              <div class="md:col-span-1" :class="index % 2 === 0 ? 'md:order-2' : ''">
                <!-- Placeholder for potential images -->
                 <!-- <NuxtImg :src="techBackground" alt="Milestone" class="w-full h-auto rounded-2xl shadow-lg" /> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>