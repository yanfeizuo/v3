<template>
    <!-- 
        在vue3中： 组件可以没有根标签，内部会将多个标签包含在一个Fragment虚拟元素中
        好处：减少标签层级，减少内存占用
     -->

    <h2>测试一</h2>
    <h2>测试二</h2>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'Fragment'
})
</script>