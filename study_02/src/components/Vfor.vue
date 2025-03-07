<script setup>
import Vforlist from '../components/Vforlist.vue'
import { ref } from "vue";
const products = ref(["노트북", "스마트폰", "태블릿"]);
const fruits = ref(["사과", "바나나", "포도"]);
const showfor = ref(false)//For list 예제 표시여부
</script>

<template>
    <div class="container">
        <h1>v-for</h1>
        <ul>
            <h3>상품목록</h3>
            <li v-for="(product, index) in products" :key="index">
            {{index+1}} .   {{product}}
            </li>
            <br>
            <h3>과일목록</h3>
            <li v-for="(fruit, index) in fruits" :key="index">
            {{index+1}} .   {{fruit}}
            </li>
        </ul>
        <hr>
        <div class="forList">
            <h1>For list Ex</h1>
            <button @click="showfor = !showfor">{{showfor ? "닫기" : "v-for 리스트보기"}}</button>
            <!-- Forlist.vue 표시여부-->
            <Vforlist v-if="showfor"/>
        </div>
    </div>
</template>

<style scoped>
ul,li{
    list-style: none;
    letter-spacing: 2px;
}
</style>