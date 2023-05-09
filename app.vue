<template>
  <Nav>
  <div class="flex ">

    <!-- Redes sociales -->
    <div class="left-0 h-[calc(100vh-8rem)]  w-10 fixed md:left-16 justify-center flex flex-col items-center">
      <a href="https://github.com/InesSorzano" rel="noopener noreferrer" target="_blank">
         <img src="~/assets/images/github.png" alt="github logo">
      </a>
      <a href="https://www.linkedin.com/in/in%C3%A9s-sorzano-5a2907208" rel="noopener noreferrer" target="_blank">
          <img src="~/assets/images/linkedin.png" alt="linkedin logo">
      </a>
    </div>
    <!--  -->
    
    <!-- Contenido principal -->
    <div class=" h-full text-center w-full mx-5 md:mx-40 px-10 ">
      <!-- Ïndice -->
      <div id="index" class="my-5">
      </div>
     
      <!-- Sobre mí -->
      <div id="about" class="max-h-fit ">
        <!-- Tarjeta -->
        <div class=" mx-auto max-w-sm w-full lg:max-w-full lg:flex bg-white rounded-3xl shadow-md shadow-gray-500 my-5" >
          <!-- Imagen de perfil -->
          <div class=" m-10 h-56 lg:h-auto lg:w-56 flex bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"  title="Woman holding a mug">
            <div class="relative lg:w-48  m-auto h-100 mx-auto" >
              <img src="~/assets/images/profile_pic.jpg" class="w-48  mx-auto rounded-full shadow-lg">
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
              <span class="text-sm text-gray-500 ">
                Full stack developer
              </span>

              <p class="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
              </p>
              <div class=" mt-4 space-x-3 md:mt-6">
                  <a  href="files/cv.pdf" download="cv_inessorzano.pdf"  class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300  ">
                    Currículum
                  </a>
                  <a  class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 ">
                    <NuxtLink :to="{ path: '/',hash:'#contact'}">Contact</NuxtLink>
                  </a>
              </div>
              
            </div>
          </div>
        </div>
      </div>
      <!--  -->

      <!-- Experiencia -->
      <div id="experience" class="my-5">
        <h1 class="font-bold"> EXPERIENCE</h1>
        <CardBorder>
          <div class="">
            <div>
              <a  href="https://www.panoimagen.com/"  rel="noopener noreferrer" target="_blank"><img src="~/assets/images/panoi.jpg" class="w-10 m-2 float-left relative"></a>
              <p class="m-2 "> 2021 - <bold>Actualidad</bold></p>
              <p><b style="color: green;"> Panoimagen </b> Desarrollo de aplicaciones web con Django </p>
            </div>
            <div class="">

              <ul class=" pl-0">
                <li>Bases de datos con PostgreSQL</li>
                <li>Backend con Django (python)</li>
                <li>Front end con HTML, CSS, Javascript, Node.js y Bootstrap</li>
                <li>Despliegue con Nginx</li>
                <li>Tareas en segundo plano con Redis y Celery</li>
                <li>Detección de objetos con Detectron2 y Tensorflow lite</li>
              </ul>
            </div>
            <br/>---
            <div>
              <img src="~/assets/images/studies.png" class="w-10 clear-both float-left">
              <p class="mx-5 clear-both"> 2020 - 2021</p>
              <p>Comercio Grado Superior de Desarrollo de Aplicaciones Multiplataforma</p>
            </div>
          </div>
          
          
        </CardBorder>
      </div>
      <!--  -->

      <!-- Contacto -->
      <div id="contact" class="my-5">
        <h1 class="font-bold"> CONTACT ME</h1>
        <CardBorder>
          <section class="py-6  mx-0">
              <form ref="form" @submit.prevent="sendEmail" method="POST" target="_blank" rel="noopener noreferrer"  class="flex flex-col py-6 space-y-6 md:py-0 md:px-6 ng-untouched ng-pristine ng-valid">
                <p class="flex items-center mx-0 justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 mr-2 sm:mr-6">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                  <span class="mb-1">inessorzano@gmail.com</span>
                </p>
                <label class="block">
                  <input type="text" placeholder="Name"  name="name" class="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-400 ">
                </label>
                <label class="block">
                  <input type="email" placeholder="Email" name="email" class="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-400 ">
                </label>
                <label class="block">
                  <textarea rows="3" v-model="message" name="message" class="block w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 "></textarea>
                </label>
                <button type="submit" id="send_mail"   class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300   self-center px-8 py-3 text-lg rounded ">Submit</button>
              </form>
        </section>
      </CardBorder>

      </div>
      <!--  -->
    
    </div>
    <!--  -->

    <!-- Anclas derecha -->
    <div class=" h-[calc(100vh-8rem)]  w-10 fixed right-0 md:right-16 justify-center flex items-center ">
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
</Nav>
</template>

<script >
  import emailjs from '@emailjs/browser';

  export default {
    head: {
      script: [
        {
          src: 'https://www.google.com/recaptcha/api.js'
        }
      ]
    },
    methods: {
      sendEmail() {
        emailjs.sendForm('service_x653keh', 'template_3c4pmkm', this.$refs.form, 'YEznwqMeHyGnJg_Xx')
          .then((result) => {
              console.log('SUCCESS!', result.text);
          }, (error) => {
              console.log('FAILED...', error.text);
          });
      }
    }
  }
</script>

<style scoped>
    h2{
        font-size: 36px;;
    }
</style>