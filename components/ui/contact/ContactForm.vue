<script setup lang="ts">
import { slide_right } from '~/lib/motions';
import { ref } from 'vue';
import { form, services } from '~/stores/contact';
const isSubmitting = ref(false);

const handleSubmit = async () => {
  try {
    isSubmitting.value = true;
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Form submitted:', form.value);
    // Reset form
    form.value = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    };
    alert('Message sent successfully!');
  } catch (error) {
    console.error('Error submitting form:', error);
    alert('Error sending message. Please try again.');
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<template>
  <div v-motion="slide_right" class="relative">
    <!-- Decorative background elements -->
    <div class="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl"></div>
    <div class="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
    <div class="absolute -bottom-10 -left-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl"></div>

    <div class="relative bg-dark-950 backdrop-blur-xl p-8 md:p-12 rounded-3xl shadow-xl border border-white/20">
      <div class="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div class="bg-primary text-white px-8 py-3 rounded-full shadow-lg">
          <h2 class="text-xl font-semibold">Send us a Message</h2>
        </div>
      </div>

      <form @submit.prevent="handleSubmit" class="space-y-8 mt-6">
        <div class="grid md:grid-cols-2 gap-8">
          <div class="space-y-2 group">
            <label for="firstName"
              class="text-sm font-medium text-dark-500 group-focus-within:text-primary transition-colors">
              Name
            </label>
            <div class="relative">
              <input v-model="form.firstName" type="text" id="firstName"
                class="w-full px-6 py-3 rounded-xl border-2 border-gray-900 focus:border-primary focus:ring-4 focus:ring-primary/20 outline-none transition-all bg-dark-950"
                required />
              <Icon name="mdi:account"
                class="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-primary transition-colors" />
            </div>
          </div>

          <div class="space-y-2 group">
            <label for="lastName"
              class="text-sm font-medium text-dark-500 group-focus-within:text-primary transition-colors">
              Company
            </label>
            <div class="relative">
              <input v-model="form.lastName" type="text" id="lastName" placeholder="Optional"
                class="w-full px-6 py-3 text-light placeholder:text-dark-900 rounded-xl border-2 border-gray-900 focus:border-primary focus:ring-4 focus:ring-primary/20 outline-none transition-all bg-dark-950"
                required />
              <Icon name="mdi:account"
                class="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-primary transition-colors" />
            </div>
          </div>
        </div>

        <div class="space-y-2 group">
          <label for="email"
            class="text-sm font-medium text-dark-500 group-focus-within:text-primary transition-colors">
            Email Address
          </label>
          <div class="relative">
            <input v-model="form.email" type="email" id="email"
              class="w-full px-6 py-3 rounded-xl border-2 border-gray-900 focus:border-primary focus:ring-4 focus:ring-primary/20 outline-none transition-all bg-dark-950"
              required />
            <Icon name="mdi:email"
              class="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-primary transition-colors" />
          </div>
        </div>

        <div class="space-y-2 group">
          <label for="phone"
            class="text-sm font-medium text-dark-500 group-focus-within:text-primary transition-colors">
            Phone Number
          </label>
          <div class="relative">
            <input v-model="form.phone" type="tel" id="phone"
              class="w-full px-6 py-3 rounded-xl border-2 border-gray-900 focus:border-primary focus:ring-4 focus:ring-primary/20 outline-none transition-all bg-dark-950" />
            <Icon name="mdi:phone"
              class="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-primary transition-colors" />
          </div>
        </div>

        <div class="space-y-2 group">
          <label for="service"
            class="text-sm font-medium text-dark-500 group-focus-within:text-primary transition-colors">
            Service Interest
          </label>
          <div class="relative">
            <select v-model="form.service" id="service"
              class="w-full px-6 py-3 rounded-xl border-2 border-gray-900 focus:border-primary focus:ring-4 focus:ring-primary/20 outline-none transition-all bg-dark-950 appearance-none">
              <option value="">Select a service</option>
              <option v-for="service in services" :key="service" :value="service">
                {{ service }}
              </option>
            </select>
            <Icon name="mdi:chevron-down"
              class="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none group-focus-within:text-primary transition-colors" />
          </div>
        </div>

        <div class="space-y-2 group">
          <label for="message"
            class="text-sm font-medium text-dark-500 group-focus-within:text-primary transition-colors">
            Your Message
          </label>
          <div class="relative">
            <textarea v-model="form.message" id="message" rows="4"
              class="w-full px-6 py-3 rounded-xl border-2 border-gray-900 focus:border-primary focus:ring-4 focus:ring-primary/20 outline-none transition-all bg-dark-950 resize-none"
              required></textarea>
            <Icon name="mdi:message-text"
              class="absolute right-4 top-4 w-5 h-5 text-gray-400 group-focus-within:text-primary transition-colors" />
          </div>
        </div>

        <button type="submit"
          class="w-full bg-primary text-white py-4 px-8 rounded-full hover:bg-primary-600 active:bg-primary-700 transition-all transform hover:-translate-y-1 focus:ring-4 focus:ring-primary/20 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
          :disabled="isSubmitting">
          <span class="relative flex items-center justify-center">
            <Icon v-if="isSubmitting" name="mdi:loading" class="absolute w-5 h-5 animate-spin" />
            <span :class="{ 'opacity-0': isSubmitting }">
              {{ isSubmitting ? 'Sending...' : 'Send Message' }}
            </span>
          </span>
        </button>
      </form>
    </div>
  </div>
</template>