<template>
    <div>
      <h1>메뉴 1</h1>
      <button @click="goback">뒤로 가기</button>
    </div>
  </template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter()
const goback = ()=>{
    router.go(-1)//뒤로가기
    if(window.history.length > 1){//전에 한 페이지로 가는 방법
        router.back() 
    }else{        router.push("/")    }
}
// const goback = ()=>{
//     router.push("/")    
// } 그냥 홈으로 가게 하려면 이방법으로
</script>

<style lang="scss" scoped></style>