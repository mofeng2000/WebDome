<template>
  <div class="son">son</div>
  {{car}}
  {{money}}
  <button @click="buy"> 花钱</button>
  {{data}}
</template>

<script setup>
import { inject } from 'vue'
const props = defineProps({
  car: String,
  money:Number
})
console.log(props);
console.log(props.car);
console.log(props.money);
const emit = defineEmits(['changeMoney'])
const buy = () => {
    // 需要emit触发事件
  emit('changeMoney',50)
}
const data = inject('count')
defineOptions({
  name: 'SonVue'
})
</script>

<style scoped>
.son {
  width: 300px;
  height: 300px;
  background: orangered;
}
</style>