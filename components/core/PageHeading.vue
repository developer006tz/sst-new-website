<script setup lang="ts">
import { hero_text } from '~/lib/motions';
import { defineProps } from 'vue';

interface HeadingProps {
  blackTitle: string;
  blueTitle: string;
  description: string;
}

const props = defineProps<HeadingProps>();

</script>

<template>
  <section class="relative py-12 md:py-12 ">
    <div class="container">
      <div v-motion="hero_text" class="max-w-3xl mx-auto text-center">
        <h1 class="text-light-300">{{ props.blackTitle }} <span class="text-primary">{{ props.blueTitle }}</span></h1>
        <p class="mt-6 text-lg text-dark-600">
          {{ props.description }}
        </p>
      </div>
    </div>
  </section>
</template>