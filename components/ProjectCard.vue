<template>
    <div class="card text-center m-4">
        <img :src="project.image" alt="project thumb" class="thumb">
        <p class="font-bold text-gray-500 m-4 truncate"> {{ project.title }}</p>
        <NuxtLink :to="`/products/${project.id}`"> 
            <p class="btn my-4">Details</p>
        </NuxtLink>


    </div>
</template>

<script setup>
    const { project } = defineProps(['project'])
</script>

<style scoped>
 .thumb {
    max-height: 300px;
    max-width: 70%;
    margin: 0 auto;
  }
</style>