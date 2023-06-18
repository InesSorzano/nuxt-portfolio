<template>
    <div>
        <header class="shadow-sm bg-slate-100 dark:shadow-gray-900 dark:bg-slate-800 ">
            <nav class="container mx-auto p-4 flex justify-center  ">
                <ul class="flex gap-4 ">
                    <li> <NuxtLink to="#index">Inicio</NuxtLink></li>
                    <li> <NuxtLink to="#experience">Experiencia</NuxtLink></li>
                    <li> <NuxtLink :to="{path: '/', hash: '#contact'}" v-scroll-to="{el: '#contact'}">Contacto</NuxtLink></li>
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