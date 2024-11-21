<template>
    <TransitionRoot appear :show="modelValue" as="template">
      <Dialog as="div" @close="$emit('update:modelValue', false)" class="relative z-50">
        <TransitionChild
          as="template"
          enter="duration-300 ease-out"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="duration-200 ease-in"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 bg-black/50 backdrop-blur-sm" />
        </TransitionChild>
  
        <div class="fixed inset-0 overflow-y-auto">
          <div class="flex min-h-full items-center justify-center p-4">
            <TransitionChild
              as="template"
              enter="duration-300 ease-out"
              enter-from="opacity-0 scale-95"
              enter-to="opacity-100 scale-100"
              leave="duration-200 ease-in"
              leave-from="opacity-100 scale-100"
              leave-to="opacity-0 scale-95"
            >
              <DialogPanel class="w-full max-w-3xl bg-dark-950 rounded-2xl overflow-hidden">
                <div v-if="project" class="relative pb-20">
                  <!-- Project Image -->
                  <div class="relative aspect-[4/3] p-2">
                    <NuxtImg preload :src="project.image" :alt="project.title" class="w-full h-full object-cover" />
                  </div>
  
                  <!-- Content -->
                  <div class="px-8">
                    <div class="flex">
                        <h3 class="text-2xl text-primary font-semibold mb-4">{{ project.title }}</h3>
                    <a :href="project.link" target="_blank" class="text-sm text-dark-600 font-normal">
                            <Icon name="mdi:link" class="w-8 h-8 inline-block ml-2" />
                        </a>
                    </div>
                    <p class="text-dark-600 mb-6">{{ project.description }}</p>
  
                    <!-- Project Details -->
                    <div class="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 class="font-semibold text-primary mb-2">Technologies Used</h4>
                        <div class="flex flex-wrap gap-2">
                          <span
                            v-for="tech in project.technologies"
                            :key="tech"
                            class="text-sm px-3 py-1 rounded-full bg-primary/10 text-primary"
                          >
                            {{ tech }}
                          </span>
                        </div>
                      </div>
  
                      <div>
                        <h4 class="font-semibold text-primary mb-2">Project Details</h4>
                        <ul class="space-y-2 text-dark-600">
                          <li>
                            <span class="font-medium">Client:</span> {{ project.client }}
                          </li>
                          <li>
                            <span class="font-medium">Duration:</span> {{ project.duration }}
                          </li>
                          <li>
                            <span class="font-medium">Type:</span> {{ project.type }}
                          </li>
                        </ul>
                      </div>
                    </div>
  
                    <!-- Key Features -->
                    <div class="mt-6">
                      <h4 class="font-semibold text-primary mb-2">Key Features</h4>
                      <ul class="grid md:grid-cols-2 gap-4">
                        <li
                          v-for="feature in project.features"
                          :key="feature"
                          class="flex items-center text-dark-600"
                        >
                          <Icon name="mdi:check-circle" class="w-5 h-5 text-primary mr-2" />
                          {{ feature }}
                        </li>
                      </ul>
                    </div>
                  </div>
  
                  <!-- Close Button -->
                  <button
                    @click="$emit('update:modelValue', false)"
                    class="absolute top-4 right-4 w-10 h-10 rounded-full bg-primary/50 backdrop-blur flex items-center justify-center hover:bg-white transition-colors"
                  >
                    <Icon name="mdi:close" class="w-6 h-6" />
                  </button>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
  </template>
  
  <script setup lang="ts">
  import { Dialog, DialogPanel, TransitionRoot, TransitionChild } from '@headlessui/vue';
import type { Project } from '~/types/portfolio';
  
  defineProps<{
    modelValue: boolean;
    project: Project | null;
  }>();
  
  defineEmits<{
    'update:modelValue': [value: boolean];
  }>();
  </script>