<!--<script>-->
<!--export default {-->
<!--  setup () {-->
<!--    const message = 'hello Vue3'-->
<!--    const logMessage = () => {-->
<!--      console.log(message)-->
<!--    }-->
<!--    return {-->
<!--      message,-->
<!--      logMessage-->
<!--    }-->
<!--  }-->
<!--}-->
<!--</script>-->
<script setup>
const message = 'hello Vue3'
const logMessage = () => {
  console.log(message)
}
</script>
<template>
  {{ message }}
  <button @click="logMessage">按钮</button>
</template>

<style scoped>

</style>
