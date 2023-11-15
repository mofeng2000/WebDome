<template>
  <div class="my-tag">
    <input v-if="isEdit" ref="inp" v-focus
           class="input"
           :value="value"
           type="text"
           placeholder="输入标签" @blur="isEdit=false"
           @keyup.enter="handleEnter"
    />
    <div class="text" v-else @dblclick="handleClick">
      {{ value }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: String
  },
  data() {
    return {
      isEdit: false,
      text: ''
    }
  },
  methods: {
    handleClick() {
      this.isEdit = true;
      // this.$nextTick(() => {
      //   this.$refs.inp.focus();
      // })
    },
    handleEnter(e) {
      if(e.target.value.trim()===''){
        alert("输入为空")
      }
      this.$emit('input', e.target.value)
      this.isEdit = false;
    }
  }

}
</script>

<style scoped lang="less">
.my-tag {
  cursor: pointer;

  .input {
    appearance: none;
    outline: none;
    border: 1px solid #ccc;
    width: 100px;
    height: 40px;
    box-sizing: border-box;
    padding: 10px;
    color: #666;

    &::placeholder {
      color: #666;
    }
  }
}
</style>