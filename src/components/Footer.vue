<template>
    <footer class="bg-gray-800    dark:bg-gray-800 w-full">
        <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
            <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <router-link to="/#jumbotron1"
                    class="hover:underline">Company Name™</router-link>. All Rights Reserved.
            </span>
            <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                <li>
                    <router-link to="/about" class="mr-4 hover:underline md:mr-6 ">About</router-link>
                </li>
             
                <li>
                    <router-link to="/contact" class="hover:underline">Contact</router-link>
                </li>
            </ul>
        </div>
    </footer>
</template>

