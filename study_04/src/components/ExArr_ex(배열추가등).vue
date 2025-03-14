<script setup>
import { ref } from "vue";
const items = ref(['Apple', 'Banana', 'Cherry', 'Orange', 'Grapes']);
// push()-추가
const addiItem = ()=>{
    items.value.push('Pineapple')
}
const removeLastitem = ()=>{
    items.value.pop()//배열의 마지막 제거
}
//shift()- 첫 번째 제거
const removeFirstItem = ()=>{
    items.value.shift()
}
// unshift() - 첫 번째 추가
const addFirstItem = ()=>{
    items.value.unshift('Mango')
}
// splice() - 요소 변경
const removeAndAddItem = ()=>{
    items.value.splice(1, 1, "Kiwi")//index 1시작 해 1개지우고 "키위"로 추가 
}
// sort() - 정렬
const sortItems = ()=>{
    items.value.sort()//a,b,c,d 순
}
// reverse() - 역순 정렬
const reverseItems = ()=>{
    items.value.reverse()//그냥 반대로 
}
//filter() - 'a' 포함된 요소만
const filterItems = ()=>{
    items.value = items.value.filter((item)=>item.includes("a"))//소문자 a만 골라냄 대문자는 따로 
}
// concat() - 새로운 배열과 결합
const concatItems = ()=>{
    items.value = items.value.concat(["Strowberry" , "Blueberry"])
}
// slice() - 인덱스 1~2 요소 추출
const sliceItems = ()=>{
    items.value =items.value.slice(1,3)//1~2까지 3미만의 의미 
}
</script>
<template>
    <div>
        <h1>배열조작 예제</h1>
        <p>현재 배열 :{{ items }}</p>
        <div class="btn_wrap">
            <button @click="addiItem" > push() - 추가</button>
            <button @click="removeLastitem" >pop() - 마지막 제거 기능</button>
            <button @click="removeFirstItem">shift() - 첫 번째 제거</button>
            <button @click="addFirstItem">unshift() - 첫 번째 추가</button>
            <button @click="removeAndAddItem">splice() - 요소 변경</button>
            <button @click="sortItems">sort() - 정렬</button>
            <button @click="reverseItems">reverse() - 역순 정렬</button>
            <button @click="filterItems">filter() - 'a' 포함된 요소만</button>
            <button @click="concatItems">concat() - 새로운 배열과 결합</button>
            <button @click="sliceItems">slice() - 인덱스 1~2 요소 추출</button>
        </div>
            
    </div>
</template>
<style lang="scss" scoped>
button {
  margin: 5px;
  padding: 10px;
  border: none;
  background: blue;
  color: white;
  cursor: pointer;
}
button:hover {
  background: darkblue;
}
.btn_wrap{
    margin-top: 30px;
}

</style>