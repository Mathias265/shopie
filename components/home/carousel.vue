<script setup lang="ts">
//w-full lg:flex lg:items-center bg-gray-500 lg:justify-between pt-8 lg:w-full  lg:pb-0'
const carouselRef = ref();
//
onMounted(() => {
  setInterval(() => {
    if (!carouselRef.value) return;

    if (carouselRef.value.page === carouselRef.value.pages) {
      return carouselRef.value.select(0);
    }

    carouselRef.value.next();
  }, 3000);
});
const items = [
  {
    name: "The best set of items for your tastes",
    to: "https://github.com/Atinux",
    avatar: {
      src: "https://www.pngmart.com/files/3/Beautiful-Girl-Transparent-Background.png",
    },
  },
  {
    name: "The best set of items for your tastes",
    to: "https://github.com/pi0",
    avatar: {
      src: "https://www.pngplay.com/wp-content/uploads/7/Model-Man-Background-PNG-Image.png",
    },
  },
  {
    name: "The best set of items for your tastes",
    to: "https://github.com/danielroe",
    avatar: { src: "https://pngimg.com/uploads/jewelry/jewelry_PNG6771.png" },
  },
];
</script>

<template>

  <UCarousel ref="carouselRef" v-slot="{ item, index }" :items="items" :ui="{
    item: ' bg-gray-500 w-full lg:min-h-full pb-0 ',
  }" arrows>
    <div
      class="text-center mx-auto lg:flex lg:justify-between lg:items-center lg:flex-row flex justify-center flex-col lg:gap-4 md:flex-row md:flex md:justify-between md:items-center">
      <div class="text-black lg:text-left text-center">
        <h4 class="text-3d text-2xl font-bold">Spring/Summer Collection.</h4>
        <h3 class="text-6xl mb-2 font-mono font-semibold text-white lg:text-7xl">
          Get The Best<br />
          Collection.
        </h3>
        <h5 class="lg:mb-5 mb-8 font-mono font-3xl text-black text-wrap">
          A special label creating luxury essentials,in bringing <br />an
          unwaving commitment to exceptional quality.
        </h5>

        <button
          class="btn-3d bg-gradient-to-r from-gray-400 to-gray-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:shadow-2xl focus:outline-none mt-5 mb-5">
          shop now
        </button>
      </div>
      <div class="images">
        <img :src="item.avatar.src" :alt="item.name" class="h-auto lg:max-w-96 lg:h-auto lg:w-4/6 md:h-auto md:w-4/6 md:max-w-md " draggable="false"
          loading="lazy" />
      </div>
    </div>
  </UCarousel>

</template>
<style lang="scss" scoped>
.images {
  img {
   // height: auto;
  //max-width: 26rem;
    //width: 70%;

  }
}
</style>
