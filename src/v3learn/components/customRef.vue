<template>
    <h2>customRef 的使用</h2>
    <input type="text" v-model="keyword">
    <p>{{ keyword }}</p>
</template>

<script lang="ts">
import { customRef, defineComponent, ref } from 'vue';
function useDebouncedRef<T>(value: T, delay=200) {
    let timer: number
    return customRef((track, trigger) => {
        return {
            get() {
                // 告诉vue更新数据
                track()
                return value
            },
            set(v: T) {
                clearTimeout(timer)
                timer = setTimeout(() => {
                    value = v
                    // 告诉vue更新界面
                    trigger()
                }, delay)
            }
        }
    })
}
export default defineComponent({
    name: "CustomRef",
    /*
        customRef
            创建一个自定义的ref，并对其依赖项跟踪和更新触发进行显示控制
    */

   setup() {
    //    const keyword = ref('')
        const keyword = useDebouncedRef('123', 500)

       return {
           keyword
       }
   }
})
</script>