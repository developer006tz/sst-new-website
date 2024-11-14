<template>
    <section
      v-motion
      :initial="initial"
      :enter="enter"
      :variants="variants"
      :custom="custom"
      class="animated-section"
    >
      <slot></slot>
    </section>
  </template>
  
  <script setup lang="ts">
  interface Props {
    animation?: 'fade-in' | 'slide-left' | 'slide-right' | 'zoom-in' | 'cards-enter' | 'bounce-in' | 'reveal' | 'hero-text' | 'stagger-fade';
    delay?: number;
    duration?: number;
    custom?: Record<string, any>;
  }
  
  const props = withDefaults(defineProps<Props>(), {
    animation: 'fade-in',
    delay: 0,
    duration: 800,
    custom: () => ({})
  })
  
  const initial = computed(() => ({
    opacity: 0,
    y: 40,
    ...props.custom?.initial
  }))
  
  const enter = computed(() => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: props.duration,
      delay: props.delay,
      ease: 'easeOut'
    },
    ...props.custom?.enter
  }))
  
  const variants = computed(() => ({
    ...props.custom?.variants
  }))
  </script>
  
  <style scoped>
  .animated-section {
    width: 100%;
  }
  </style>