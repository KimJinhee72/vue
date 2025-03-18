<script setup>
import Vfrom_ex from './components/Vfrom_ex.vue'
import Reservation from './components/Reservation.vue'
import OnMounted from './components/Onmounted.vue'
import { ref } from "vue";
const curentPage = ref("")
console.log(curentPage);

const showPage = (page)=>{//'Vfrom_ex''Reservation'을 쓰려고 함수의  매게변수 page로 설정하여 작성
  // alert("click") 머튼클릭이 실행 되고 있음
  // console.log(page);
  curentPage.value = page
}
</script>

<template>
  <div>
    <div class="btns">
      <button @click="showPage('Vfrom_ex')" >폼예제</button>
      <button @click="showPage('Reservation')">예약신청</button>
      <button @click="showPage('OnMounted')">OnMounted()</button>
    </div>
    <Vfrom_ex v-if="curentPage ==='Vfrom_ex'"/>
    <Reservation v-if="curentPage === 'Reservation'"/>
    <OnMounted v-if="curentPage === 'OnMounted'"/>
  </div>
</template>


<style lang="scss" scoped>
.btns {
  width: 50%;
  display: flex;
  margin: 10px  auto 20px;
}
button {
  margin-top: 10px;
  margin-right: 20px ;
  padding: 10px;
  width: 100%;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}


</style>