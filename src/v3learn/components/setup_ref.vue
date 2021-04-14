<template>
    <h2>setup和ref的基本使用</h2>
    <div>{{ count }}</div>
    <button @click="updateCount">点击++</button>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
    name: "SetupAndRef",

    //setup是组合api的入口函数
    // setup(props, context) {
    setup(props, {attrs, slots, emit}) {
        // let count = 0;  //此时的数据并不是响应式数据
        // ref是一个函数，作用：定义一个响应式的数据
        // html的模板中是不需要count.value 的写法的
        // 一般用来定义一个基本类型的响应式数据
        const count = ref(0);
        console.log(count);

        function updateCount() {
            // 报错原因：count是一个Ref对象，对象是不能进行++的
            // count++;
            count.value++;
        }

        return {
            count,
            updateCount
        }
    }
})
</script>
<style scoped>

</style>