<script setup>
import ContactMessage from './ContactMessage.vue'
</script>

<template>
    <section
        class="min-h-screen bg-cover bg-no-repeat bg-[url('https://c1.wallpaperflare.com/preview/202/740/23/various-blood-doctor-hand.jpg')] dark:bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern-dark.svg')]">
        <div class="py-8 px-4 mx-auto max-w-screen-xl  lg:py-16 z-10 relative flex " id="jumbo-1-div">

            <div class="flex flex-col flex-1">
                <h1
                    class="mb-4 text-center text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                    Connecting Care, One Call Away: Reach out to Our Dedicated Doctors Today</h1>
                <p class="mb-8 text-lg font-medium text-gray-700 lg:text-xl  dark:text-gray-200">
                    Experience the seamless connection of care with just one call, as our dedicated doctors eagerly await to serve you. Our compassionate team is readily available to address your healthcare needs, providing personalized attention, expert guidance, and timely appointments. Don't hesitate to reach out to us today, taking the first step towards better health and well-being, knowing that you are just a phone call away from accessing the exceptional care you deserve.</p>
            </div>

            <div class="flex-1">
                <ContactMessage />
            </div>

        </div>

    </section>
</template>

<style scoped>
@media  screen and (max-width: 768px) {
    #jumbo-1-div{
        flex-direction: column;
    }
}
</style>
