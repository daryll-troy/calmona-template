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
                    Lorem ipsum dolor sit amet consectetur. </h1>
                <p class="mb-8 text-lg font-medium text-gray-700 lg:text-xl  dark:text-gray-200">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra massa ac tempus tincidunt. Nullam
                    urna
                    diam, posuere ac suscipit non, iaculis quis nisi. Maecenas vitae lorem sit amet enim faucibus consequat
                    et
                    at felis. Nulla hendrerit non risus ut pharetra. In nec vehicula ligula. Vestibulum consequat neque
                    elit,
                    quis lacinia massa posuere in. Aliquam sed finibus odio. Phasellus vel odio convallis, mattis nisi quis,
                    suscipit nunc.</p>
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
