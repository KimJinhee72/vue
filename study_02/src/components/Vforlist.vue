<script setup>
import { ref , reactive } from "vue";

const items = ref([
  { message: "Foo", children: ["A", "B"] },
  { message: "Bar", children: ["C", "D"] },
]);
const parentMassage = ref("Parent")
// //구조분해 할당
// const user = {
//   name: "홍길동",
//   age: 25,
//   job: "개발자",
// };
// console.log(user.name);
// console.log(user.age);
// const {name,age} = user//객체를 따로 담아 다시 user담음 잠깐 복사 안에 둠 변수 선언아님.
// console.log(name);
// console.log(user);
const myObject = reactive({
  title: "Vue에서 목록을 작성하는 방법",// key:title value:"Vue에서 목록을 작성하는 방법"
  author: "홍길동",
  publishedAt: "2016-04-10",
});
// 할 일 목록 (isComplete 값에 따라 완료 여부 결정)
const todos = ref([
  { name: "청소하기", isComplete: false },
  { name: "공부하기", isComplete: true },
  { name: "운동하기", isComplete: false },
]);
</script>

<template>
    <div>
        <h1>v-for 예제</h1>
        <h2>1.기본 리스트 반복</h2>
        <ul>
            <li v-for="item in items" :key="item.message" >
                {{item.message}} 
                <ul>
                    <li v-for="child in item.children" :key="child"><!--items가 아니라 앞에 item을 담아두었으니 item. 으로 한다-->
                    {{child}}

                    </li>
                </ul>
            </li>
        </ul>
        <hr>
        <h2>2. 부모에 같이 출력</h2>
        <ul>
            <li v-for="(item, index) in items" :key="index">
                {{parentMassage}} - {{index}} -{{item.message}}
            </li>
        </ul>
        <hr>
        <h2>3.구조 분해 할당</h2>
        <!-- 구조분해할당이란 객체나 배열에서 필요한 값만 골라서 변수에 저장 -->
        <ul>
            <li v-for="{message} in items" :key="message">
            {{message}}<!--{{item.message}} 같음-->
            </li>
        </ul>
        <hr>
        <h2>4. 중첩 반복</h2>
        <ul>
            <!-- 부모 요소 반복 -->
            <li v-for="item in items" :key="item.message">
                <!-- 자식요소 반복 -->
                <span v-for="childItem in item.children" :key="childItem">
                    {{item.message}} -{{childItem}} <br>
                </span>
            </li>
        </ul>
        <hr>
        <h2>5. 객체 반복</h2>
        <ul>
            <!-- 객체의 키(key) 값(value)을 반복하여 출력 -->
            <li v-for="(value , key) in myObject" :key="key">
                {{key}} : {{value}}
            </li>
        </ul>
        <hr>
        <h3>6. 객체 반복 + 인덱스</h3>
        <ul>
            <!-- 객체 키,값 함께 인덱스도 출력 -->
            <li v-for="(value , key, index) in myObject" :key="key">
                {{index+1}}.{{key}}:{{value}}
            </li>
        </ul>
        <hr>
        <h2>7.특정 개수만큼 반복</h2>
        <ul>
            <!-- 1~5까지 출력 -->
            <li v-for="number in 5" :key="number">
                {{number}}
            </li>
        </ul>
        <hr>
        <h2>8.템플릿 사용</h2>
        <ul>
            <template v-for="item in items" :key="item.message">
                <li>{{item.message}}</li>
            </template>
            <template v-for="item in items" :key="item.message">
                <li>{{item.message}}</li>
            </template>
        </ul>
        <hr>
        <h2>9.조건부 렌더링과 함께 사용</h2>
        <ul>
            <template v-for="todo in todos" :key="todo.name"><!--template 찍히지 않음 즉, dom이 아님 for과 if문 함께 쓰려면 template쓰기 -->
                <li v-if="!todo.isComplete">{{todo.name}}</li>
            </template>
        </ul>
        <hr>
        <h2>10.탬플릿을 활용한 조건부 렌더링과 함께 사용</h2>
        <ul>
            <template v-for="todo in todos" ><!--template 찍히지 않음 즉, dom이 아님 for과 if문 함께 쓰려면 template쓰기 -->
                <li v-if="!todo.isComplete" :key="todo.name">{{todo.name}}</li><!--key가 if에 있어야 정확하게 잘 작동-->
            </template>
        </ul>
        <hr>
        <h2>11. key 속성</h2>
        <ul>
            <!-- div를 사용하여 반복되는 리스트 출력 -->
            <div v-for="item in items" :key="item.message">
                {{item.message}}
            </div>
            <span v-for="item in items" :key="item.message">
                {{item.message}}
            </span>
        </ul>
    </div>
</template>

<style scoped>
div{
    letter-spacing: 1px;
}
</style>