import { ref } from 'vue'
// 引入axios
import axios from 'axios'
// 发送ajax请求
export default <T>(url: string) => {
    // 加载的状态
    const loading = ref(true)
    // 请求成功的数据
    const data = ref<T | null>(null)
    // 错误信息
    const errorMsg = ref('')
    // 发送请求
    axios.get(url).then(res => {
        // 改变加载状态
        loading.value = false
        data.value = res.data
    }).catch(err => {
        // 改变加载状态
        loading.value = false
        errorMsg.value = err.message || '未知错误'
    })

    return {
        loading,
        data,
        errorMsg
    }
}