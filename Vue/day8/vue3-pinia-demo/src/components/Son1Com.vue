<template>
    <div>SonCom1</div>
  <button @click="counterStore.addCount">+</button>
</template>

<script setup>
import { useCounterStore } from '@/store/counter'
const counterStore = useCounterStore()
</script>

<style scoped>

</style>