<template>
    <h2>toRaw 和 markRaw</h2>
    <div>state: {{ state }}</div>
    <button @click="testToRaw">toRaw</button>
    <button @click="testMarkRaw">markRaw</button>
</template>

<script lang="ts">
import { defineComponent, markRaw, reactive, toRaw } from 'vue';
interface UserInfo {
    name: string;
    age: number;
    likes?: string [];
}
export default defineComponent({

    /*
        toRaw
            返回由reactive 或readonly方法转换成响应式代理的普通对象
            这是一个还原方法，可用于临时读取，访问不会被代理/跟踪,写入时也不会触发界面更新

        markRaw
            标记一个对象，使其永远不会转换为代理，返回对象本身
            应用场景
                有些值不应被设置为响应式的，例如复杂的第三方类实例或vue组件对象
                当渲染具有不可变数据源的大列表时，跳过代理转换可以提高性能
    */

    setup() {
        const state = reactive<UserInfo>({
            name: '张三',
            age: 23
        })

        const testToRaw = () => {
            // 把代理对象变成了普通对象，数据变化，界面不变化
            const user = toRaw(state)
            user.name += '123'
        }

        const testMarkRaw = () => {
            const likes = ['吃', '喝']
            state.likes = markRaw(likes)
            setInterval(() => {
                if (state.likes) {
                    state.likes[0] += '123'
                    console.log("setInterval")
                }
            }, 1000)
        }

        return {
            state,
            testToRaw,
            testMarkRaw
        }
    }
})
</script>