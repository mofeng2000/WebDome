<template>
  <div>
    <h1>自定义指令</h1>
    <input type="text" v-focus ref="inp">
  </div>
</template>

<script>
export default {
  //局部组件
  directives: {
    //指令名:指令配置项
    focus: {
      inserted(el) {
        el.focus();
      }
    }
  }

}

</script>

<style>

</style>