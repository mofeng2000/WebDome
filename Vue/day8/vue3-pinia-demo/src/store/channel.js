import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from 'axios'
// 定义 store
export const useChannelStore = defineStore('channel', () => {
    // 声明数据 store
   const channelList = ref ([])
    // 方法 = action
    const getList = async () => {
       //支持异步
        const { data: { data } } = await axios.get("http://geek.itheima.net/v1_0/channels")
        channelList.value = data.channels
        console.log(data.channels);
    }
    return {
        channelList,
        getList
    }
})