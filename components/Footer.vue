<template>
    <div>
        <header class="shadow-sm bg-slate-300 dark:bg-slate-700 dark:shadow-gray-900 dark:text-gray-100">
            <nav class="container mx-auto p-4 flex  justify-center ">
                <ul>
                    <li ><p> © Ines Sorzano Cabrera {{ currentYear }} </p> </li>
                    <li class="w-20 flex mx-auto dark:w-26 ">
                        <a href="https://github.com/InesSorzano" rel="noopener noreferrer" target="_blank" class=" rounded-full m-1 dark:bg-slate-100">
                            <img src="/images/github.png" alt="github logo">
                        </a>
                        <a href="https://www.linkedin.com/in/in%C3%A9s-sorzano-5a2907208" rel="noopener noreferrer" target="_blank" class=" rounded m-1 dark:bg-slate-100">
                            <img src="/images/linkedin.png" alt="linkedin logo">
                        </a>
                    </li>
                </ul>
            </nav>
        </header>

    </div>
</template>
<style scoped>
      .router-link-exact-active {
    color: black;
  }
</style>
<script>
export default {
    data(){
        return{
            currentYear: new Date().getFullYear()
        }
    }
}
</script>