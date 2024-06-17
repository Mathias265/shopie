<template>
  <div class="bg-white px-6 py-3 text-black flex justify-center items-center font-mono">
    <main class=" flex justify-center lg:flex-row flex-col md:flex-row ">
        <div >
          <img src="../assets/img/lady2.webp" alt="" class="lg:w-2/4 w-80 md:w-2/4" />
          <h3>Women</h3>
        </div>
        
        <div class="">
          <img src="../assets/img/guy.jpeg" alt="" class="lg:w-2/4 w-80 md:w-2/4" />
          <h3>Men</h3>
        </div>
        <div class="">
          <img src="../assets/img/porse.jpeg" alt="" class="lg:w-2/4 w-80 md:w-2/4" />
          <h3>Jeweleries</h3>
        </div>
    </main>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.text-3d {
  text-shadow:
    1px 1px 0 #3a3939,
    /* Shadow layer 1 */
    2px 2px 0 #000,
    /* Shadow layer 2 */
    3px 3px 0 #000,
    /* Shadow layer 3 */
    4px 4px 0 #000,
    /* Shadow layer 4 */
    5px 5px 0 #000;
  /* Shadow layer 5 */
  color: #fff;
  /* Text color */
}
</style>
