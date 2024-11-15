<template>

     <UiServicesHeading />
     <UiServicesGrid />
     <UiServicesTechnologyStack />
    <CoreCalltoAction :action="actionData"/>

</template>

<script setup lang="ts">
const actionData = {
  title: 'Ready to Start Your Digital Journey?',
  description: 'Let\'s discuss how our services can help transform your business.',
  buttonLabel: 'Schedule a Consultation',
  style: 'bg-primary'
};
</script>