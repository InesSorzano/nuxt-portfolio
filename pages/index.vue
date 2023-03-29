<template>
  <div class="flex ">
    <div class=" h-[calc(100vh-8rem)]  w-10 fixed left-16 justify-center flex flex-col items-center">
      <a href="https://github.com/InesSorzano" rel="noopener noreferrer" target="_blank">
         <img src="../assets/images/github.png" alt="github logo">
      </a>
      <a href="https://www.linkedin.com/in/in%C3%A9s-sorzano-5a2907208" rel="noopener noreferrer" target="_blank">
                  <img src="../assets/images/linkedin.png" alt="linkedin logo">
      </a>
    </div>
    <div class=" h-full text-center w-full mx-20 px-10 bg-slate-400 large-xl:mx-5 xl:px-1">
      <div id="index">
      </div>
     
      <p id="about">About me...</p>
      <p id="experience">Experience...</p>
      <p id="contact">Contacto...</p>
      

    </div>
    <div class=" h-[calc(100vh-8rem)]  w-10 fixed right-16 justify-center flex items-center ">

      <ul  >
        <li class="my-10 rounded-full border-solid border-2 border-black w-7  flex justify-center items-center">
          <NuxtLink :to="{ path: '/',hash:'#index'}" class="items-center"><strong>.</strong></NuxtLink>
        </li>
        <li class="my-10 w-7  flex justify-center items-center">
          <NuxtLink :to="{ path: '/',hash:'#contact'}"><strong>.</strong></NuxtLink>
        </li>
        <li class="my-10 w-7  flex justify-center items-center">
          <NuxtLink :to="{ path: '/',hash:'#contact'}"><strong>.</strong></NuxtLink>
        </li>
        <li class="my-10 w-7  flex justify-center items-center">
          <NuxtLink :to="{ path: '/',hash:'#contact'}"><strong>.</strong></NuxtLink>
        </li>
      </ul>
      
      
     
    </div>
</div>

    <!-- <h1> Hello! I'm  <strong> Inés</strong>, full stack software developer</h1> -->
</template>

<script setup>

</script>

<style scoped>
    h2{
        font-size: 36px;;
    }
</style>