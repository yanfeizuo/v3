<template>
    <h2>provide inject 孙级组件</h2>
    <div :style="{color}">{{ color }}</div>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue'
export default defineComponent({
    name: 'ProvideInjectSon',
    setup() {

        const color = inject('color')

        return{
            color
        }
    }
})
</script>