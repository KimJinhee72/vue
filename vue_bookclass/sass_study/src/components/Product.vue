<template>
  <div class="home">
    <h1>제품리스트</h1>
    <!-- 제품목록 -->
    <div class="product-list">
      <div v-for="(pro, index) in products" :key="index" class="card">
        <!--id가 있으면 index보다 pro.id를 key 값으로 쓰는게 더 좋음 -->
        <h3>{{ pro.name }}</h3>
        <img
          :src="pro.image"
          :alt="
            pro.name
          " /><!--:때문에 변수로 쓰면서 해당 내용들이 들고와져 보여짐-->
        <p>{{ pro.description }}</p>
        <p>{{ pro.price }}</p>
        <button class="button primary">자세히 보기</button>
      </div>
    </div>
  </div>
</template>

<script setup>
// 제품 목록 데이터
import { ref } from "vue"; // 내장 함수를 불러오는 작업이 있어야 쓸수 있다. import로
const products = ref([
  {
    name: "제품 A",
    image: "/public/images/product1.png",
    description: "이 제품은 매우 우수한 품질을 자랑합니다.",
    price: "100,000",
  },
  {
    name: "제품 B",
    image: "/public/images/product2.png",
    description: "이 제품은 혁신적인 기능을 가지고 있습니다.",
    price: "150,000",
  },
  {
    name: "제품 C",
    image: "/public/images/product3.png",
    description: "이 제품은 고급스러운 디자인을 자랑합니다.",
    price: "200,000",
  },
]);
</script>

<style lang="scss" scoped>
.home {
  max-width: 900px;
  background-color: red;
  .product-list {
    position: relative;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
  .card {
    flex: 1;
    text-align: center;
    &:hover{
        transform: scale(0.5);
    }
    img {
      max-width: 100%;
      height: auto;
    }

    h3 {
      font-size: 1.2rem;
      margin: 10px 0;
    }

    p {
      font-size: 1rem;
      margin-bottom: 10px;
    }
  }
}
</style>
