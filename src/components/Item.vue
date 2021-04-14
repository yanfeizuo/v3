<template>
  <li @mouseenter="mouseHandler(true)" @mouseleave="mouseHandler(false)" :style="{backgroundColor: bgColor,color:myColor}">
    <label>
      <input type="checkbox" v-model="computedChecked" />
      <span>{{ todo.title }}</span>
    </label>
    <button class="btn btn-danger" v-show="isShow" @click="delItem(todo.id)">删除</button>
  </li>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import { Todo } from "@/types/todo";
export default defineComponent({
  name: "Item",
  props: {
      todo: {
          type: Object as () => Todo,
          required: true
      },
      delTodo: {
          type: Function,
          required: true
      },
      updateTodo: {
          type: Function,
          required: true
      }
  },
  setup(props) {
      const bgColor = ref("white")
      const myColor = ref("black")
      const isShow = ref(false)
      const mouseHandler = (flag: boolean) => {
          if (flag) {
              bgColor.value = "pink"
              myColor.value = "green"
              isShow.value = true
          } else {
              bgColor.value = "white"
              myColor.value = "black"
              isShow.value = false
          }
      }
      
      const delItem = (id: number) => {
          props.delTodo(id)
      }

      const computedChecked = computed({
          get() {
              return props.todo.isChecked
          },
          set(val) {
              props.updateTodo(props.todo.id, val)
          }
      })

      return {
          mouseHandler,
          bgColor,
          myColor,
          isShow,
          delItem,
          computedChecked
      }
  }
});
</script>

<style scoped>
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
</style>