<script setup lang="ts">
import { card_enter, reveal } from '~/lib/motions';
import { teamMembers } from '~/stores/about-us';
</script>

<template>
    <section class="py-20">
      <div class="container">
        <div 
          v-motion="reveal"
          class="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 class="text-dark-800">Our Team</h2>
          <p class="mt-4 text-dark-600">
            Meet the experts behind our success
          </p>
        </div>

        <div class="grid md:grid-cols-4 gap-8">
          <div 
            v-for="(member, index) in teamMembers"
            :key="member.name"
            v-motion="card_enter"
            :custom="{ delay: index * 100 }"
            class="group"
          >
            <div class="relative overflow-hidden rounded-2xl mb-4">
              <div class="aspect-w-1 aspect-h-1 bg-light-300">
                <NuxtImg
                  :src="member.image"
                  :alt="member.name"
                  class="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            </div>
            <h4 class="text-lg font-semibold">{{ member.name }}</h4>
            <p class="text-primary">{{ member.position }}</p>
          </div>
        </div>
      </div>
    </section>

</template>