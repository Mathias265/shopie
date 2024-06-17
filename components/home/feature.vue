<template>
    <div class="py-2">
        <div class="text-center mb-4">
            <h2 class="text-black text-4xl font-mono">FEATURED PRODUCTS</h2>
        </div>
        <div class="flex justify-center items-center relative">
<ul class="lg:grid lg:grid-cols-4 gap-4 grid grid-cols-1 md:grid md:grid-cols-2">
    
    <li v-for="product in products" :key="product.id" class="p-2 bg-white flex justify-center flex-col cursor-pointer shadow-md hover:shadow-2xl" >
    <img :src="product.image" alt="" class="w-64 h-64"  @click="goToProductDetails(product.id)">
   <div class="flex justify-between mt-3 mb-2">
    <h6 class="text-sm">

    </h6>
    <h6 class="text-sm font-mono">
      &#8358{{product.price}}
    </h6>
   </div>
<div class="flex justify-normal gap-6"> 
    <button class="py-1 px-2 bg-white border border-blue-400 text-blue-400 text-sm rounded-lg" >Buy Now</button>
    <div  class="absolute top-2 ">
        <HomeHeart/>
    </div>
    <button class="py-1 px-2 bg-white border border-gray-200 text-blue-400 rounded-lg" @click="openModal(product.image)" ><Icon name="uil:eye" color="black"/></button>
</div>
    </li>
</ul>
<homeImageModel :show="isModalVisible" :imageSrc="selectedImage" @close="closeModal"/>
    </div>
    </div>
</template>

<script setup>
const router = useRouter();
const isModalVisible = ref(false)
const selectedImage = ref('');


 const { data:products } = await useFetch("https://fakestoreapi.com/products/category/electronics");

 const goToProductDetails = (id) => {
 router.push(`/products/${id}`);
 console.log("worked");
};

const openModal = (image) => {
  selectedImage.value = image
  isModalVisible.value = true
}

const closeModal = () => {
  isModalVisible.value = false
}

</script>

<style lang="scss" scoped>

</style>