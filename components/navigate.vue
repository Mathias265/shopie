<template>
    <div class="h-full ">
        <nav class="bg-white py-2 px-2 w-full">
      <div class="container mx-auto lg:flex lg:justify-between flex justify-between md:flex items-center w-full pr-3">
        <div>
            <img src="../assets/img/R.png" class="h-19 w-14 lg:h-26 lg:w-30" />
        </div>
        <div class="hidden md:block">
          <ul class="flex space-x-4">
            <li><NuxtLink to="/" class="text-black hover:text-blue-500 mx-3 font-mono cursor-pointer" active-class="active">Home</NuxtLink></li>
            <li><NuxtLink to="/services" class="text-black hover:text-blue-500  mx-3 font-mono cursor-pointer" active-class="active">Services</NuxtLink></li>
            <li><NuxtLink to="/about" class="text-black hover:text-blue-500  mx-3 font-mono cursor-pointer" active-class="active">About Us</NuxtLink></li>
            <li><NuxtLink to="/blog posts" class="text-black hover:text-blue-500  mx-3 font-mono cursor-pointer" active-class="active">Blog Posts</NuxtLink></li>
            <li><NuxtLink to="/contact" class="text-black hover:text-blue-500  mx-3 font-mono cursor-pointer" active-class="active">Contact</NuxtLink></li>
          </ul>
        </div>
       
            <div class="flex justify-between hidden md:block ">
              <button class="btn-3d bg-gradient-to-r from-blue-600 to-blue-400 text-white font-bold py-2 px-4 rounded-lg shadow-lg hover:shadow-2xl focus:outline-none mr-5" @click="worked()">Sign up</button>
        <UButton color="blue" variant="outline" size="md"><h4 class="font-mono" @click="enter()">Login</h4></UButton>
        </div>
        <div class="md:hidden">
        
          <button @click="isOpen = !isOpen" class="text-blue-500 focus:outline-none hover:rotate-180 md:visible">
            <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
      <transition name="slide-fade">
        <div v-if="isOpen" class="md:hidden z-10 absolute top-12 left-0 right-0">
       
        <ul class="bg-white">
            <li><NuxtLink to="/" class="text-black hover:text-orange-300 block py-2 px-4 hover:bg-blue-500 hover:text-white">Home</NuxtLink></li>
            <li><NuxtLink to="/" class="text-black hover:text-orange-300 block py-2 px-4 hover:bg-blue-500 hover:text-white">Services</NuxtLink></li>
            <li><NuxtLink to="/about" class="text-black hover:text-orange-300 block py-2 px-4 hover:bg-blue-500 hover:text-white">About Us</NuxtLink></li>
            <li><NuxtLink to="/" class="text-black hover:text-orange-300 block py-2 px-4 hover:bg-blue-500 hover:text-white">Blog Post</NuxtLink></li>
            <li><NuxtLink to="/" class="text-black hover:text-orange-300 block py-2 px-4 hover:bg-blue-500 hover:text-white">Contacts</NuxtLink></li>
            <li><UButton block class="mb-3" color="blue">Sign-Up</UButton></li>
            <li><UButton block color="blue" variant="outline">Login</UButton></li>
        </ul>
      </div>
      </transition>
    </nav>
    
    </div>
  </template>
  
  <script setup>
 const isOpen = ref(false);

const router = useRouter();

function enter(){
 router.push("/verified")
  console.log("worked");
}
  </script>
  <style lang="scss">
.active{
  color: #60A5FA;
}
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
  
  