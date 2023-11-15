<script setup>
import son from '@/components/sonvue.vue'
import { ref, provide } from 'vue'
const money = ref(100)
const changeFn = (newMoney) =>{
  money.value = newMoney
}
provide('count',99)
</script>
<template>
  <div>
      父组件
  </div>
  <son car="宝马车" :money="money" @changeMoney="changeFn"></son>
</template>

<style scoped>

</style>
