<template>
  <h2>两种监听方式 watch 和 watchEffect</h2>
  <fieldset>
    <legend>姓名操作</legend>
    姓氏：<input
      type="text"
      placeholder="请输入姓氏"
      v-model="user.firstName"
    /><br />
    名字：<input
      type="text"
      placeholder="请输入名字"
      v-model="user.lastName"
    /><br />
  </fieldset>
  <fieldset>
    <legend>监听</legend>
    姓名：<input type="text" placeholder="请输入名字" v-model="fullName" /><br />
  </fieldset>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, watch, watchEffect } from "vue";
export default defineComponent({
  name: "ComputedAndWatch",
  setup() {
    // 定义一个响应式对象
    const user = reactive({
      firstName: "东方",
      lastName: "不败",
    });

    const fullName = ref('')
    // 监视---监视指定的数据
    // watch(user, ({firstName, lastName}) => {
    //   fullName.value = firstName + '_' + lastName
    // }, {immediate: true, deep: true})
    // immediate 默认会执行一次watch，deep 深度监测

    // 监视，不需要配置immediate，本身默认就会进行监视，（默认执行一次）
    // watchEffect(() => {
    //   fullName.value = user.firstName + '_' + user.lastName
    // })

    // 监视fullName的数据，改变firstName和lastName
    // watchEffect(() => {
    //   const names = fullName.value.split('_')
    //   user.firstName = names[0]
    //   user.lastName = names[1]
    // })

    // watch 可以监视多个数据
    // watch([user.firstName, user.lastName], () => {
    //   // 这里的代码就没有执行，因为user.firstName,user.lastName 不是响应式的数据
    //   console.log("===")
    // })

    // 当我们使用watch监视非响应式的数据的时候，代码需要改一下
    watch([()=>user.firstName, ()=>user.lastName, fullName], () => {
      // fullName 是响应式数据 不需要()=>
      console.log('===')
    })

    return {
      user,
      fullName
    };
  },
});
</script>