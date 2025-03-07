<script setup>
import Vfor from '../components/Vfor.vue'
import { ref } from "vue";

const imgUrl = ref('https://vuejs.org/images/logo.png')
const link = ref('https://www.naver.com/')
const count = ref(0)
const increase = ()=>{
    count.value++
}
const decrease = ()=>{
    count.value--
}
const message = ref("")
const items  = ref(["사과", "바나나", "딸기"])
</script>

<template>
    <div class="container">
        <!-- 속성바인딩 -->
        <h2>v-bind</h2>
        <img :src="imgUrl" alt="vue로고"><!-- : v-bind축약형  -->
        <a :href="link" target="_blank">네이버이동</a>
        <hr>
        <!-- 이벤트 바인딩 -->
        <button @click="increase">+1씩증가</button>    
        <span>{{count}}</span>
        <button @click="decrease">-1씩감소</button>
        <hr>
        <!-- 양방향 바인딩 -->
        <input v-model="message"><!--v-model 입력하자 마자 바로 보여짐-->
        <p>입력한 내용:{{message}}</p>
        <hr>
        <!-- 반복랜더링 v-for -->
        <ul>
            <li v-for="(item, index) in items" :key="index">
             {{index+1}} . {{item}}
            </li>
        </ul>
        <hr>        
        <Vfor/>
    </div>
</template>

<style scoped>
img{
    width: 50px;
}
</style>