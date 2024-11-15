<!-- pages/services/[slug]/index.vue -->
<template>
    <main class="overflow-hidden">
      <!-- Hero Section -->
      <section class="relative py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div class="container">
          <div 
            v-motion="hero_text"
            class="max-w-3xl mx-auto text-center"
          >
            <div class="w-20 h-20 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
              <Icon :name="service?.icon ?? 'default-icon'" class="w-10 h-10 text-primary"/>
            </div>
            <h1 class="text-dark-800">{{ service?.title }}</h1>
            <p class="mt-6 text-lg text-dark-600">{{ service?.description }}</p>
          </div>
        </div>
  
        <!-- Decorative Elements -->
        <div class="absolute inset-0 overflow-hidden pointer-events-none">
          <div class="absolute -top-1/2 -right-1/2 w-[1000px] h-[1000px] bg-primary/5 rounded-full blur-3xl"></div>
          <div class="absolute -bottom-1/2 -left-1/2 w-[800px] h-[800px] bg-secondary/5 rounded-full blur-3xl"></div>
        </div>
      </section>
  
      <!-- Benefits Section -->
      <section class="py-20">
        <div class="container">
          <div 
            v-motion="reveal"
            class="text-center max-w-2xl mx-auto mb-16"
          >
            <h2 class="text-dark-800">Key Benefits</h2>
            <p class="mt-4 text-dark-600">Why choose our {{ service?.title }} service</p>
          </div>
  
          <div class="grid md:grid-cols-3 gap-8">
            <div 
              v-for="(benefit, index) in service?.benefits"
              :key="benefit.title"
              v-motion="card_enter"
              :custom="{ delay: index * 100 }"
              class="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all"
            >
              <div class="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Icon :name="benefit.icon" class="w-7 h-7 text-primary"/>
              </div>
              <h3 class="text-xl font-semibold mb-4">{{ benefit.title }}</h3>
              <p class="text-dark-600">{{ benefit.description }}</p>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Process Section -->
      <section class="py-20 bg-light-300">
        <div class="container">
          <div 
            v-motion="reveal"
            class="text-center max-w-2xl mx-auto mb-16"
          >
            <h2 class="text-dark-800">Our Process</h2>
            <p class="mt-4 text-dark-600">How we deliver exceptional results</p>
          </div>
  
          <div class="relative">
            <!-- Process Line -->
            <div class="absolute top-1/2 left-0 w-full h-1 bg-primary/20 -translate-y-1/2 hidden md:block"></div>
  
            <div class="grid md:grid-cols-4 gap-8">
              <div 
                v-for="(step, index) in service?.process"
                :key="step.title"
                v-motion="fade_in"
                :custom="{ delay: index * 200 }"
                class="relative"
              >
                <!-- Step Number -->
                <div class="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-6 relative z-10">
                  {{ step.step }}
                </div>
                
                <div class="bg-white p-6 rounded-2xl shadow-lg text-center">
                  <h3 class="text-lg font-semibold mb-4">{{ step.title }}</h3>
                  <p class="text-dark-600">{{ step.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Features Section -->
      <section class="py-20">
        <div class="container">
          <div class="grid lg:grid-cols-2 gap-12 items-center">
            <div 
              v-motion="slide_right"
              class="space-y-8"
            >
              <h2 class="text-dark-800">Advanced Features</h2>
              <div 
                v-for="feature in service?.features"
                :key="feature.title"
                class="flex gap-6"
              >
                <div class="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon :name="feature.icon" class="w-6 h-6 text-primary"/>
                </div>
                <div>
                  <h3 class="text-lg font-semibold mb-2">{{ feature.title }}</h3>
                  <p class="text-dark-600">{{ feature.description }}</p>
                </div>
              </div>
            </div>
            
            <div 
              v-motion="zoom_in"
              class="relative"
            >
              <div class="absolute inset-0 bg-gradient-to-tr from-primary-100 to-secondary-100 rounded-3xl blur-3xl opacity-30"></div>
              <NuxtImg
                :src="service?.headerImage"
                :alt="service?.title"
                class="relative rounded-3xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
  
      <!-- Technologies Section -->
      <section class="py-20 bg-light-300">
        <div class="container">
          <div 
            v-motion="reveal"
            class="text-center max-w-2xl mx-auto mb-16"
          >
            <h2 class="text-dark-800">Technologies We Use</h2>
            <p class="mt-4 text-dark-600">Best-in-class technologies for optimal results</p>
          </div>
  
          <div class="grid md:grid-cols-4 gap-8">
            <div 
              v-for="(tech, index) in service?.technologies"
              :key="tech.name"
              v-motion="card_enter"
              :custom="{ delay: index * 100 }"
              class="bg-white p-6 rounded-2xl shadow-lg text-center group hover:shadow-xl transition-all"
            >
              <Icon 
                :name="tech.icon" 
                class="w-12 h-12 mx-auto mb-4 text-primary group-hover:scale-110 transition-transform"
              />
              <h3 class="font-semibold mb-2">{{ tech.name }}</h3>
              <p class="text-sm text-dark-600">{{ tech.description }}</p>
            </div>
          </div>
        </div>
      </section>
  
      <!-- FAQ Section -->
      <section class="py-20">
        <div class="container">
          <div 
            v-motion="reveal"
            class="text-center max-w-2xl mx-auto mb-16"
          >
            <h2 class="text-dark-800">Frequently Asked Questions</h2>
            <p class="mt-4 text-dark-600">Common questions about our {{ service?.title }} service</p>
          </div>
  
          <div class="max-w-3xl mx-auto">
            <div 
              v-for="(faq, index) in service?.faqs"
              :key="index"
              v-motion="fade_in"
              :custom="{ delay: index * 100 }"
              class="mb-4"
            >
                <Disclosure v-slot="{ open }">
                  <DisclosureButton class="flex w-full justify-between rounded-lg bg-white px-6 py-4 text-left font-medium hover:bg-light-100 focus:outline-none focus-visible:ring focus-visible:ring-primary/50">
                    <span>{{ faq.question }}</span>
                    <Icon
                      :name="open ? 'mdi:chevron-up' : 'mdi:chevron-down'"
                      class="w-5 h-5 text-primary"
                    />
                  </DisclosureButton>
                  <DisclosurePanel class="px-6 py-4 text-dark-600">
                    {{ faq.answer }}
                  </DisclosurePanel>
                </Disclosure>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Related Services -->
      <section class="py-20 bg-light-300">
        <div class="container">
          <div 
            v-motion="reveal"
            class="text-center max-w-2xl mx-auto mb-16"
          >
            <h2 class="text-dark-800">Related Services</h2>
            <p class="mt-4 text-dark-600">Explore our other services</p>
          </div>
  
          <div class="grid md:grid-cols-3 gap-8">
            <NuxtLink
              v-for="relatedSlug in service?.relatedServices"
              :key="relatedSlug"
              :to="`/services/${relatedSlug}`"
              v-motion="card_enter"
              class="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all"
            >
              <div class="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Icon :name="getServiceIcon(relatedSlug)" class="w-7 h-7 text-primary"/>
              </div>
              <h3 class="text-xl font-semibold mb-4">{{ getServiceTitle(relatedSlug) }}</h3>
              <p class="text-dark-600">{{ getServiceDescription(relatedSlug) }}</p>
            </NuxtLink>
          </div>
        </div>
      </section>
  
      <!-- CTA Section -->
      <section class="py-20">
        <div class="container">
          <div 
            v-motion="fade_in"
            class="bg-gradient-to-r from-primary to-secondary rounded-3xl p-12 text-center text-white"
          >
            <h2 class="text-3xl md:text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p class="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              Let's discuss how our {{ service?.title }} service can benefit your business
            </p>
            <NuxtLink 
              to="/contact-us"
              class="inline-block bg-white text-primary px-8 py-3 rounded-lg hover:bg-light-100 transition-colors"
            >
              Schedule a Consultation
            </NuxtLink>
          </div>
        </div>
      </section>
    </main>
  </template>
  
  <script setup lang="ts">
  import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { card_enter, fade_in, hero_text, reveal, slide_right, zoom_in } from '~/lib/motions';
  import type { ServiceDetail } from '~/types/service';
  
  const route = useRoute()
  const slug = route.params.slug as string

  const { getService } = useServices()
  const service = ref<ServiceDetail | null>(getService(slug))
  
  // Helper functions for related services
  const getServiceIcon = (slug: string) => {
    // Implementation needed
    return 'mdi:code-braces'
  }
  
  const getServiceTitle = (slug: string) => {
    // Implementation needed
    return 'Service Title'
  }
  
  const getServiceDescription = (slug: string) => {
    // Implementation needed
    return 'Service description...'
  }
  </script>