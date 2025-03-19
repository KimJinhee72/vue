<template>
    <header>
        <nav>
        <router-link to="/">홈</router-link> |
        <router-link to="/about">소개</router-link> |
        <router-link to="/payment">결재하기</router-link> |
        <router-link to="/reservation">예약하기</router-link> |
        <router-link to="/login">로그인</router-link>|
        <router-link  to="/join">회원가입</router-link>|
        <router-link to="/review">리뷰</router-link>
        </nav>
    </header>        
    <router-view></router-view>

</template>

<script setup>

</script>

<style lang="scss" scoped>
header {
  background-color: #91c5f8;
  padding: 10px;
  text-align: center;
}

nav {
  margin-top: 10px;
  color: #fff !important;
}
nav a{
  color: #fff;
  margin: 0 10px;
  text-align: center;
}

</style>
