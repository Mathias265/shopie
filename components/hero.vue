<template>
    <div class="bg-gray-500 w-full  lg:flex items-center lg:justify-evenly 
     lg:w-full lg:px-7 px-5 lg:py-2 pt-5 md:flex justify-center">
<div class="text-center lg:text-left">
    <h4 class="text-3d text-2xl font-bold">Spring/Summer Collection.</h4>
    <h3 class="text-6xl mb-2 font-mono font-semibold text-black lg:text-7xl">Get The Best<br> Collection.</h3>
    <h5 class="lg:mb-5 mb-8 font-mono font-3xl text-black text-wrap">A special label creating luxury essentials,in bringing <br>an unwaving commitment to exceptional quality.</h5>
    <button class="animate-bounce btn-3d bg-gradient-to-r from-blue-600 to-blue-400 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:shadow-2xl focus:outline-none" @click="worked()">Get started with us</button>
</div>
<div class="images">
    <img src="../assets/img/new.png" alt="" class="h-7 w-3/4  lg:h-5 lg:w-3/4" >
</div>
    </div>
</template>

<script setup>
//class="w-64 h-64" 
</script>

<style lang="scss" scoped>
.images{
img{
    height: auto;
    max-width: 28rem;
    width: 90%;
}
}
.text-3d {
      text-shadow:
        1px 1px 0 #000,   /* Shadow layer 1 */
        2px 2px 0 #000,   /* Shadow layer 2 */
        3px 3px 0 #000,   /* Shadow layer 3 */
        4px 4px 0 #000,   /* Shadow layer 4 */
        5px 5px 0 #000;   /* Shadow layer 5 */
      color: #fff;       /* Text color */
    }
</style>