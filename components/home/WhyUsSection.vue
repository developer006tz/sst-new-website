<template>
     <section class="py-20">
        <div class="container">
          <div class="grid md:grid-cols-2 gap-12 items-center">
            <div 
              v-motion="{
            initial: { x: 100, opacity: 0 },
            visible: { 
              x: 0,
              opacity: 1,
              transition: {
                duration: 700,
                ease: 'easeOut'
              }
            }
          }"
              class="space-y-6"
            >
              <h2 class="text-dark-800">Why Choose SocialSmartTech?</h2>
              <div class="space-y-4">
                <div v-for="(feature, index) in features" :key="index" class="flex gap-4">
                  <div class="w-12 h-12 shrink-0 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon :name="feature.icon" class="w-6 h-6 text-primary"/>
                  </div>
                  <div>
                    <h4 class="font-semibold mb-2">{{ feature.title }}</h4>
                    <p class="text-dark-600">{{ feature.description }}</p>
                  </div>
                </div>
              </div>
            </div>
            <div 
              v-motion="{
            initial: { scale: 0, opacity: 0 },
            visible: { 
              scale: 1,
              opacity: 1,
              transition: {
                type: 'spring',
                stiffness: 100,
                damping: 15
              }
            }
          }"
              class="relative"
            >
              <!-- i will Add an appropriate image later here -->
            </div>
          </div>
        </div>
      </section>
</template>

<script setup lang="ts">
import type { Feature } from '~/types';
  
  const features: Feature[] = [
    {
      icon: 'mdi:lightning-bolt',
      title: 'Fast Implementation',
      description: 'Quick deployment with minimal disruption to your operations.'
    },
    {
      icon: 'mdi:shield-check',
      title: 'Proven Expertise',
      description: 'Years of experience delivering successful solutions across industries.'
    },
    {
      icon: 'mdi:headset',
      title: 'Dedicated Support',
      description: 'Round-the-clock technical support and maintenance services.'
    }
  ]
</script>