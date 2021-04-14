<template>
    <h2>provide和inject 父组件</h2>
    <p>当前颜色：{{ color }}</p>
    <button @click="color='red'">红色</button>
    <button @click="color='yellow'">黄色</button>
    <button @click="color='blue'">蓝色</button>

    <hr>
    <son />
</template>

<script lang="ts">
import { defineComponent, provide, ref } from 'vue'
import Son from './provideInjectSon.vue'
export default defineComponent({
    name: 'Grandpa',
    components: {
        Son
    },
    // 使用provide和inject 可以实现跨层级组件通信
    setup() {
        const color = ref('red')

        provide('color', color)

        return {
            color
        }
    }
})
</script>