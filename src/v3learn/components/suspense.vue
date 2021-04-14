<template>
    <h2>Suspense组件</h2>
    <h2>它允许我们的应用程序在等待异步组件时渲染一些后备内容，可以让我们创建一个平滑的用户体验</h2>
    <suspense>
        <template #default>
            <!-- 异步组件 -->
            <!-- <asyncComponent /> -->
            <async-address></async-address>
        </template>
        <template v-slot:fallback>
            <!-- loading的内容 -->
            <h2>Loading...</h2>
        </template>
    </suspense>
</template>

<script lang="ts">
import { defineAsyncComponent, defineComponent } from 'vue';
// 引入组件：静态引入和动态引入

// vue2中的动态引入组件的写法(在vue3中这种写法不行)
// const AsyncComponent = () => import('./asyncComponent.vue')

// vue3中引入动态组件
// const AsyncComponent = defineAsyncComponent(() => import('./asyncComponent.vue'))
//引入静态组件
// import AsyncComponent from './asyncComponent.vue'
import AsyncAddress from './asyncAddress.vue'
export default defineComponent({
    name: "Suspense",
    components: {
        // AsyncComponent,
        AsyncAddress
    }
})
</script>