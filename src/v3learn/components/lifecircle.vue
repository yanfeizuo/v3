<template>
    <h2>Vue3中的生命周期</h2>
    <lifecircle-child v-if="show" />
    <button @click="show=!show">切换child</button>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

import LifecircleChild from './lifecirclechild.vue'

export default defineComponent({
    components: {
        LifecircleChild
    },
    setup() {
        const show = ref(true)
        return {
            show
        }
    }
})
</script>