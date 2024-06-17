<template>
    <div class="h-full sticky top-0 left-0 z-20 shadow">
        <nav class="bg-white lg:py-4 lg:px-2 py-2 px-4">
      <div class="container mx-auto flex justify-between items-center w-full pr-3">
        <div>
           <img src="/assets/img/R.png" alt="" class="h-16 w-16 lg:h-16 lg:w-20 md:h-24 md:w-30">
        </div>
        <div class="md:block">
          <homeSearch/>
        </div>
       
            <div class="lg:flex lg:justify-between flex justify-between md:flex md:justify-between">
       <button class="lg:mr-12  bg-blue-400 py-1 px-4 lg:text-sm sm:text-xs text-white">Cart({{ cart.length }})</button>
       <button class="hidden md:block btn-3d bg-gradient-to-r from-blue-400 to-blue-600 text-white font-bold py-1 px-6 rounded-lg shadow-lg hover:shadow-2xl focus:outline-none" @click="goBack()">log-out</button>
            </div>
        <div class="md:hidden">
        
          <button @click="isOpen = !isOpen" class="text-blue-500 focus:outline-none hover:rotate-180 md:visible ">
            <svg class="h-6 w-6 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
      <transition name="slide-fade">
        <div v-if="isOpen" class="md:hidden z-10 absolute top-20 left-0 right-0">
        <ul class="bg-white ">
          <li><NuxtLink to="/" class="text-black hover:text-orange-300 block py-2 px-4 hover:bg-blue-500 hover:text-white">Home</NuxtLink></li>
            <li><NuxtLink to="/" class="text-black hover:text-orange-300 block py-2 px-4 hover:bg-blue-500 hover:text-white">Services</NuxtLink></li>
            <li><NuxtLink to="/about" class="text-black hover:text-orange-300 block py-2 px-4 hover:bg-blue-500 hover:text-white">About Us</NuxtLink></li>
            <li><NuxtLink to="/" class="text-black hover:text-orange-300 block py-2 px-4 hover:bg-blue-500 hover:text-white">Blog Post</NuxtLink></li>
            <li><NuxtLink to="/" class="text-black hover:text-orange-300 block py-2 px-4 hover:bg-blue-500 hover:text-white">Contacts</NuxtLink></li>
            
          <button class="hidden md:block btn-3d bg-gradient-to-r from-blue-400 to-blue-600 text-white font-bold py-1 px-6 rounded-lg shadow-lg hover:shadow-2xl focus:outline-none" @click="goHome()">log-out</button>
            
        </ul>
      </div>
      </transition>
    </nav>
    </div>
  </template>
  
  <script setup>

  const cart = useCart();
  
 const isOpen = ref(false);
//<Icon name="uil:cart"  size="2rem"  class="text-blue-400 mr-7"/>
const router = useRouter();

function goBack(){
 router.back("/")
  console.log("worked");
}
function goHome(){
 router.back("/")
  console.log("worked");
}

  </script>
  <style lang="scss">
    .slide-fade-enter-active {
  transition: all 0.3s ease-in;
  }
  
  .slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
  }
  
  .slide-fade-enter-from,
  .slide-fade-leave-to {
  transform: translateY(20px);
  opacity: 0;
  }
  </style>