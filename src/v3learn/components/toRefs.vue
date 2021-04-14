<template>
  <h2>toRefs的使用</h2>
  <div>name: {{ data.name }}</div>
  <div>age: {{ data.age }}</div>
  <hr>
  <div>name: {{ name }}</div>
  <div>age: {{ age }}</div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
export default defineComponent({
    setup() {
        const data = reactive({
            name: '张三',
            age: 23
        })

        const { name, age } = toRefs(data)

        return {
            data,
            name,
            age
        }
    }
});
</script>