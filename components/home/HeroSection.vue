<script setup lang="ts">
import { fade_in, hero_text, slide_left, zoom_in } from '~/lib/motions';
</script>

<template>
    <section class="relative py-20 md:py-32 overflow-hidden ">
        <div class="container">
            <div class="grid md:grid-cols-2 gap-12 items-center">
                <div class="space-y-6">
                    <h1 v-motion="hero_text" class="text-dark-200">
                        Transform Your Business with <span class="text-primary">Smart Technology</span> Solutions
                    </h1>
                    <p v-motion="slide_left" class="text-lg text-dark-500 max-w-lg">
                        Custom software development and logistics management solutions tailored to elevate your business
                        operations.
                    </p>
                    <div v-motion="fade_in" class="flex space-x-4 pt-4">
                        <button
                            class="btn bg-primary hover:bg-primary-600 text-white px-8 py-3 rounded-lg transition-all">
                            Get Started
                        </button>
                        <button
                            class="btn border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-lg transition-all">
                            Learn More
                        </button>
                    </div>
                    <div
                        class="absolute max-w-[20%] mx-auto max-h-[60%] inset-0 bg-gradient-to-tr from-primary to-secondary rounded-full blur-3xl opacity-40">
                    </div>
                </div>

                <div v-motion="zoom_in" class="relative">

                    <NuxtImg
                        provider="cloudinary"
                        src="https://res.cloudinary.com/dcmwnrvzk/image/upload/v1731598362/social-smarttech-logo_hvn5fr.png"
                        sizes="sm:448px md:448px lg:448px xl:448px 358px"
                        placeholder
                        alt="SocialSmartTech"
                        class="relative w-full h-auto max-w-md mx-auto"
                        />
                </div>
            </div>
        </div>
    </section>
</template>