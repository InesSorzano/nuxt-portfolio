<template>
    <br/>
     <div id="" class="flex flex-col "> 
        <a  :href="href"  rel="noopener noreferrer" target="_blank"><img :src="src" class="w-10 m-2  relative mx-auto "></a>
        <div class =" text-left	">
        <slot name="content"> Fallback Content </slot>

        </div>

    </div>
    <br/>
</template>

<script >
export default{
    props: ["href", "src"]
}
</script>

<style lang="scss" scoped>

</style>