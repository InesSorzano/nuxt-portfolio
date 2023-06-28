<template>
    <div>
        <header class="relative shadow-sm bg-slate-100 dark:shadow-gray-900 dark:bg-slate-800  dark:text-gray-100">
            
            <nav>
                <button  @click="setColorTheme($colorMode.preference === 'dark' ? 'light' : 'dark')" class="right-3  top-3  h-8 w-8 z-10 absolute dark:bg-slate-100 rounded-full p-1" >
                <img :src="'images/' + colorMode.preference + '.png'" >
                </button>
                <div  class="container mx-auto p-4 flex justify-center  ">
                    <ul class="flex gap-4 ">
                        <li> <NuxtLink to="#index">Inicio</NuxtLink></li>
                        <li> <NuxtLink to="#experience">Experiencia</NuxtLink></li>
                        <li> <NuxtLink :to="{path: '/', hash: '#contact'}" v-scroll-to="{el: '#contact'}">Contacto</NuxtLink></li>
                    </ul>
                </div>
                
             
            </nav>

        </header>

        <div class="container mx-auto p-4">
            <slot />
        </div>
    </div>
</template>
<style scoped>

</style>

<script setup>
const colorMode = useColorMode()
console.log(colorMode.preference)


const setColorTheme = (newTheme) => {
  useColorMode().preference = newTheme
}
</script>