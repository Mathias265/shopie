<template>
    <div class="space-y-2 bg-gray-400">
       
      <div v-for="(item, index) in items" :key="index" class=" border border-gray-600">
        <button
          @click="toggle(index)"
          class="w-full text-left px-4 py-2 bg-gray-400 text-gray-100 font-mono focus:outline-none"
        >
          {{ item.title }}
        </button>
        <transition name="accordion" @enter="enter" @leave="leave">
        <div v-if="openIndex === index" class="px-4 py-2 bg-gray-400 rounded-md border border-t-1">
          {{ item.content }}
        </div>
      </transition>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  // Define props
  const props = defineProps({
    items: {
      type: Array,
      required: true,
    },
  })
  
  // State for the currently open index
  const openIndex = ref(null)
  
  // Function to toggle the visibility of the content
  const toggle = (index) => {
    openIndex.value = openIndex.value === index ? null : index
  }

  const enter = (el) => {
  el.style.height = '0'
  el.style.opacity = '0'
  requestAnimationFrame(() => {
    el.style.transition = 'height 0.3s ease, opacity 0.3s ease'
    el.style.height = el.scrollHeight + 'px'
    el.style.opacity = '1'
  })
}

const leave = (el) => {
  el.style.height = el.scrollHeight + 'px'
  requestAnimationFrame(() => {
    el.style.transition = 'height 0.3s ease, opacity 0.3s ease'
    el.style.height = '0'
    el.style.opacity = '0'
  })
}
  </script>
  
  <style scoped>
  /* Custom styles if needed */
  .accordion-enter-active, .accordion-leave-active {
  transition: height 0.3s ease, opacity 0.3s ease;
}
.accordion-enter-from, .accordion-leave-to {
  height: 0;
  opacity: 0;
}
  </style>
  