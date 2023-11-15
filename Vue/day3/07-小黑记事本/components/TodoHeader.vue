<template>
  <!-- 输入框 -->
  <header class="header">
    <h1>小黑记事本</h1>
    <input @keyup.enter="add" placeholder="请输入任务" class="new-todo" v-model="todoRes"/>
    <button class="add" @click="add">添加任务</button>
  </header>
</template>

<script>
export default {
  data() {
    return {
      todoRes: "",
    }
  },
  methods: {
    add() {
      if (this.todoRes.trim() === '') {
        alert("请输入内容再添加")
        return
      }
      this.$emit('changeRes', this.todoRes)
      this.todoRes = ''
    }
  }

}
</script>

<style scoped>

</style>