<template>
    <h2>provide inject 子级组件</h2>

    <hr>
    <grand-son></grand-son>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import GrandSon from './provideInjectGrandSon.vue'
export default defineComponent({
    name: 'ProvideInjectSon',
    components: {
        GrandSon
    },
    setup() {
        return{

        }
    }
})
</script>