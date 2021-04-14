<template>
  <h2>自定义hook</h2>
  <h3>x: {{ x }},y: {{ y }}</h3>
  <hr />
  <h2 v-if="loading">正在加载中...</h2>
  <h2 v-else-if="errorMsg">错误信息：{{ errorMsg }}</h2>
  <ul v-else>
    <li>{{ data.id }}</li>
    <li>{{ data.address }}</li>
    <li>{{ data.distance }}</li>
  </ul>
  <hr />
  <ul v-for="item in data" :key="item.id">
    <li>{{ item.id }}</li>
    <li>{{ item.title }}</li>
    <li>{{ item.price }}</li>
  </ul>
</template>

<script lang="ts">
import { defineComponent, watch } from "vue";
import useMousePosition from "../hook/useMousePosition";
import useRequests from "../hook/useRequests";

// 定义接口，约束对象的类型
interface AddressData {
  id: number;
  address: string;
  distance: string;
}
interface ProductsData {
  id: string;
  title: string;
  price: number;
}
export default defineComponent({
  // 需求一：用户在页面中点击的页面，把点击的位置的横纵坐标收集并展示出来

  setup() {
    // 获取鼠标位置
    const { x, y } = useMousePosition();

    // 发送请求
    // const { loading, data, errorMsg } = useRequests<AddressData>('/data/address.json')   // 获取对象数据
    const { loading, data, errorMsg } = useRequests<ProductsData[]>(
      "/data/products.json"
    ); // 获取数组

    // 监视
    watch(data, () => {
      if (data.value) {
        console.log(data.value.length);
      }
    });

    return {
      x,
      y,
      loading,
      data,
      errorMsg,
    };
  },
});
</script>
