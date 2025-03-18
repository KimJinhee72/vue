<script setup>
import { ref } from "vue";
const products = ["아이폰", "갤럭시", "맥북"];
const cart = ref([])
const addToCart = (product)=>{
    cart.value.push(product)
}


</script>

<template>
    <div>
        <h2>상품목록</h2>
        <ul>
            <li v-for="product in products" :key="product">{{product}}
                <button @click="addToCart(product)">추가</button>
            </li>
        </ul>
        <hr>
        <h2>장바구니</h2>
        <ul>
            <li v-for="goods in cart" :key="goods">{{goods}}</li>
        </ul>
    </div>
</template>

<style scoped>

</style>