<template>
    <div v-motion="slide_left" class="relative">
      <!-- Decorative elements -->
      <div class="absolute inset-0 bg-gradient-to-tr from-primary/5 to-secondary/5 rounded-3xl"></div>
      <div class="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
      <div class="absolute bottom-0 left-0 w-32 h-32 bg-secondary/10 rounded-full blur-2xl"></div>
   
      <div class="relative bg-white/80 backdrop-blur-xl p-8 md:p-12 rounded-3xl shadow-xl border border-white/20">
        <h2 class="text-2xl font-semibold mb-8 text-dark-800">Stay Connected</h2>
   
        <div class="space-y-8">
          <!-- Address Card -->
          <div class="group bg-white/50 p-6 rounded-2xl hover:shadow-lg transition-all">
            <div class="flex items-start gap-6">
              <div class="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <Icon name="mdi:map-marker" class="w-7 h-7 text-primary" />
              </div>
              <div>
                <h3 class="font-semibold text-lg text-dark-800 group-hover:text-primary transition-colors">Our Location</h3>
                <p class="text-dark-600 mt-2">POSTA MPYA, LIFE HOUSE 3rd Floor,<br />Dar es Salaam, Tanzania</p>
                <a href="https://maps.google.com" target="_blank" class="inline-flex items-center text-primary mt-3 hover:text-primary-600">
                  <span>Get Directions</span>
                  <Icon name="mdi:arrow-right" class="w-4 h-4 ml-1" />
                </a>
              </div>
            </div>
          </div>
   
          <!-- Phone Card -->
          <div class="group bg-white/50 p-6 rounded-2xl hover:shadow-lg transition-all">
            <div class="flex items-start gap-6">
              <div class="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <Icon name="mdi:phone" class="w-7 h-7 text-primary" />
              </div>
              <div>
                <h3 class="font-semibold text-lg text-dark-800 group-hover:text-primary transition-colors">Phone</h3>
                <p class="text-dark-600 mt-2">+255 683 641 567</p>
                <a href="tel:+255683641567" class="inline-flex items-center text-primary mt-3 hover:text-primary-600">
                  <span>Call Now</span>
                  <Icon name="mdi:arrow-right" class="w-4 h-4 ml-1" />
                </a>
              </div>
            </div>
          </div>
   
          <!-- Email Card -->
          <div class="group bg-white/50 p-6 rounded-2xl hover:shadow-lg transition-all">
            <div class="flex items-start gap-6">
              <div class="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <Icon name="mdi:email" class="w-7 h-7 text-primary" />
              </div>
              <div>
                <h3 class="font-semibold text-lg text-dark-800 group-hover:text-primary transition-colors">Email</h3>
                <p class="text-dark-600 mt-2">developer@socialsmarttech.com</p>
                <a href="mailto:developer@socialsmarttech.com" class="inline-flex items-center text-primary mt-3 hover:text-primary-600">
                  <span>Send Email</span>
                  <Icon name="mdi:arrow-right" class="w-4 h-4 ml-1" />
                </a>
              </div>
            </div>
          </div>
   
          <!-- Social Media Links -->
          <div class="pt-4 border-t border-gray-100">
            <div class="flex justify-center gap-4">
                <a v-for="social in socials" :key="social.name" :href="social.link" target="_blank"
                rel="noopener noreferrer"
                class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors">
                <Icon :name="social.icon" class="w-6 h-6 text-primary" />
            </a>
            </div>
          </div>
        </div>
      </div>
    </div>
   </template>
   
   <script setup lang="ts">
   import { slide_left } from '~/lib/motions';
   import { socials } from '~/stores/contact';
   </script>