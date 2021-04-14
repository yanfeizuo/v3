<template>
    <h3>lifecircle Child</h3>
    <div>{{ msg }}</div>
    <button @click="update">更新数据</button>
</template>

<script>
import { defineComponent, onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onUnmounted, onUpdated, ref } from 'vue'
export default defineComponent({
    beforeCreate() {
        console.log('v2中的beforeCreate')
    },
    created() {
        console.log('v2中的created')
    },
    beforeMount() {
        console.log('v2中的beforeMount')
    },
    mounted() {
        console.log('v2中的mounted')
    },
    beforeUpdate() {
        console.log('v2中的beforeUpdate')
    },
    updated() {
        console.log('v2中的updated')
    },
    beforeUnmount() {
        console.log('v2中的beforeUnmount')
    },
    unmounted() {
        console.log('v2中的unmounted')
    },
    setup() {
        console.log('v3中的setup')
        const msg = ref('abc')
        const update = () => {
            msg.value += "==="
        }

        onBeforeMount(() => {
            console.log('v3中的onBeforeMount')
        })
        onMounted(() => {
            console.log('v3中的onMounted')
        })
        onBeforeUpdate(() => {
            console.log('v3中的onBeforeUpdate')
        })
        onUpdated(() => {
            console.log('v3中的onUpdated')
        })
        onBeforeUnmount(() => {
            console.log('v3中的onBeforeUnmount')
        })
        onUnmounted(() => {
            console.log('v3中的onUnmounted')
        })

        return {
            msg,
            update
        }
    }
})
</script>