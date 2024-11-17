<script setup lang="ts">
import { bgImage } from '~/stores/images';
</script>

<template>
 <NuxtImg :src="bgImage" alt="Hero Section BG Lines" class="absolute top-0 w-full h-96 object-cover" />
</template>