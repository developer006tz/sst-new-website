<template>
  <CoreBgImage />
    <CorePageHeading 
      blackTitle="About"
      blueTitle="SocialSmartTech"
      description="Pioneering innovative software solutions to transform businesses since 2020"
    />
     <UiAboutOurStory />
     <UiAboutOurValues />
     <!-- <UiAboutOurTeam /> -->
     <UiAboutStats />
     <UiAboutTimeline />
     <UiAboutTestimonials />
     <UiAboutOurPartner />
     <CoreCalltoAction :action="callToActionData" />

</template>

<script setup lang="ts">
import type { CallToAction } from '~/types';

const callToActionData: CallToAction = {
  title: 'Ready to Work Together??',
  description: 'Let\'s discuss how we can help you achieve your business goals',
  buttonLabel: 'Get in Touch',
  style: 'bg-gradient-to-r from-primary to-secondary'
};


</script>