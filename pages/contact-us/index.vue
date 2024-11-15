<template>
  <main class="overflow-hidden">
    <!-- Hero Section -->
    <section class="relative py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div class="container">
        <div 
          v-motion="hero_text"
          class="max-w-3xl mx-auto text-center"
        >
          <h1 class="text-dark-800">Get in <span class="text-primary">Touch</span></h1>
          <p class="mt-6 text-lg text-dark-600">
            We'd love to hear from you. Let's discuss how we can help your business grow
          </p>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="py-20">
      <div class="container">
        <div class="grid lg:grid-cols-2 gap-12">
          <!-- Contact Form -->
          <div 
            v-motion="slide_right"
            class="bg-white p-8 rounded-2xl shadow-lg"
          >
            <h2 class="text-2xl font-semibold mb-6">Send us a Message</h2>
            <form @submit.prevent="handleSubmit" class="space-y-6">
              <div class="grid md:grid-cols-2 gap-6">
                <div class="space-y-2">
                  <label for="firstName" class="text-sm font-medium text-dark-600">First Name</label>
                  <input 
                    v-model="form.firstName"
                    type="text" 
                    id="firstName"
                    class="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    required
                  />
                </div>
                <div class="space-y-2">
                  <label for="lastName" class="text-sm font-medium text-dark-600">Last Name</label>
                  <input 
                    v-model="form.lastName"
                    type="text" 
                    id="lastName"
                    class="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    required
                  />
                </div>
              </div>

              <div class="space-y-2">
                <label for="email" class="text-sm font-medium text-dark-600">Email</label>
                <input 
                  v-model="form.email"
                  type="email" 
                  id="email"
                  class="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  required
                />
              </div>

              <div class="space-y-2">
                <label for="phone" class="text-sm font-medium text-dark-600">Phone Number</label>
                <input 
                  v-model="form.phone"
                  type="tel" 
                  id="phone"
                  class="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                />
              </div>

              <div class="space-y-2">
                <label for="service" class="text-sm font-medium text-dark-600">Service Interest</label>
                <select 
                  v-model="form.service"
                  id="service"
                  class="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                >
                  <option value="">Select a service</option>
                  <option v-for="service in services" :key="service" :value="service">
                    {{ service }}
                  </option>
                </select>
              </div>

              <div class="space-y-2">
                <label for="message" class="text-sm font-medium text-dark-600">Message</label>
                <textarea 
                  v-model="form.message"
                  id="message"
                  rows="4"
                  class="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  required
                ></textarea>
              </div>

              <button 
                type="submit"
                class="w-full bg-primary text-white py-3 px-6 rounded-lg hover:bg-primary-600 transition-colors"
                :disabled="isSubmitting"
              >
                {{ isSubmitting ? 'Sending...' : 'Send Message' }}
              </button>
            </form>
          </div>

          <!-- Contact Information -->
          <div 
            v-motion="slide_left"
            class="space-y-8"
          >
            <div class="bg-white p-8 rounded-2xl shadow-lg">
              <h2 class="text-2xl font-semibold mb-6">Contact Information</h2>
              <div class="space-y-6">
                <div class="flex items-start space-x-4">
                  <div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="mdi:map-marker" class="w-6 h-6 text-primary"/>
                  </div>
                  <div>
                    <h3 class="font-semibold text-lg">Visit Us</h3>
                    <p class="text-dark-600">POSTA MPYA, LIFE HOUSE 3rd Floor,<br/> Dar es Salaam, Tanzania</p>
                  </div>
                </div>

                <div class="flex items-start space-x-4">
                  <div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="mdi:phone" class="w-6 h-6 text-primary"/>
                  </div>
                  <div>
                    <h3 class="font-semibold text-lg">Call Us</h3>
                    <p class="text-dark-600">+255 683 641 567</p>
                  </div>
                </div>

                <div class="flex items-start space-x-4">
                  <div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="mdi:email" class="w-6 h-6 text-primary"/>
                  </div>
                  <div>
                    <h3 class="font-semibold text-lg">Email Us</h3>
                    <p class="text-dark-600">developer@socialsmarttech.com</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Business Hours -->
            <div class="bg-white p-8 rounded-2xl shadow-lg">
              <h2 class="text-2xl font-semibold mb-6">Business Hours</h2>
              <div class="space-y-4">
                <div class="flex justify-between">
                  <span class="text-dark-600">Monday - Friday</span>
                  <span class="font-medium">8:00 AM - 6:00 PM</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-dark-600">Saturday</span>
                  <span class="font-medium">9:00 AM - 1:00 PM</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-dark-600">Sunday</span>
                  <span class="font-medium">Closed</span>
                </div>
              </div>
            </div>

            <!-- Social Media Links -->
            <div class="bg-white p-8 rounded-2xl shadow-lg">
              <h2 class="text-2xl font-semibold mb-6">Connect With Us</h2>
              <div class="flex space-x-4">
                <a 
                  v-for="social in socials"
                  :key="social.name"
                  :href="social.link"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors"
                >
                  <Icon :name="social.icon" class="w-6 h-6 text-primary"/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Map Section -->
    <section class="py-20 bg-light-300">
      <div class="container">
        <div 
          v-motion="fade_in"
          class="rounded-2xl overflow-hidden shadow-lg h-[400px]"
        >
          <!-- Replace with your actual map implementation -->
          <div class="w-full h-full bg-gray-200 flex items-center justify-center">
            <p class="text-dark-600">Map will be displayed here</p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { fade_in, hero_text, slide_left, slide_right } from '~/lib/motions';

interface ContactForm {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

interface Social {
  name: string;
  icon: string;
  link: string;
}

const services = [
  'Mobile App Development',
  'Web Application Development',
  'Website Development',
  'System Development',
  'Software Consultation',
  'Database Design',
  'Software Architecture',
  'Logistics & Freight Software'
];

const socials: Social[] = [
  {
    name: 'LinkedIn',
    icon: 'mdi:linkedin',
    link: '#'
  },
  {
    name: 'Twitter',
    icon: 'mdi:twitter',
    link: '#'
  },
  {
    name: 'Instagram',
    icon: 'mdi:instagram',
    link: '#'
  },
  {
    name: 'Facebook',
    icon: 'mdi:facebook',
    link: '#'
  }
];

const form = ref<ContactForm>({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  service: '',
  message: ''
});

const isSubmitting = ref(false);

const handleSubmit = async () => {
  try {
    isSubmitting.value = true;
    // Add your form submission logic here
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulated API call
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