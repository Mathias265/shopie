<template>
    <div class="">
        <div class="text-center">
            <h1 class="text-4xl mb-8"> PRODUCT CATEGORIES </h1>
        </div>
        <div class="flex justify-center items-center gap-5 mb-8">
<div><button class="focus:underline active:underline focus:text-blue-400" @click="view('men')">MEN</button></div>
<div><button class="focus:underline active:underline focus:text-blue-400" @click="view('women')">WOMEN</button></div>
<div><button class="focus:underline active:underline focus:text-blue-400" @click="view('jewelry')" >JEWELERIES</button></div>
    </div>
   
        <homeMens v-if="page === 'men'"/>
    <homeWomens v-if="page === 'women'"/>
    <homeJewelries v-if="page === 'jewelry'"/>
  
    </div>
</template>

<script setup>
const page = ref("men");

function  view(name){
    page.value = name;
}
</script>

<style lang="scss" scoped>
.btn-3d {
      transition: transform 0.2s, box-shadow 0.2s;
    }
    .btn-3d:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
    }
    .btn-3d:active {
      transform: translateY(0);
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    }
    .active{
        color: red;
    }
</style>


