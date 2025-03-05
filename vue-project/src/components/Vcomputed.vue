<script setup>
import { ref , computed } from "vue"; //computed값이 변경되는 반응형 변수
// 필터링으로 사용자가 입력한 검색어를 저장하는 함수ref
const search = ref("")    
const items = ["아이폰" , "갤럭시", "맥북"]
// 사용자가 입력한 검색어search.value 에 포함된 includes()한 상품만 보여줌
const filteredItems = computed(()=>{
    return items.filter((item) => item.includes(search.value))//객체안에 있어 return 쓰고 forEach말고 filter씀
})

//상품리스트 표시 
const products = ["아이폰" , "갤럭시", "맥북"]
const productItems = ["아이폰" , "갤럭시", "맥북", "갤북", "그램"]
</script>

<template>
    <h2>검색기능</h2>
    <!-- 사용자가 입력산 검색어를  search변수에 자동으로 반영해 바로 보이게 함-->
    <input v-model="search" placeholder="상품검색">
    <ul>
        <!-- v-for 반복문 사용해서 filteredItems qodufdmf xhfaustj li태그로 상품표시 -->
        <li v-for="item in filteredItems" :key="item">{{item}}</li>
    </ul>
    <hr>
    <h2>상품리스트 출력</h2>
    <ul>
        <li v-for="product in products" :key="product">{{product}}</li>
    </ul>
    <hr>
    <h2>내가 연습한 for문을 이용한 리스트 출력</h2>
    <ul>
        <li v-for="proitem in productItems" :key="proitem">{{proitem}}</li>
    </ul>
    
</template>

<style scoped>
    ul , li{
        list-style: none;
        }
</style>