<template>
  <div class="son" style="border:3px solid #000;margin:10px">
    <!-- 3.直接使用props的值 -->
    我是Son组件
    {{ title }}
    <button @click="btn">
      修改父组件title
    </button>
  </div>
</template>

<script>
export default {
  name: 'Son-Child',
  // 2.通过props来接受
  props: ['title'],
  methods: {
    btn() {
      this.$emit("changeTitle", '传智播客');
    }
  }

}
</script>

<style>

</style>