<template>
    <section class="py-20 bg-primary">
        <div class="container">
            <div v-motion="reveal" class="text-center max-w-2xl mx-auto mb-16">
                <h2 class="text-light-400">Our Technology Stack</h2>
                <p class="mt-4 text-light-400">
                    We use cutting-edge technologies to build scalable and efficient solutions
                </p>
            </div>

            <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div v-for="(stack, index) in techStacks" :key="stack.name" v-motion="zoom_in" :custom="{ delay: index * 50 }"
                    class="p-6 bg-white rounded-xl text-center hover:shadow-lg transition-all">
                    <Icon :name="stack.icon" class="w-12 h-12 mx-auto mb-4 text-primary" />
                    <h4 class="font-semibold">{{ stack.name }}</h4>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { reveal, zoom_in } from '~/lib/motions';
import { techStacks } from '~/stores/service';
</script>