<script setup>
import SigninButton from '../SigninButton.vue'
</script>

<template>
    <section class="bg-gray-300 dark:bg-gray-900 min-h-screen" id="jumbotron1">
        <div class="grid max-w-screen-xl px-4 pt-8 pb-0 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            <div class="mr-auto place-self-center lg:col-span-7">
                <h1
                    class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
                    Lorem ipsum dolor sit amet ad minim veniam</h1>
                <p class="max-w-2xl mb-6 font-semibold text-gray-700 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Duis
                    aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>

                <div class="inline-flex gap-5">

                    <SigninButton />



                    <router-link to="/contact"
                        class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-50 border border-gray-300 rounded-lg bg-gray-500 hover:bg-gray-500  focus:ring-4 focus:ring-gray-400 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                        Contact
                    </router-link>
                </div>



            </div>
            <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
                <img src="../../assets/doctor_operating-removebg-preview.png" alt="mockup" class="h-full">
            </div>
        </div>
    </section>
</template>

<style scoped>
section {
    background-image: url("../../assets/operating_room.jpg");
}
</style>