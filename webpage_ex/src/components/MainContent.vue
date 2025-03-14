<script setup>
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
// 슬라이드 이미지 데이터
const slides = ref([
  "/images/2.png?text=슬라이드+1",
  "/images/3.png?text=슬라이드+2",
  "/images/4.png?text=슬라이드+3",
]);
// 상품리스트
const products = ref([
  { name: "상품 1", price: "10,000", image: "/images/4.png" },
  { name: "상품 2", price: "20,000", image: "/images/3.png" },
  { name: "상품 3", price: "30,000", image: "/images/2.png" },
]);
// 공지사항
const notices = ref(["공지사항 1", "공지사항 2", "공지사항 3", "공지사항 4"]);

const galleryImages = ref([
  "/images/2.png",
  "/images/3.png",
  "/images/4.png",
]);
const activeTab = ref("notice")
</script>
<template>
    <main class="main">
        <!-- 비주얼 -->
         <section class="visual"> 
           <Swiper :modules="[Autoplay]" :autoplay="{ delay: 3000 }" :loop="true">
            <SwiperSlide v-for="(slide, index) in slides" :key="index">
                <div class="slide" :style="{backgroundImage:`url(${slide})`}"></div>
            </SwiperSlide>
           </Swiper>
           <section class="visual"> 
      <!-- <Swiper :modules="[Autoplay]" :autoplay="{ delay: 3000, disableOnInteraction: false }">
        <SwiperSlide v-for="(slide, index) in slides" :key="index">
          <div class="slide" :style="{backgroundImage:`url(${slide})`}"></div>
        </SwiperSlide>
      </Swiper> 오토플레이 반영-->
    </section>

         </section>
        <!-- 상품리스트 -->
        <section class="products inner">
            <h2>추천상품</h2>
            <div class="product_list">
                <div class="product" v-for="(product, index) in products" :key="index">
                    <img :src="product.image" :alt="product.name">
                    <p>{{ product.name }}</p>
                    <span>{{product.price}}원</span>

                </div>
            </div>
        </section>
        <!-- 공지사항&갤러리 (탭버튼)-->
        <section class="tab_section inner">
            <div class="tabs">
                <button @click="activeTab = 'notice'" :class="{active : activeTab === 'notice'}">공지사항</button>
                <button @click="activeTab = 'gallery'" :class="{active : activeTab === 'gallery'}">갤러리</button>
            </div>
            <div v-if="activeTab === 'notice'" class="tab_content">
                <h2>공지사항</h2>
                <ul class="notice">
                    <li v-for="(notice, index) in notices" :key="index">{{ notice }}</li>
                </ul>
            </div>
            <div v-if="activeTab === 'gallery'" class="tab_content">
                <h2>갤러리</h2>
                <div  class="gallery_list">
                    <img v-for="(img, index) in galleryImages" :key="index" :src="img" alt="이미지">
                </div>
            </div>
        </section>
        
    </main>
</template>


<style lang="scss" scoped>
.visual{
    width: 100%;    
}
.slide{
    width: 100%;
    height: 45vw;
    background-size: cover;
    background-position: center;
}
// 상품리스트
.products {
    padding: 50px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.product_list{
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.product{
    flex: 1;
  background: white;
  padding: 10px !important;
  border-radius: 5px;
  text-align: center;
  width: 150px;
}
.product img{
    width: 100%;
}
.tab_section{
    background-color: #cae1fa;
}
.tabs{
    display: flex;
    justify-content: center;   
    gap: 10px;
    
}
.tabs button {
  padding: 10px 20px;
  border: none;
  background: #ddd;
  cursor: pointer;
  border-radius: 5px;
}
.tabs button.active{
    background: #007bff;
    color: white;
}
.tab_content ul {
   
   background: white;
   padding: 15px;
   border-radius: 5px;
   box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
 }
 .tab_content h2{

 }
 .notice{
    width: 80%;
    margin: auto;
 }
 .notice li{
    padding: 10px 0;
 }
 .gallery_list{
    width: 80%;
    display: flex;
    gap: 10px;
    margin: auto;
 }
 .gallery_list img{
    flex: 1;
    display: block;
    width: calc(100% / 3 );

 }
</style>