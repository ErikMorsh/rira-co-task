<template>
  <div class="card">
    <p class="number">{{ counter }}</p>
    <button v-ripple class="button" @click="handleClick">
      Click to increase by 1
    </button>
  </div>
</template>

<script setup>
import { ref } from "vue";

const counter = ref(0);

// Handle Increment
function handleClick() {
  counter.value = counter.value + 1;
}
</script>

<style scoped>
.card {
  width: 500px;
  padding-top: 50px;
  padding-bottom: 50px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.2),
    rgba(255, 255, 255, 0.05)
  );
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.3);
}

.number {
  font-size: 4rem;
  font-weight: 900;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  color: rgba(255, 255, 255, 0.9);

  margin-bottom: 50px;
}

.button {
  position: relative;
  padding: 10px 20px;
  border-radius: 10px;
  border: none;
  box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.3);
  background-color: rgba(255, 255, 255, 0.8);
  color: rgba(0, 0, 0, 0.8);

  text-transform: uppercase;
  font-family: "Trebuchet MS";
  font-weight: 300;

  cursor: pointer;
  transition: all 0.2s ease-in-out;

  overflow: hidden;
}

.button:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 10px 0 rgba(0, 0, 0, 0.3);
  background-color: rgba(255, 255, 255, 1);
}
.button:active {
  transform: translateY(0px);
  box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.3);
}
</style>
