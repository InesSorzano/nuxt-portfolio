<template>
  <Nav>
  <div class="flex ">

    <!-- Redes sociales -->
    <div class="left-0 h-[calc(100vh-8rem)]  w-10 fixed md:left-16 justify-center flex flex-col items-center">
      <a href="https://github.com/InesSorzano" rel="noopener noreferrer" target="_blank">
         <img src="/images/github.png" alt="github logo">
      </a>
      <a href="https://www.linkedin.com/in/in%C3%A9s-sorzano-5a2907208" rel="noopener noreferrer" target="_blank">
          <img src="/images/linkedin.png" alt="linkedin logo">
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
              <img src="/images/profile_pic.jpg" class="w-48  mx-auto rounded-full shadow-lg">
            </div>
          </div>
  
          <!-- Resumen -->
          <div  class="   lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
            <div class="mb-8">
              <p class="text-sm text-gray-600 flex items-center">
              </p>
              <div class="text-gray-900 font-bold text-xl mb-2">
                Inés Sorzano Cabrera
              </div>
              <span class="text-sm text-gray-500 ">
                Full stack junior developer
              </span>

              <p class="text-gray-700 text-base">
                
              </p>
              <div class=" mt-4 space-x-3 md:mt-6">
                  <a  href="files/cv.pdf" download="cv_inessorzano.pdf"  class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-gray-700 rounded-lg hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300  ">
                    Currículum
                  </a>
                  <a  class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-gray-700 rounded-lg hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-500 ">
                    <NuxtLink to="#contact">Contact</NuxtLink>
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
          <Experience src="/images/panoi.jpg">
            <template #content> 
              <p class="float-right"> 2021 - Now</p>
              <p><b style="color: green;"> Panoimagen </b></p>
              <p>Web application development with Django and Nodejs </p>
              <p>Backend: Django (Python)</p>
              <p>Database management: PostgreSQL</p>
              <p>Front end HTML, CSS, Javascript, Node.js, Bootstrap and TailwindCSS</p>
              <p>Nginx</p>
              <p>Tasks: Redis y Celery</p>
              <p>Object detection: Detectron2 and Tensorflow lite</p>
            </template>
          </Experience>
          
          <Experience src="/images/studies.png">
            <template #content> 
              <p class="float-right"> 2020 - 2021</p>
              <p><strong>  IES.Comercio</strong>  </p> 
              <p>Grado Superior de Desarrollo de Aplicaciones Multiplataforma</p>
              
              <p>Comercio Grado Superior de Desarrollo de Aplicaciones Multiplataforma</p>
            </template>
          </Experience>
        </CardBorder>
      </div>
      <!--  -->

      <!-- Contacto -->
      <a name ="contact">
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
                    <a href="mailto:inessorzano@gmail.com" class="mb-1">inessorzano@gmail.com</a>
                  </p>
                  <label class="block">
                    <input type="text" placeholder="Name"  name="name" id="name" required class="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-b-2 border-gray-200">
                  </label>
                  <label class="block">
                    <input type="email" placeholder="Email" name="email" id="email" required class="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-b-2 border-gray-200 ">
                  </label>
                  <label class="block  ">
                    <textarea rows="3" id="message" v-model="message" name="message" required class="block w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-2 border-gray-200"></textarea>
                  </label>
                  <!-- HIDDEN SPINNER -->

                  <button type="submit"   class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-gray-700 rounded-lg hover:bg-gray-900 bg-border-2 border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-300   self-center px-8 py-3 text-lg rounded ">
                    <svg aria-hidden="true" id="sending" role="status" class="hidden mx-auto inline w-4 h-4 mr-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
                      <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
                    </svg>
                    <p id="submit_text">Submit</p>
                  </button>
                </form>
          </section>
        </CardBorder>

        </div>
      </a>
      <!--  -->
    
    </div>
    <!--  -->

    <!-- Anclas derecha -->
    <div class=" h-[calc(100vh-8rem)]  w-10 fixed right-0 md:right-16 justify-center flex items-center ">
      <ul>
        <li >
          <NuxtLink to="#about" :class="currentAnchor === 'about' ? 'bg-slate-900' : 'bg-slate-400'"  @click="handleAnchorClick" class=" m-5 w-5 h-5 rounded-full flex justify-center"></NuxtLink>
        </li>
        <li > 
          <NuxtLink to="#experience" :class="currentAnchor === 'experience' ? 'bg-slate-900' : 'bg-slate-400'" class="bg-slate-400 m-5 w-5 h-5 rounded-full flex justify-center"> </NuxtLink>
        </li>
        <li>
          <NuxtLink to="#contact"  :class="currentAnchor === 'contact' ? 'bg-slate-900' : 'bg-slate-400'" class="bg-slate-400 m-5 w-5 h-5 rounded-full flex justify-center"> </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</Nav>
<Footer></Footer>
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
    data() {
      return{
        currentAnchor: "about"
      };
    },
    mounted() {
    window.addEventListener('scroll', this.handleScroll);
    },
    destroyed() {
      window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
      handleAnchorClick(event) {
        const href = event.target.getAttribute('href');
        const anchor = href.substring(1); 

        if (document.getElementById(anchor)) {
          this.currentAnchor = anchor;
          console.log(anchor);
        }
      },
      handleScroll() {
        const anchorNames = ["about", "experience", "contact"];
        const scrollPosition = window.scrollY - 80; 
        for (const anchor of anchorNames) {
          const element = document.getElementById(anchor); 
          const rect = element.getBoundingClientRect();

          if (rect.top <= scrollPosition && rect.bottom >= scrollPosition) {
            // Aquí sucede el cambio
            let newAnchor = element.getAttribute('id');
            if (newAnchor !== this.currentAnchor){
              this.currentAnchor = newAnchor; 
              break;
            }
          }
        }
      },
      resetForm(){
          document.getElementById("name").value="";
          document.getElementById("email").value="";
          document.getElementById("message").value="";
      },
      restoreSendButton(spinner,submit_text){
        spinner.classList.add("hidden");
        submit_text.innerHTML = "Submit";
      },
      sendEmail() {
        let spinner = document.getElementById("sending");
        let submit_text = document.getElementById("submit_text");
        spinner.classList.remove("hidden");
        submit_text.innerHTML = "";
        emailjs.sendForm('service_x653keh', 'template_3c4pmkm', this.$refs.form, 'YEznwqMeHyGnJg_Xx')
          .then((result) => {
              console.log('SUCCESS!', result.text);
              this.restoreSendButton(spinner,submit_text);
              this.resetForm();
          }, (error) => {
              console.log('FAILED...', error.text);
              this.restoreSendButton(spinner,submit_text);
          });
      },
      
    }
  }
</script>

<style scoped>
    h2{
        font-size: 36px;;
    }
</style>