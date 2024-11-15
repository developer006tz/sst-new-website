<template>
    <section class="py-20 bg-light-300">
        <div class="container">
          <div class="text-center max-w-2xl mx-auto mb-16">
            <h2 
              v-motion="reveal"
              class="text-dark-800"
            >
              Our Services
            </h2>
            <p class="text-dark-600 mt-4">
              Comprehensive solutions to drive your business forward
            </p>
          </div>
  
          <div class="grid md:grid-cols-3 gap-8">
            <div 
              v-for="(service, index) in services" 
              :key="index"
              v-motion="card_enter"
              :custom="{ delay: index * 100 }"
              class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all"
            >
              <div class="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <Icon :name="service.icon" class="w-7 h-7 text-primary"/>
              </div>
              <h3 class="text-xl font-semibold mb-4">{{ service.title }}</h3>
              <p class="text-dark-600">{{ service.description }}</p>
            </div>
          </div>
        </div>
      </section>
</template>

<script setup lang="ts">
import { card_enter, reveal } from '~/lib/motions';
import type { Service } from '~/types';


const services: Service[] = [
    {
      icon: 'ic:baseline-computer',
      title: 'Custom Software Development',
      description: 'Tailored solutions designed to meet your specific business requirements and challenges.'
    },
    {
      icon: 'mdi:truck-delivery',
      title: 'Logistics Management',
      description: 'Smart solutions to optimize your supply chain and improve operational efficiency.'
    },
    {
      icon: 'mdi:web',
      title: 'Web Development',
      description: 'Modern, responsive websites and web applications built with cutting-edge technologies.'
    }
  ]
</script>