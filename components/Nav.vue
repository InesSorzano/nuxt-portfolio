<template>
    <div>
        <header class="shadow-sm bg-white dark:shadow-gray-900">
            <nav class="container mx-auto p-4 flex justify-center dark:bg-slate-800  ">
                <ul class="flex gap-4 ">
                    <li> <NuxtLink to="#index">Home</NuxtLink></li>
                    <li> <NuxtLink to="#experience">Experience</NuxtLink></li>
                    <li> <NuxtLink :to="{path: '/', hash: '#contact'}" v-scroll-to="{el: '#contact'}">Contact</NuxtLink></li>
                </ul>
            </nav>
        </header>

        <div class="container mx-auto p-4">
            <slot />
        </div>
    </div>
</template>
<style scoped>

</style>