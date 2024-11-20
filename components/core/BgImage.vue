<script setup lang="ts">
import { bgImage } from '~/stores/images';
</script>

<template>
  <NuxtImg 
    provider="cloudinary"
    :src="bgImage"
    alt="Hero Section BG Lines"
    sizes="sm:768px md:1024px lg:1425px xl:1920px 320px"
    width="1920"
    height="490"
    placeholder
    class="absolute top-0 w-full h-96 object-cover"
  />
</template>