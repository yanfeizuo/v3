<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <Header :addTodo="addTodo" />
      <List :todos="todos" :delTodo="delTodo" :updateTodo="updateTodo" />
      <Footer
        :todos="todos"
        :checkAll="checkAll"
        :clearCheckedTodo="clearCheckedTodo"
      />
    </div>
  </div>
  <div class="beian">
    <a href="https://beian.miit.gov.cn/" target="_blank">皖ICP备20000145号</a>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs, watch } from "vue";
import Header from "@/components/Header.vue";
import List from "@/components/List.vue";
import Footer from "@/components/Footer.vue";
import { Todo } from "@/types/todo";
import { saveTodos, readTodos } from "./utils/localStorageUtils";
export default defineComponent({
  name: "App",
  components: {
    Header,
    List,
    Footer,
  },
  setup() {
    // const state = reactive<{todos: Todo[]}>({
    //   todos: [
    //     { id: 1, title: "奔驰", isChecked: false },
    //     { id: 2, title: "宝马", isChecked: true },
    //     { id: 3, title: "奥迪", isChecked: false }
    //   ]
    // })

    const state = reactive<{ todos: Todo[] }>({
      todos: [],
    });

    onMounted(() => {
      setTimeout(() => {
        state.todos = readTodos();
      }, 1000);
    });

    const addTodo = function (todo: Todo) {
      state.todos.unshift(todo);
    };

    const delTodo = (id: number) => {
      const confirm = window.confirm("确定删除吗？");
      if (!confirm) return;
      state.todos.forEach((item, index) => {
        if (item.id === id) {
          state.todos.splice(index, 1);
          return;
        }
      });
    };

    const updateTodo = (id: number, isChecked: boolean) => {
      state.todos.forEach((item, index) => {
        if (item.id === id) {
          state.todos[index].isChecked = isChecked;
          return;
        }
      });
    };

    const checkAll = (isChecked: boolean) => {
      state.todos.forEach((item) => {
        item.isChecked = isChecked;
      });
    };

    const clearCheckedTodo = () => {
      state.todos = state.todos.filter((item) => !item.isChecked);
    };

    // watch(() => state.todos, (value) => {
    //   saveTodos(value)
    // }, {
    //   deep: true
    // })

    watch(() => state.todos, saveTodos, { deep: true });

    return {
      ...toRefs(state),
      addTodo,
      delTodo,
      updateTodo,
      checkAll,
      clearCheckedTodo,
    };
  },
});
</script>
<style scoped>
.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
.beian {
  width: 100%;
  min-width: 1250px;
  position: fixed;
  z-index: 302;
  bottom: 0;
  left: 0;
  height: 40px;
  overflow: hidden;
  zoom: 1;
  margin: 0;
  background-color: #fbfbfb;
  text-align: left;
  line-height: 40px;
  font-size: 14px;
  text-align: center;
}
.beian a {
  color: #bbb;
}
</style>