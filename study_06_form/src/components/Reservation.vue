<template>
    <div class="container">
        <div>  
        <button @click="currentPage ='form'">📅 예약 신청하기</button>
        <button @click="currentPage ='check'">✅ 예약 확인하기</button>
    </div>
<!-- 예약 신청하기 -->
 <div v-if="currentPage === 'form'">
     <h2>📅예약 신청하기</h2> 
     <form @submit.prevent="submitForm">
        <label>이름:</label>
        <input type="text" v-model="reservation.name" required>
        <label>이메일:</label>
        <input type="email" v-model="reservation.email" required>
        <label>날짜선택:</label>
        <input type="date" v-model="reservation.date" required>
        <label>인원수:</label>
        <select v-model="reservation.guests">
            <option v-for="n in 10" :key="n">{{ n }}명</option><!--일일이 하나씩 만들지 않아도 됨 10대신 20하면 20명이 만들어짐-->
        </select>
    <label >요청사항:</label>
    <textarea rows="3" v-model="reservation.requests" ></textarea>
    <label class="checkbox-label">
          <input type="checkbox" v-model="reservation.agree" /><span>약관에 동의 합니다.</span>
        </label>
    <button type="submit">예약하기</button>
    <button class="cancel">뒤로가기</button>
     </form>
    </div>
    <!-- 예약 확인하기 -->
    <div v-if="currentPage === 'check'">
        <h2>✅ 예약 확인하기</h2> 
    </div>
    </div>
    <p>{{ currentPage }}</p>
    </template>

<script setup>
import { ref } from "vue";

const currentPage = ref("")
// 예약 목록을 저장하는 배열
const reservations = ref([])

// 예약정보를 저장하는 객체(초기값 설정)
const reservation = ref({
  name : "" ,//예약자이름
  email : "" ,//예약자이메일
  date : "" ,//예약자날짜
  guests : 1 ,//예약자인원수
  requests : "",
  agree : false, //약관동의 여부
})
// console.log(reservation);

// 예약신청 버튼 클릭시 실행되는 함수
const submitForm = ()=>{
    // 약관에 동의하지 않으면 예약이 불가능하게 
    if(!reservation.value.agree){
      alert("약관에 동의해야 예약이 가능합니다.")
      return
    }
    // 새로운 예약 정보를 reservations 배열에 추가
    reservations.value.push({...reservation.value})//...reservation.value가 push로 reservations에 드러감 그래서 쌓임
    console.log("새로운 예약 추가됨:" , reservation.value);
    console.log("전체 예약 목록:" , reservations.value);
}

</script>

<style lang="scss" scoped>
.container{
    max-width: 500px;
    margin: 100px auto;
    padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
button {
  margin-top: 10px;
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
label{
  display: block;
  margin: 10px 0 5px;
}
input,
select,
textarea {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
.cancel {
  background-color: #dc3545;
}

.cancel:hover {
  background-color: #c82333;
}

.back {
  background-color: #6c757d;
}

.back:hover {
  background-color: #5a6268;
}
.checkbox-label input{
   width: 20px;
   margin-right: 5px;
}
</style>