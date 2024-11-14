<template>
    <section class="relative py-20 md:py-32 overflow-hidden">
        <div class="container">
            <div class="grid md:grid-cols-2 gap-12 items-center">
                <div class="space-y-6">
                    <h1 v-motion="{
                        initial: {
                            opacity: 0,
                            y: 40,
                            scale: 0.95
                        },
                        visible: {
                            opacity: 1,
                            y: 0,
                            scale: 1,
                            transition: {
                                duration: 1000,
                                ease: [0.215, 0.610, 0.355, 1.000]
                            }
                        }
                    }" class="text-dark-800">
                        Transform Your Business with <span class="text-primary">Smart Technology</span> Solutions
                    </h1>
                    <p v-motion="{
                        initial: { x: -100, opacity: 0 },
                        visible: {
                            x: 0,
                            opacity: 1,
                            transition: {
                                duration: 700,
                                ease: 'easeOut'
                            }
                        }
                    }" class="text-lg text-dark-600 max-w-lg">
                        Custom software development and logistics management solutions tailored to elevate your business
                        operations.
                    </p>
                    <div v-motion="{
                        initial: { opacity: 0, y: 40 },
                        visible: {
                            opacity: 1,
                            y: 0,
                            transition: {
                                duration: 800,
                                ease: 'easeOut'
                            }
                        }
                    }" class="flex space-x-4 pt-4">
                        <button v-motion="{
                            initial: { scale: 0, opacity: 0 },
                            visible: {
                                scale: 1,
                                opacity: 1,
                                transition: {
                                    type: 'spring',
                                    stiffness: 100,
                                    damping: 15
                                }
                            }
                        }" class="btn bg-primary hover:bg-primary-600 text-white px-8 py-3 rounded-lg transition-all">
                            Get Started
                        </button>
                        <button
                            class="btn border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-lg transition-all">
                            Learn More
                        </button>
                    </div>
                </div>
                <div v-motion="{
                    initial: { scale: 0.5, opacity: 0 },
                    visible: {
                        scale: 1,
                        opacity: 1,
                        transition: {
                            duration: 600,
                            ease: 'easeOut'
                        }
                    },
                    hover: {
                        scale: 1.05,
                        transition: {
                            duration: 300
                        }
                    }
                }" class="relative">
                    <div
                        class="absolute inset-0 bg-gradient-to-tr from-primary-100 to-secondary-100 rounded-full blur-3xl opacity-30">
                    </div>
                    <NuxtImg
                        src="https://res.cloudinary.com/dcmwnrvzk/image/upload/v1731598362/social-smarttech-logo_hvn5fr.png"
                        alt="SocialSmartTech" class="relative w-full h-auto max-w-md mx-auto" />
                </div>
            </div>
        </div>
    </section>
</template>