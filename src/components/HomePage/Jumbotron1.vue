<script setup>
import SigninButton from '../SigninButton.vue'
</script>

<template>
    <section class="bg-gray-300 dark:bg-gray-900 min-h-screen" id="jumbotron1">
        <div class="grid max-w-screen-xl px-4 pt-8 pb-0 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            <div class="mr-auto place-self-center lg:col-span-7">
                <h1
                    class="max-w-2xl mb-4 text-4xl text-justify font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
                    Your Path to Optimal Health: Expert Medical Care</h1>
                <p class="max-w-2xl mb-6 font-semibold  text-justify  text-gray-700 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Embark on a transformative journey towards optimal health with our expert medical care. Our dedicated team of professionals is committed to guiding you along this path, ensuring comprehensive and personalized treatment plans tailored to your unique needs. Experience a revitalized sense of well-being as we prioritize your health and empower you to reach your fullest potential.</p>

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