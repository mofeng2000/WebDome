<template>
  <div>
    <MyDialog>
      <template v-slot:head>
        <div>我是大标题</div>
      </template>
      <template v-slot:content>
        <div>我是内容</div>
      </template>
      <!--      v-solt:插槽名=#插槽名-->
      <template #footer>
        <button>确定</button>
        <button>取消</button>
      </template>
    </MyDialog>
  </div>
</template>

<script>
import MyDialog from './components/MyDialog.vue'

export default {
  data() {
    return {}
  },
  components: {
    MyDialog
  }
}
</script>

<style>
body {
  background-color: #b3b3b3;
}
</style>