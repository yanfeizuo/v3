<template>
    <h2>响应式数据的判断</h2>
</template>

<script lang="ts">
import { defineComponent, isProxy, isReactive, isReadonly, isRef, reactive, readonly, ref } from 'vue'
export default defineComponent({
    name: "JudgeType",

    setup() {
        // isRef: 检查一个值是否为一个ref对象
        console.log(isRef(ref({})))

        // isReactive: 检查一个对象是否由reactive创建的响应式代理
        console.log(isReactive(reactive({})))

        // isReadonly: 检查一个对象是否由readonly创建的只读代理
        console.log(isReadonly(readonly({})))

        // isProxy: 检查一个对象是否是由reactive或readonly方法创建的代理
        console.log(isProxy(readonly({})))
        console.log(isProxy(reactive({})))
    }
})
</script>