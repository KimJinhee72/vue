<template>
  <div>
    <ProductItem
      v-for="product in products"
      :key="product.id"
      :product="product"
      @view-details="viewDetails" /><!--id값으로 key값 쓰면 좋음-->
    <ProductDetail v-if="seletedProduct" :product="seletedProduct" @click="seletedProduct = nullo"/>
  </div>
</template>

<script setup>
import { ref } from "vue";
import ProductItem from "./components/ProductItem.vue";
import ProductDetail from "./components/ProductDetail.vue";
// 상품 목록 데이터
const products = ref([
  { id: 1, name: "청소기", price: 150000 },
  { id: 2, name: "세탁기", price: 300000 },
  { id: 3, name: "냉장고", price: 500000 },
]);
// 선택된 상품을 저장하는 변수(공간)
const seletedProduct = ref(null);
// 상세보기 클릭시 호출
function viewDetails(product) {
  seletedProduct.value = product; //빈공간에 해당 product를 집어 넣겠다.
}
</script>

<style lang="scss" scoped></style>
