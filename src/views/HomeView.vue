<script setup>
  import { useCounterStore } from '@/stores/counter'
  import Counter from '@/components/Counter.vue';

  const storeCounter = useCounterStore()
</script>

<template>
  <div class="home">
    <Counter />
    <div class="buttons">
      <button @click="storeCounter.decreaseCount">-</button>
      <button @click="storeCounter.increaseCount">+</button>
    </div>
    <hr>
    <div>The counter is: {{ storeCounter.oddOrEven }}</div>
  </div>
  <hr>
  <h3>Edit counter:</h3>
  <input type="number" v-model="storeCounter.count">
</template>

<style scoped>
  .count {
    font-size: 60px;
    margin: 20px;
  }

  .buttons button {
    font-size: 40px;
    margin: 10px;
    font-family: 'monospace', 'Courier New';
  }

  input {
    font-size: 2rem;
    width: 5ch;
  }
</style>
