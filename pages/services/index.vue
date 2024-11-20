<script setup lang="ts">
import type { CallToAction } from '~/types';

useHead({
  title: 'Services',
  meta: [
    {
      name: 'description',
      content: 'We offer a wide range of services to help transform your business digitally',
    },
    {
      name: 'keywords',
      content: 'services, socialsmarttech, digital transformation, software solutions',
    },
    {
      property: 'og:title',
      content: 'Services',
    },
    {
      property: 'og:description',
      content: 'We offer a wide range of services to help transform your business digitally',
    },
    {
      property: 'og:image',
      content: 'https://res.cloudinary.com/dcmwnrvzk/image/upload/v1732090786/social-smarttech-icon_y5dogm.png',
    },
    {
      property: 'og:url',
      content: 'https://socialsmarttech.com/services',
    },
  ],
});
  const actionData: CallToAction = {
    title: 'Ready to Start Your Digital Journey?',
    description: 'Let\'s discuss how our services can help transform your business.',
    buttonLabel: 'Schedule a Consultation',
    style: 'bg-primary'
  };

</script>
<template>
     <CoreBgImage />
     <UiServicesHeading />
     <UiServicesGrid />
     <UiServicesTechnologyStack />
    <CoreCalltoAction :action="actionData"/>

</template>

