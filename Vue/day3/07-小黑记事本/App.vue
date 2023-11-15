<template>
  <!-- 主体区域 -->
  <section id="app">
    <!-- 输入框 -->
    <TodoHeader :res="res" @changeRes="add"></TodoHeader>

    <!-- 列表区域 -->
    <TodoMain :list="list" @del="del"></TodoMain>

    <!-- 统计和清空 -->
    <TodoFooter :totCount="totCount" @delALl="delALl"></TodoFooter>
  </section>
</template>

<script>
import TodoFooter from "./components/TodoFooter";
import TodoMain from "./components/TodoMain";
import TodoHeader from "./components/TodoHeader";

export default {
  data() {
    return {
      res: '',
      list: JSON.parse(localStorage.getItem('list')) || [{id: 1, name: '打篮球'}],
      totCount: 0
    }
  },
  components: {
    TodoHeader,
    TodoMain,
    TodoFooter
  },
  methods: {
    add(value) {
      console.log(value)
      this.list.unshift({
        id: new Date(),
        name: value
      })
      this.totCount++;
    },
    del(id) {
      //console.log(id)
      this.list = this.list.filter(item =>
          item.id !== id
      )
      this.totCount--;
    },
    delALl() {
      this.list = [];
      this.totCount = 0;
    }
  },
  watch: {
    list: {
      deep: true,
      handler(newValue) {
        localStorage.setItem('list', JSON.stringify(newValue))
      }
    }
  }
}
</script>

<style>

</style>
