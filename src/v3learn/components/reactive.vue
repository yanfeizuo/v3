<template>
  <h2>reactive 的基本使用</h2>
  <div>{{ user.name }}</div>
  <div>{{ user.age }}</div>
  <div>{{ user.gender }}</div>
  <div>{{ user.add }}</div>
  <div>{{ user.wife }}</div>
  <button @click="updateUser">更新数据</button>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";

export default defineComponent({
  name: "Reactive",
  setup() {
    const obj = {
      name: "张三",
      age: 20,
      add: "中国",
      wife: {
        name: "李四",
        age: 18,
      },
    };
    // 把数据变成响应式的数据
    // 返回的是一个Proxy的代理对象，被代理的目标对象就是obj对象
    // user现在是代理对象，obj是目标对象
    const user = reactive<any>(obj);

    // 如果操作代理对象，目标对象中的数据也会随之变化，同时如果想要在操作数据的时候，界面也要跟着发生重新渲染，那么也是操作代理对象
    const updateUser = () => {
      user.name = "王五";
      user.age = 21;
      user.gender = "男";
      delete user.add;
    };

    return {
      user,
      updateUser,
    };
  },
});
</script>