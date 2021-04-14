<template>
    <h2>toRef的使用及特点</h2>
    <div>state: {{ state }}</div>
    <div>age: {{ age }}</div>
    <div>money: {{ money }}</div>
    <button @click="update">更新数据</button>

    <hr>
    <to-ref-child :age="age"></to-ref-child>

</template>

<script>
import { defineComponent, reactive, ref, toRef } from 'vue'
import ToRefChild from './toRefChild'
export default defineComponent({
    /*
        为源响应式对象上的某个属性创建一个ref对象，二者内部操作的是同一个数据值，更新时二者是同步的
        却别ref：拷贝了一份新的数据值单独操作，更新时互相不影响
        应用：当要将某个prop的ref传递给复合函数时，toRef很有用
    */
   components: {
       ToRefChild
   },
   setup() {
       const state = reactive({
           name: '张三',
           age: 1,
           money: 100
       })
        // 将响应式数据state对象中的某个属性变成了ref对象了
       const age = toRef(state, 'age')

       // 把响应式对象中的某个属性使用ref进行包装，变成了一个ref对象
       const money = ref(state.money)

        const update = () => {
            // state.age += 2
            // state.money += 2

            age.value += 2
            money.value += 2
        }

       return {
           state,
           age,
           money,
           update
       }
   }
})
</script>