<script setup>
import TodoList from './TodolList(할일).vue'//다른 파일 연결해 보이기위해
import ExArr_ex from './ExArr_ex(배열추가등).vue'
import { ref } from "vue";
const showTodoList = ref(false)
const showArr  = ref(false)
</script>
<template>
  <div class="wrap">
    <div class="container">
      <h1>TodolList Ex</h1>
      <button @click="showTodoList = !showTodoList">
        {{ showTodoList ? "닫기" : "TodoList" }}
      </button>
      <TodoList v-if="showTodoList"/><!--다른 파일 연결해 보이기위해-->
    </div>
    <hr />
    <div class="container">
      <h1>Array 공부</h1>
      <button @click="showArr = !showArr">{{showArr? "닫기" : "배열예제보기"  }}</button>
        <ExArr_ex v-if="showArr"/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrap {
  background-color: antiquewhite;
  display: flex;
  justify-content: center;
}
.container {
    padding: 20px;
  flex: 1;
  text-align: center;
}
</style>
