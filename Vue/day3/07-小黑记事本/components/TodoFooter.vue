<template>
  <footer class="footer">
    <!-- 统计 -->
    <span class="todo-count">合 计:<strong> {{ totCount }} </strong></span>
    <!-- 清空 -->
    <button class="clear-completed" @click="delAll">
      清空任务
    </button>
  </footer>
</template>

<script>
export default {
  props: {
    totCount:{
      type:Number
    }
  },
  methods:{
    delAll(){
      this.$emit("delALl")
    }
  }
}
</script>

<style scoped>

</style>