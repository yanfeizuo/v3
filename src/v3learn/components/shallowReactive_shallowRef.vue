<template>
    <h2>shallowReactive和shallowRef</h2>
    <div>m1: {{ m1 }}</div>
    <div>m2: {{ m2 }}</div>
    <button @click="updateData">更新数据</button>
</template>

<script lang="ts">
import { defineComponent, shallowReactive, shallowRef } from 'vue'
export default defineComponent({
    /*
        shallowReactive：只处理了对象内最外层属性的响应式（也就是浅响应）
        shallowRef：只处理了value 的响应式，不进行对象的reactive处理
        什么时候用浅响应式呢
            一般情况下使用ref和reactive即可
            如果有一个对象数据，结构比较深，但变化只是外层属性变化，用shallowReactive
            如果有一个对象数据，后面会产生新的对象替换，用shallowRef
    */

    setup() {

        const m1 = shallowReactive({
            name: "张三",
            age: 23,
            car: {
                brand: '奔驰'
            }
        })
        const m2 = shallowRef({
            name: "张三",
            age: 23,
            car: {
                brand: '奔驰'
            }
        })
        const updateData = () => {
            // m1.name = "李四"
            // m1.car.brand = "宝马"   // 页面无变化
            m2.value.name = "李四"      //页面无变化
        }
        return {
            m1,
            m2,
            updateData
        }
    }
})
</script>