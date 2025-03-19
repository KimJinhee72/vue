<template>
        <header>
            <nav>
            <router-link to="/">홈</router-link> |
            <!--a대신router-link 사용 -->
            <router-link to="/about">소개</router-link> |
            <router-link to="reservation">예약하기</router-link> 
            </nav>
            <router-view></router-view>
        </header>        

</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>
