<template>
  <div class="bg-gray-500 py-4 px-9 flex-wrap">
    <section class="lg:grid lg:grid-cols-4 mb-2 md:grid md:grid-cols-2 grid grid-cols-2 gap-4">
      <ul class="">
   <li><h2 class="font-bold text-black mb-2">TOP CATEGORIES</h2></li>
   <li><NuxtLink to="/"><h2>Men's cloth</h2></NuxtLink></li>
   <li><NuxtLink to="/"><h2>Women's cloth</h2></NuxtLink></li>
   <li><NuxtLink to="/"><h2>Jeweries</h2></NuxtLink></li>
   <li><NuxtLink to="/"><h2>Electronics</h2></NuxtLink></li>
      </ul>
      <div>
        <h2 class="font-bold text-black mb-2">HELP</h2>
        <h5>Delivery</h5>
        <h5>Returns</h5>
        <h5>secure payments</h5>
        <h5>Track an order</h5>
        <NuxtLink to=""><h5>Contact us</h5></NuxtLink>
      </div>
      <div>
        <h2 class="font-bold text-black mb-2">ABOUT US</h2>
        <h5>Careers</h5>
        <h5>Terms and condition of sales</h5>
        <h5>Privcy policy</h5>
        <h5>Responsibility</h5>
      </div>
      <div>
        <h2 class="font-bold text-black mb-2">FEEDBACK</h2>
        <h5>Leave a feedback</h5>
      </div>
    </section>
    <UDivider />
  </div>
</template>
<script setup>

</script>

<style lang="scss" scoped></style>
