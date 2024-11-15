<template>
        <section class="py-20 bg-light-300">
      <div class="container">
        <div 
          v-motion="reveal"
          class="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 class="text-dark-800">Our Values</h2>
          <p class="mt-4 text-dark-600">
            The principles that guide our work and relationships
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div 
            v-for="(value, index) in companyValues"
            :key="value.title"
            v-motion="card_enter"
            :custom="{ delay: index * 100 }"
            class="bg-white p-8 rounded-2xl shadow-lg"
          >
            <div class="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
              <Icon :name="value.icon" class="w-7 h-7 text-primary"/>
            </div>
            <h3 class="text-xl font-semibold mb-4">{{ value.title }}</h3>
            <p class="text-dark-600">{{ value.description }}</p>
          </div>
        </div>
      </div>
    </section>
</template>

<script setup lang="ts">
import { card_enter, reveal } from '~/lib/motions';
import { companyValues } from '~/stores/about-us';

</script>