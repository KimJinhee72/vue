<script setup>
import { ref } from "vue";
const show = ref(false)
const show1 = ref(false)
const show2 = ref(false)
</script>

<template>
    <div>
        <button @click="show = !show">상세설명보기</button><br>
        <p v-if="show">이 상품은 정말좋아요🚗</p>
        <button @click="show1 = !show1">내용보기</button><br>
        <p v-if="show1">상세내용보기🚗</p>
        <button @click="show2 = !show2">{{show2 ? "설명숨기기" : "설명보기"}}</button><br>
        <p v-if="show2">이 제품은 품질이 뛰어나고 인기가 많아요😁</p>
    </div>
</template>

<style scoped>

</style>