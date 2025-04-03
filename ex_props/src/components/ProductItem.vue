<script setup>
// 부모로부터 전달받는 props 정의
defineProps({
  product: Object,
});
</script>

<template>
  <div>
    <div class="product-item">
      <h3>{{ product.name }}</h3>
      <p>{{ product.price }}원</p>
      <!-- 부모 컴포넌트에 클릭 이벤트 전달 -->
      <button @click="$emit('view-details', product)">상세보기</button>
    </div>
  </div>
</template>

<style scoped>
.product-item {
  border: 1px solid #ddd;
  padding: 20px;
  border-radius: 10px;
}
</style>
