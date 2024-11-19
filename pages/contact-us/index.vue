<template>
   <CoreBgImage />
   <CorePageHeading 
      blackTitle="Get in"
      blueTitle="Touch"
      description="We'd love to hear from you. Let's discuss how we can help your business grow"
    />

    <section class="py-20">
      <div class="container">
        <div class="grid lg:grid-cols-2 gap-12">
         <UiContactForm />
         <UiContactInformation />
        </div>
      </div>
    </section>

    <!-- <UiContactMapSection /> -->
    <CoreCalltoAction :action="callToActionData" />
</template>

<script setup lang="ts">
import type { CallToAction } from '~/types';

const callToActionData: CallToAction = {
  title: 'Ready to Work Together??',
  description: 'Let\'s discuss how we can help you achieve your business goals',
  buttonLabel: 'Don\'t hesitate to reach out',
  style: 'bg-gradient-to-t from-dark-950 to-primary-500'
};

</script>