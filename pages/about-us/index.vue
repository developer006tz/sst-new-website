
<script setup lang="ts">
useHead({
  title: 'About Us',
  meta: [
    {
      name: 'description',
      content: 'Pioneering innovative software solutions to transform businesses since 2019',
    },
    {
      name: 'keywords',
      content: 'about us, socialsmarttech, software solutions, business transformation',
    },
    {
      property: 'og:title',
      content: 'About Us',
    },
    {
      property: 'og:description',
      content: 'Pioneering innovative software solutions to transform businesses since 2019',
    },
    {
      property: 'og:image',
      content: 'https://res.cloudinary.com/dcmwnrvzk/image/upload/v1732090786/social-smarttech-icon_y5dogm.png',
    },
    {
      property: 'og:url',
      content: 'https://socialsmarttech.com/about-us',
    },
  ],
});
import type { CallToAction } from '~/types';

const callToActionData: CallToAction = {
  title: 'Ready to Work Together??',
  description: 'Let\'s discuss how we can help you achieve your business goals',
  buttonLabel: 'Get in Touch',
  style: 'bg-gradient-to-r from-primary to-secondary'
};


</script>
<template>
    <CoreBgImage />
    <CorePageHeading 
      blackTitle="About"
      blueTitle="SocialSmartTech"
      description="Pioneering innovative software solutions to transform businesses since 2019"
    />
     <UiAboutOurStory />
     <UiAboutOurValues />
     <UiAboutStats />
     <UiAboutTimeline />
     <UiAboutTestimonials />
     <UiAboutOurPartner />
     <CoreCalltoAction :action="callToActionData" />

</template>
