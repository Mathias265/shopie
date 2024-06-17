<template>
    <div class="lg:flex flex lg:justify-between justify-center">
<div class="lg:flex lg:justify-normal lg:gap-5 flex flex-col lg:flex-row">
    <span>Type:</span><select name="Type" id="" class="bg-gray-300 p-1 rounded-md outline-none">
    <option value="">Men's cloth</option>
    <option value="">womens cloth</option>
    <option value="">Tv</option>
    <option value="">power bank</option>
    <option value="">ring</option>
</select>
<input type="text" placeholder="min price" class="bg-white w-20 outline-black pl-1 border-black rounded-xl">
<input type="text" placeholder="max price" class="bg-white w-20 outline-black pl-1 border-black rounded-xl">
<select name="Category" id="" class="bg-gray-300 p-1 rounded-md outline-none">
    <option value="">Categories</option>
    <option value="">Men's Cloth</option>
    <option value="">Women's Cloth</option>
    <option value="">Jeweries</option>
</select>
Filter by:<select name="All filters" id="" class="bg-gray-300 p-1 rounded-md outline-none">
    <option value="">All</option>
    <option value="">Prices</option>
    <option value="">Name</option>
    <option value="">Value</option>
</select>
</div>
<div>
<span>Sort by:</span><select name="Sort By" id="" class="bg-gray-300 p-1 rounded-md outline-none">
   
    <option value="">Price</option>
    <option value="">Name</option>
    <option value="">Type</option>
</select>
</div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>