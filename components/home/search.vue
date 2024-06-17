<template>
  <div class="relative">
    <input
      type="text"
      class="bg-gray-300 lg:w-96 w-32 appearance-none pl-3 py-1 border-none focus:outline-none text-black font-mono"
      placeholder="search..." v-model="searchItem" @input="fetchProduct"
    />
    <div v-if="searchItem && searchResults.length > 0" class="absolute top-full mt-2 bg-gray-200 rounded-md overflow-y-auto max-h-40 z-30">
      <ul v-if="filteredProducts.length > 0">
          <li v-for="product in filteredProducts.slice(0, 5)" :key="product.id" class="cursor-pointer flex items-center z-50" @click="goToProductDetails(product.id)">
          <img :src="product.image" alt="Product thumbnail" class="w-8 h-8 mr-2">
         <span> {{ product.title }}</span>
        </li>
       
      </ul>
      <p v-else class="px-3 py-2">PRODUCT NOT FOUND</p>
    </div>
  </div>
</template>

<script setup>
const router = useRouter()
const searchItem = ref('');
const fetching = ref(false);
//fetching the initail pall product data
const { data: allProducts } = useFetch('https://fakestoreapi.com/products');
const searchResults = ref([]);
const fetchProduct = async () => {
  fetching.value = true;
  try {
    const response = await $fetch(`https://fakestoreapi.com/products?title=${searchItem.value}`);
    searchResults.value = response;
  } catch (error) {
    console.error('Error fetching products:', error);
  } finally {
    fetching.value = false;
  }
};

// Initially set searchResults to an empty array
searchResults.value = [];
//watches when there are changes in the input which make the list return an empty array
watch(searchItem, (newValue, oldValue) => {
  if (newValue === '') {
    searchResults.value = [];
  }
});

// use computed composable for changes in searchItem and update searchResults accordingly
const filteredProducts = computed(() => {
  return allProducts.value.filter(product =>
    product.title.toLowerCase().includes(searchItem.value.toLowerCase())
  );
});
const goToProductDetails = (id) => {
 router.push(`/products/${id}`);
 console.log("worked");
};
</script>

<style scoped>
/* Adjust position of dropdown */
.absolute {
  left: 0;
  right: 0;
}

/* Style the list */
ul {
  list-style: none;
  padding: 0;
}

/* Style the list items */
li {
  padding: 0.5rem;
  border-bottom: 1px solid #fff;
}

/* Style the last item */
li:last-child {
  border-bottom: none;
}
</style>



