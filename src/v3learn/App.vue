<template>
<!-- Vue2中的html模板中必须要有一对根标签，Vue3组件的html模板中可以没有根标签 -->
  <img alt="Vue logo" src="./assets/logo.png">
  <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
  <!-- <setup-ref></setup-ref> -->
  <!-- <reactive></reactive> -->
  <!-- <computed-watch></computed-watch> -->
  <!-- <watch-watch-effect></watch-watch-effect> -->
  <!-- <lifecircle></lifecircle> -->
  <!-- <my-hook></my-hook> -->
  <!-- <to-refs></to-refs> -->
  <!-- <ref /> -->
  <!-- <shallowreactive-and-shallowref></shallowreactive-and-shallowref> -->
  <!-- <readonly-and-shallowreadonly></readonly-and-shallowreadonly> -->
  <!-- <toraw-and-markraw></toraw-and-markraw> -->
  <!-- <to-ref></to-ref> -->
  <!-- <custom-ref></custom-ref> -->
  <!-- <provide-inject></provide-inject> -->
  <!-- <judge-type></judge-type> -->
  <!-- <my-teleport></my-teleport> -->
  <test-suspense></test-suspense>
</template>

<script lang="ts">
// 这里可以使用ts的代码

// defineComponent函数，目的是定义一个组件，内部可以传入一个配置对象
import { defineComponent } from 'vue';
// 引入一个子级组件
import HelloWorld from './components/HelloWorld.vue';
import SetupRef from './components/setup_ref.vue';
import Reactive from './components/reactive.vue';
import ComputedWatch from './components/computed_watch.vue';
import WatchWatchEffect from './components/watch_watchEffect.vue';
import Lifecircle from './components/lifecircle.vue';
import MyHook from './components/hook.vue';
import ToRefs from './components/toRefs.vue';
import Ref from './components/ref.vue';
import ShallowreactiveAndShallowref from './components/shallowReactive_shallowRef.vue';
import ReadonlyAndShallowreadonly from './components/readonly_shallowreadonly.vue';
import TorawAndMarkraw from './components/toRawAndmarkRaw.vue';
import ToRef from './components/toRef.vue';
import CustomRef from './components/customRef.vue';
import ProvideInject from './components/provideInject.vue';
import JudgeType from './components/judgeType.vue'
import MyTeleport from './components/teleport.vue';
import TestSuspense from './components/suspense.vue';


// 暴露出去一个定义好的组件
export default defineComponent({
  // 当前组件的名字是App
  name: 'App',
  // 注册组件
  components: {
    // 注册一个子级组件
    // HelloWorld,
    // SetupRef,
    // Reactive,
    // ComputedWatch,
    // WatchWatchEffect,
    // Lifecircle,
    // MyHook,
    // ToRefs,
    // Ref,
    // ShallowreactiveAndShallowref,
    // ReadonlyAndShallowreadonly,
    // TorawAndMarkraw,
    // ToRef,
    // CustomRef,
    // ProvideInject,
    // JudgeType,
    // MyTeleport,
    TestSuspense
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
