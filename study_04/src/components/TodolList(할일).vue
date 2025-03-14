<script setup>
import { ref } from "vue";
// 할일 목록데이터
const todos = ref([
  { id: 1, name: "Vue 공부하기", isComplete: false },
  { id: 2, name: "운동하기", isComplete: true },
  { id: 3, name: "책 읽기", isComplete: false },
]);
// 할일 추가
const newTodo = ref("");
console.log(todos);
const addTodo = () => {
  if (newTodo.value.trim()) {
    //새로입력한 것들을 배열로 추가해주는 행동
    todos.value.push({
      id: Date.now(),
      name: newTodo.value,
      isComplete: false,
    });
    console.log(todos);
    newTodo.value = "";
  }
};
// 할일 완료
const toggleComplete = (todo) => {
  todo.isComplete = !todo.isComplete;
};
// 완료된 항목 삭제 기능
const deleteCompleted = () => {
  todos.value = todos.value.filter((todo) => !todo.isComplete);
};
</script>
<template>
  <div class="todo_wrap">
    <h1>📝 Todo List</h1>
    <!-- 할일 입력 -->
    <div class="input_group">
      <input v-model="newTodo" placeholder="새로운 할일 목록 입력..." />
      <button @click="addTodo">추가</button>
    </div>
    <h2>📌 진행 중</h2>
    <ul>
      <template v-for="todo in todos" :key="todo.id"><!--for문 돌리기 위해서는 위에 하나 더 있는게 좋아 탬플릿으로 감쌈 -->
        <li v-if="!todo.isComplete">
          <input type="checkbox" @change="toggleComplete(todo)" />
          {{todo.name}} <!--아닌것이 진행중이어야-->
        </li>
      </template>
    </ul>
    <!-- 완료된 할 일 목록 -->
    <h2>✅ 완료</h2>
    <ul>
      <template v-for="todo in todos" :key="todo.id">
        <li v-if="todo.isComplete">
          <input
            type="checkbox"
            checked
            @change="toggleComplete(todo)" />
            <del>{{ todo.name }}</del><!--checked 체크되고, del태그는 지움 줄 그어짐-->
        </li>
      </template>
    </ul>
    <!-- 완료된 목록 삭제  버튼-->
    <button @click="deleteCompleted" class="delete_btn">
      완료된 항목 삭제
    </button>
  </div>
</template>

<style lang="scss" scoped>
.todo_wrap {
  display: flex;
  flex-direction: column;
  width: 300px;  
  padding: 10px 0;
  margin: auto;
}
.input_group{
    display: flex;
    justify-content: space-around;
    margin: 20px;
}
input{
    text-align: center;
}
button {
  padding: 5px 10px;
  cursor: pointer;
  
}
ul {
  list-style: none;
  padding: 0;
}
li {
  display: flex;
  align-items: center;
  gap: 5px;
  margin-bottom: 5px;
}
.delete-btn {
  margin-top: 10px;
  background: red;
  color: white;
  border: none;
  padding: 5px 10px;
}
</style>
