<template>
   <CorePageHeading 
      blackTitle="Get in"
      blueTitle="Touch"
      description="We'd love to hear from you. Let's discuss how we can help your business grow"
    />

    <section class="py-20">
      <div class="container">
        <div class="grid lg:grid-cols-2 gap-12">
         <UiContactForm />
          <div 
            v-motion="slide_left"
            class="space-y-8"
          >
            <UiContactInformation />
          </div>
        </div>
      </div>
    </section>

    <UiContactMapSection />
</template>

<script setup lang="ts">
import { fade_in, hero_text, slide_left, slide_right } from '~/lib/motions';





</script>