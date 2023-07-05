<template>
    <section class="bg-gray-500 dark:bg-gray-900">
        <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16">
            <div class="flex flex-col justify-center">
                <h1
                    class="mb-4 text-4xl  font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                    Be a part of something bigger by prioritizing your medical care</h1>
                <p class="mb-6 text-lg font-normal text-gray-800 lg:text-xl dark:text-gray-400">Sign up now to access comprehensive healthcare services that go beyond individual needs, encompassing the well-being of your community and beyond. By taking proactive steps towards your health, you not only invest in your own vitality but also contribute to a larger vision of promoting healthier societies, fostering resilience, and ensuring a brighter future for all. Together, let us create a lasting impact through the power of medical care and join a movement towards a healthier world.
                </p>
                <router-link to="/about"
                    class="text-blue-900 dark:text-blue-500 hover:underline font-medium text-lg inline-flex items-center">Read
                    more about us
                    <svg aria-hidden="true" class="w-4 h-4 ml-2" fill="none" stroke="currentColor" stroke-width="2"
                        viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                </router-link>
            </div>
            <div>
                <div class="w-full lg:max-w-xl p-6 space-y-8 sm:p-8 bg-white rounded-lg shadow-xl dark:bg-gray-800 ">
                    <h2 class="text-2xl font-bold text-gray-900 dark:text-white">
                       Create an account
                    </h2>
                    <form class="mt-8 space-y-6" action="#">
                        <div>
                            <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                                Name</label>
                            <input type="text" name="name" id="name"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="name" required>
                        </div>
                        <div>
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                                email</label>
                            <input type="email" name="email" id="email"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="name@company.com" required>
                        </div>
                        <div>
                            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                                password</label>
                            <input type="password" name="password" id="password" placeholder="••••••••"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                required>
                        </div>

                        <div>
                            <label for="confirm_password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Confirm password</label>
                            <input type="password" name="confirm_password" id="confirm_password" placeholder="••••••••"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                required>
                        </div>
                      
                        <div class="flex justify-center">
                            <button type="submit"
                                class="w-full px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 sm:w-auto dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign up</button>
                        </div>
                        <div class="flex justify-center text-sm font-medium text-gray-900 dark:text-white">
                            Already have an account? <a class="text-blue-600 hover:underline dark:text-blue-500">Sign in</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>