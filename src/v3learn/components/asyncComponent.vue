<template>
    <h2>asyncComponent异步子级组件</h2>
    <h3>{{ msg }}</h3>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name: "asyncComponent",
    setup() {

        // return {}

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({
                    msg: 'what are you doing'
                })
            }, 2000)
        })
    }
})
</script>