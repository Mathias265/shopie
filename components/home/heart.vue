<template>
    <div>
        <keep-alive>
            <button class="py-1 px-2 bg-white border border-gray-200 text-blue-400 rounded-lg" @click="toggleFavorite"><svg
      :class="{'text-red-500': isFavorited, 'text-gray-500': !isFavorited}"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      stroke="currentColor"
      class="w-4 h-4"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M3.172 5.172a4 4 0 015.656 0L12 8.344l3.172-3.172a4 4 0 115.656 5.656L12 20.828l-8.828-8.828a4 4 0 010-5.656z"
      />
    </svg></button>
        </keep-alive>
    </div>
</template>

<script setup>
import { useToast } from "vue-toastification"
const isFavorited = ref(false)
const toast = useToast();
const toggleFavorite = () => {
  isFavorited.value = !isFavorited.value
  if (isFavorited.value) {
    toast.success('Added to favourites')
  } else {
    toast.error('Removed from favorites.')
  }
}
</script>

<style lang="scss" scoped>

</style>