<template>
    <section class="pb-20">
      <div class="container">
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            v-for="(service, index) in services" 
            :key="service.id"
            v-motion="card_enter"
            :custom="{ delay: index * 100 }"
            class="group p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div class="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
              <Icon 
                :name="service.icon" 
                class="w-8 h-8 text-primary"
              />
            </div>
            <h3 class="text-xl font-semibold mb-4">{{ service.title }}</h3>
            <p class="text-dark-600 mb-6">{{ service.description }}</p>
            <ul class="space-y-3">
              <li 
                v-for="feature in service.features" 
                :key="feature"
                class="flex items-center text-dark-600"
              >
                <Icon name="mdi:check-circle" class="w-5 h-5 text-primary mr-2" />
                {{ feature }}
              </li>
            </ul>
            <NuxtLink 
              :to="service.link"
              class="mt-8 inline-flex items-center text-primary hover:text-primary-600 transition-colors"
            >
              Learn more
              <Icon name="mdi:arrow-right" class="w-5 h-5 ml-1" />
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
</template>

<script setup lang="ts">
import { card_enter } from '~/lib/motions';
import { services } from '~/stores/service';
</script>