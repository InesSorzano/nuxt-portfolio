<template>
  <div class="flex ">

    <!-- Redes sociales -->
    <div class=" h-[calc(100vh-8rem)]  w-10 fixed left-16 justify-center flex flex-col items-center">
      <a href="https://github.com/InesSorzano" rel="noopener noreferrer" target="_blank">
         <img src="../assets/images/github.png" alt="github logo">
      </a>
      <a href="https://www.linkedin.com/in/in%C3%A9s-sorzano-5a2907208" rel="noopener noreferrer" target="_blank">
          <img src="../assets/images/linkedin.png" alt="linkedin logo">
      </a>
    </div>
    <!--  -->
    
    <!-- Contenido principal -->
    <div class=" h-full text-center w-full mx-20 px-10  large-xl:mx-5 xl:px-1">
      <!-- Ïndice -->
      <div id="index">
      </div>
     
      <!-- Sobre mí -->
      <div id="about" class="max-h-fit ">
        <!-- Tarjeta -->
        <div class="max-w-sm w-full lg:max-w-full lg:flex bg-white rounded-3xl shadow-md shadow-gray-500">
          <!-- Imagen de perfil -->
          <div class="m-10 h-56 lg:h-auto lg:w-56 flex bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style="background-image: url('../assets/images/about.jpg')" title="Woman holding a mug">
            <div class="relative lg:w-48  m-auto h-100 mx-auto" >
              <img src="../assets/images/profile_pic.jpg" class="w-48  mx-auto rounded-full shadow-lg">
            </div>
          </div>
  
          <!-- Resumen -->
          <div  class="   lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
            <div class="mb-8">
              <p class="text-sm text-gray-600 flex items-center">
              </p>
              <div class="text-gray-900 font-bold text-xl mb-2">
                Inés Sorzano
              </div>
              <span class="text-sm text-gray-500 dark:text-gray-400 mb-10">
                Full stack developer
              </span>

              <p class="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
              </p>
              <div class=" mt-4 space-x-3 md:mt-6">
                  <a   class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Currículum
                  </a>
                  <a  class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-gray-600 dark:hover:bg-black dark:focus:ring-blue-800">
                    <NuxtLink :to="{ path: '/',hash:'#contact'}">Contact</NuxtLink>
                  </a>
              </div>
            </div>
          </div>
      </div>
    </div>
      <!--  -->

      <!-- Experiencia -->
      <div id="experience">
        Experience...
      </div>
      <!--  -->

      <!-- Contacto -->
      <div id="contact">
        Contact...
      </div>
      <!--  -->
    
    </div>
    <!--  -->

    <!-- Anclas derecha -->
    <div class=" h-[calc(100vh-8rem)]  w-10 fixed right-16 justify-center flex items-center ">
      <ul>
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
</template>

<script >


</script>

<style scoped>
    h2{
        font-size: 36px;;
    }
</style>