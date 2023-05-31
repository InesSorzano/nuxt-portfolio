<template>
    <br/>
     <div id="">
        <a  :href="href"  rel="noopener noreferrer" target="_blank"><img :src="src" class="w-10 m-2 float-left relative"></a>
        <div class ="ml-28 text-left	">
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