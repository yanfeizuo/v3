<template>
  <h2>readonly 和 shallowReadonly</h2>
  <div>state: {{ state }}</div>
  <!-- <div>state1: {{ state1 }}</div> -->
  <div>state2: {{ state2 }}</div>
  <button @click="update">更新数据</button>
</template>

<script>
import { defineComponent, reactive, readonly, shallowReadonly } from "vue";
export default defineComponent({
  /*
        readonly:
            深度只读数据
            获取一个对象（响应式或纯对象）或ref并返回原始代理的只读代理
            只读代理是深层次的：访问的任何嵌套property都是只读的
        shallowReadonly:
            浅只读数据
            创建一个代理，使其自身的property为只读，但不执行嵌套对象的深度只读转换
        应用场景：
            在某些特定情况下，我们可能不希望对数据进行更新的操作，那就可以包装成一个只读代理对象来读取数据，而不能修改或删除

    */

  setup() {
    const state = reactive({
      name: "张三",
      age: 23,
      car: {
        brand: "宝马",
      },
    });

    // const state1 = readonly(state)

    const state2 = shallowReadonly(state);

    const update = () => {
      // state.name = '李四'
      // state.car.brand = '奔驰'

      //   state1.name = "李四";
      //   state1.car.brand = "奔驰";

      state2.name = "李四";
      state2.car.brand = "奔驰";
    };

    return {
      state,
      //    state1,
      state2,
      update,
    };
  },
});
</script>