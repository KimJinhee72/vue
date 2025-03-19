<template>
    <main>
        <h1>여기는 메인페이지 입니다.</h1>
        <nav>
            <router-link to="/menu1">메뉴1</router-link>|
            <router-link to="/menu2">메뉴2</router-link>|
            <router-link to="/menu3">메뉴3</router-link>|
            <router-link to="/menu4">메뉴4</router-link>
        </nav>
    </main>
    <router-view></router-view>
</template>

<script setup>

</script>

<style lang="scss" scoped>
</style>