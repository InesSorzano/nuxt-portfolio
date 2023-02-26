<template>
    <div>
        <div class="grid grid-cols-3 gap-5">
            <div v-for="p in products">
                <ProjectCard :project="p"/>
            </div>
        </div>
    </div>
</template>

<script setup>
    // fetch products
    const { data: products } = await useFetch('https://fakestoreapi.com/products')
    
    definePageMeta({
        layout: 'products',
    })
</script>

<style scoped>
  h2{
        font-size: 36px;;
    }
</style>