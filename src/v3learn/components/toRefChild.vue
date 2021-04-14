<template>
    <h2>toRef 子级组件</h2>
    <div>age: {{ age }}</div>
    <div>length: {{ length }}</div>
</template>

<script lang="ts">
import { computed, defineComponent, Ref, toRef } from 'vue';
function useGetLength(age: Ref) {
    return computed(() => {
        return age.value.toString().length
    })
}
export default defineComponent({
    name: 'ToRefChild',
    props: {
        age: {
            type: Number,
            required: true
        }
    },
    setup(props) {
        const length = useGetLength(toRef(props, 'age'))

        return {
            length
        }
    }
})
</script>