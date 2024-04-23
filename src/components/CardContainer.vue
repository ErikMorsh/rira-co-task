<template>
  <div class="container">
    <Counter />
  </div>
</template>

<script setup>
import Counter from "./Counter.vue";
</script>

<style scoped>
.container {
  height: 100dvh;

  background-image: url("bg-img.jpg");
  background-size: cover;

  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
