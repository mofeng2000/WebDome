<template>
  <div class="app">
    <h4>父组件 --
      <button>获取组件实例</button>
    </h4>
    <BaseForm ref="baseForm"></BaseForm>
    <div>
      <button @click="handleGet">获取数据</button>
      <button @click="handleReset">重置数据</button>
    </div>
  </div>
</template>

<script>
import BaseForm from './components/BaseForm.vue'

export default {
  components: {
    BaseForm,
  },
  methods: {
    handleGet() {
      console.log(this.$refs.baseForm.getFormData());
    },
    handleReset() {
      this.$refs.baseForm.resetFormData()
    }

  }
}
</script>

<style>
</style>