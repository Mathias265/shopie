<template>
  <div>
    <HomeNavigate />

    <div class="bg-white min-h-screen">
      <div
        class=" text-black  px-4 py-9 lg:flex lg:justify-center items-center gap-6 flex lg:flex-row flex-col md:flex md:gap-6 md:justify-center md:flex-row w-full border divide-solid">

        <img :src="product.image" alt="" class="lg:w-72 md:w-64 w-64">
        <div class="lg:w-2/4 w-96 px-12">
          <h2 class="font-mono lg:text-4xl mb-3">{{ product.title }}</h2>
          <h4 class="mb-3 text-xl">Price: <span class="font-semibold">&#8358{{ product.price }}.00</span></h4>
          <span>Sizes: </span><select name="" id="" class="bg-white border py-2 px-4 rounded-lg mb-3">
            <option value="">34</option>
            <option value="">24</option>
            <option value="">14</option>
          </select>
          <div class="lg:flex lg:gap-3 lg:flex-row flex flex-col  item-center mb-5">
            <div>
              <button @click="count++" class="bg-gray-100 p-3 active:bg-gray-400">+</button>
              <keep-alive>
                <span class="bg-white p-3">{{ count }}</span>
              </keep-alive>
              <button @click="count--" class="bg-gray-100 p-3 active:bg-gray-400">-</button>
            </div>
            <button class=" bg-blue-400 py-1 px-4 text-white rounded-lg active:bg-blue-500" @click="addToCart">
              <span v-if="inCart()" class="font-mono">REMOVE FROM CART</span>
              <span v-else class="font-mono">ADDTO CART</span>
            </button>
          </div>
          <h3 class="font-semibold text-3xl mb-2 font-mono">Product details</h3>
          <p class="text-wrap break-words mb-3 max-w-80 font-mono">{{ product.description }}</p>


        </div>
      </div>
      <HomeFeature />
    </div>
    <Below />
  </div>
</template>

<script setup>
import { useToast } from "vue-toastification";
import { POSITION } from "vue-toastification";
const cart = useCart();
const count = ref(0);
useHead({
  title: "Loading product",
});
const loading = ref(true);
const route = useRoute();
const productId = ref(route.params.id);
const product = ref({});
const toast = useToast();
onMounted(async () => {
  try {
    const response = await fetch(
      `https://fakestoreapi.com/products/${productId.value}`
    );
    if (!response.ok) {
      throw new Error("Product not available");
    }
    const data = await response.json();
    product.value = data;
  } catch (error) {
    console.error("Error fetching product details:", error);
    product.value = {}; // Clear product data to avoid displaying state data
  } finally {
    loading.value = false;
  }
});

watch(product, newProduct => {
  if (newProduct.title) {
    useHead({
      title: newProduct.title,
    });
  }
});
//To get the product id we need to add to cart
const fullname = computed(() => {
  return `${route.params.id}`;
});
//this tells when the product is not in the cart
function inCart() {
  return !!cart.value.find(ct => ct.name === fullname.value);
}
//if the product is not in the cart then add it to the cart
function addToCart() {
  const found = cart.value.find(ct => ct.name === fullname.value);
  //if the product is not found in the cart then add it to the cart
  if (!found) {
    toast.success("Added to cart", { position: POSITION.BOTTOM_RIGHT });
    cart.value.push({
      name: fullname,
    });
  } else {
    //if the product is in the cart and we want to remove it from the cart then we remove it when we click on remove from cart
    toast.error("Removed from cart", { position: POSITION.BOTTOM_RIGHT });
    cart.value.pop({ name: fullname });
  }
}
</script>
