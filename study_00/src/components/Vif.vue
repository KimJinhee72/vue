<script setup>
import { ref } from "vue";//vue안에 ref를 쓰겠다함
const show = ref(false)
const show1 = ref(false)
// 2nd
const isVisible = ref(false)
</script>

<template>
    <button @click="show = !show">상세설명보기</button>
    <p v-if="show">이 상품은 정말좋아요🚗</p> <br>
    <button @click="show1 = !show1">내용보기</button>
    <p v-if="show1"> 상세내용보기🚗</p><br>
    <!-- 2nd 설명 숨기기 삼항연산자 -->
    <button @click="isVisible = !isVisible">
    {{isVisible ? "설명숨기기" : "설명보기"}}</button>
    <p v-show="isVisible">이 제품은 품질이 뛰어나고 인기가 많아요😁</p>
</template>

<style scoped>

</style>