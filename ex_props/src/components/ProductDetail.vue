<script setup>
// 부모로부터 전달받는 props 정의
defineProps({
  product: Object,
});
</script>

<template>
  <div class="product-details">
    <h2>상품명{{ product.name }}</h2>
    <p>가격: {{ product.price }}</p>
    <button @click="$emit('close')">닫기</button>
  </div>
</template>

<style scoped>
.product-details {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 30px;
  background-color: white;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
}
</style>
