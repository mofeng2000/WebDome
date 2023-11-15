import { defineStore } from 'pinia'
import { ref } from 'vue'
// 定义 store
export const useCounterStore = defineStore('counter', () => {
    // 声明数据 store
    const count = ref(100)
    // 方法 = action
    const msg = ref('hello pinia')
    const addCount = () => count.value++
    const subCount = () => count.value--
    return {
        count,
        msg,
        addCount,
        subCount
    }
},{
    persist: true //开启当前模块的持久化
    }
)