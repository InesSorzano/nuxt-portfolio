<template>
    <div>
        <header class="shadow-sm bg-white ">
            <nav class="container mx-auto p-4 flex  justify-center">
                <ul class="flex gap-4 ">
                    <li> <NuxtLink :to="{ path: '/',hash:'#index'}">Home</NuxtLink></li>
                    <li> <NuxtLink :to="{ path: '/',hash:'#about'}">About</NuxtLink></li>
                    <li> <NuxtLink :to="{ path: '/',hash:'#experience'}">Experience</NuxtLink></li>
                    <li> <NuxtLink :to="{ path: '/',hash:'#contact'}">Contact</NuxtLink></li>
                </ul>
            </nav>
        </header>

        <div class="container mx-auto p-4">
            <slot />
        </div>
    </div>
</template>
<style scoped>
      .router-link-exact-active {
    color: black;
  }
</style>