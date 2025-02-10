<template>
    <div class="counter">
      <h2>Experience</h2>
      <p>Count: {{ count }}</p>
      <button @click="increment">Increment</button>
      <button @click="decrement">Decrement</button>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const count = ref(0);
  
  const increment = () => {
    count.value++;
  };
  
  const decrement = () => {
    count.value--;
  };
  </script>
  
  <style scoped>
  .counter {
    text-align: center;
    font-family: Arial, sans-serif;
  }
  button {
    margin: 5px;
    padding: 8px 12px;
    font-size: 16px;
    cursor: pointer;
  }
  </style>
  