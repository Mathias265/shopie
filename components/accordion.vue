<template>
  <div class=" mx-auto p-4 bg-gray-400">
    <div class="text-center">
            <h3 class="text-3xl mb-2">FAQ</h3>
        </div>
    <Accordioninfo :items="accordionItems" />
  </div>
</template>

<script setup>


const accordionItems = [
  { title: 'Why use shopi ?', content: 'Content for item 1' },
  { title: 'What about us ?', content: 'Content for item 2' },
  { title: 'What we sell ?', content: 'Content for item 3' },
]
</script>

<style scoped>
/* Custom styles if needed */
</style>

