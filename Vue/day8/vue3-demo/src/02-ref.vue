<script setup>
import { reactive } from 'vue'
import { ref } from 'vue'
const state = reactive({
  count:100
})
const subCount = ref( 100 )
console.log(subCount);
console.log(subCount.value);
const sub = () => {
  subCount.value--
}
const add = () => {
  state.count++
}

</script>
<template>
<div>
  {{state.count}}
</div>
  <div>
    {{subCount}}
  </div>
  <br>
  <button @click="add">+1</button>
  <br>
  <button @click="sub">-1</button>
</template>

<style scoped>

</style>
