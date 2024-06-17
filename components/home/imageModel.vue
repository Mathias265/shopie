<!-- components/ImageModal.vue -->
<template>
    <div class="modal-overlay" v-if="show">
      <div class="modal">
        <button class="close-button" @click="closeModal">X</button>
        <img :src="imageSrc" alt="Product Image" class="h-80 w-80"/>
      </div>
    </div>
  </template>
  
  <script setup>
  
  
  const props = defineProps({
    show: {
      type: Boolean,
      required: true
    },
    imageSrc: {
      type: String,
      required: true
    }
  })
  
  const emit = defineEmits(['close'])
  
  const closeModal = () => {
    emit('close')
  }
  </script>
  
  <style scoped>
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 999;
  }
  
  .modal {
    background: white;
    padding: 20px;
    border-radius: 10px;
    position: relative;
   
  }
  
  .close-button {
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    font-size: 20px;
    cursor: pointer;
  }
  </style>
  