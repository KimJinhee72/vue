<template>
  <div class="container">
    <div>
      <button @click="currentPage = 'form'">📅 예약 신청하기</button>
      <button @click="currentPage = 'check'">✅ 예약 확인하기</button>
    </div>
    <!-- 예약 신청하기 -->
    <div v-if="currentPage === 'form'">
      <h2>📅예약 신청하기</h2>
      <form @submit.prevent="submitForm">
        <label>이름:</label>
        <input type="text" v-model="reservation.name" required />
        <label>이메일:</label>
        <input type="email" v-model="reservation.email" required />
        <label>날짜선택:</label>
        <input type="date" v-model="reservation.date" required />
        <label>인원수:</label>
        <select v-model="reservation.guests">
          <option v-for="n in 10" :key="n" :value="n">{{ n }}명</option>
          <!--일일이 하나씩 만들지 않아도 됨 10대신 20하면 20명이 만들어짐-->
        </select>
        <label>요청사항:</label>
        <textarea rows="3" v-model="reservation.requests"></textarea>
        <label class="checkbox-label">
          <input type="checkbox" v-model="reservation.agree" /><span
            >약관에 동의 합니다.</span
          >
        </label>
        <button type="submit">예약하기</button>
        <button class="cancel" @click="currentPage='check'">뒤로가기</button>
      </form>
    </div>
    <!-- 예약 확인하기 -->
    <div v-if="currentPage === 'check'">
      <h2>✅ 예약 확인하기</h2>
      <div v-if="reservations.length>0">
        <div v-for="(res, index) in reservations" :key="index" class="reservation_card">
          <p><strong>이름:</strong>{{ res.name }}</p>
          <p><strong>이메일:</strong>{{ res.email }}</p>
          <p><strong>날짜:</strong>{{res.date  }}</p>
          <p><strong>인원수:</strong>{{ res.guests }}</p>
          <p><strong>요청사항:</strong>{{ res.requests }}</p>

          <!-- 예약취소 -->
          <button class="cancel" @click="cancelReservation(index)">예약취소</button>
        </div>
      </div>
      <button class="back" @click="currentPage='form'">뒤로가기</button><!--'form'이 들어가니 뒤로가기 누르면 넘어감-->
    </div>
  </div>
  <p>{{ currentPage }}</p>
</template>

<script setup>
import { onMounted, ref } from "vue";

const currentPage = ref("");
// 예약 목록을 저장하는 배열
const reservations = ref([]);

// 예약신청 버튼을 클릭시 실행되는 함수
// 예약 정보를 저장하는 객체(초기값 설정)
const reservation = ref({
  name: "", //예약자 이름
  email: "", //예약자 이메일
  date: "", //예약 날짜
  guests: 1, //예약 인원 수
  requests: "",
  agree: false, //약관동의 여부
});
// console.log(reservation);
const isSubmited = ref(false);
// 페이지가 로드될때 로컬스토리지에서 저장된 예약 정보를 불러옴
onMounted(() => {
  const savedReservations = localStorage.getItem("reservations");
  if (savedReservations) {
    reservations.value = JSON.parse(savedReservations); // JSON문자열을 갤체로 변환
    isSubmited.value = reservations.value.length > 0;
  }
});
// 예약정보를 로컬스토리지에 저장하는 함수
const saveReservations = () => {
  localStorage.setItem("reservations", JSON.stringify(reservations.value));
};

const submitForm = () => {
  // 약관에 동의하지 않으면 예약이 불가능
  if (!reservation.value.agree) {
    alert("약관에 동의해야 예약이 가능합니다.");
    return;
  }
  //   새로운 예약 정보를 reservations 배열에 추가
  reservations.value.push({ ...reservation.value });
  // console.log("새로운 예약 추가됨:", reservation.value);
  // console.log("전체 예약 목록:", reservations.value);
  // /입력폼 초기화
  reservation.value = {
    name: "", //예약자 이름
    email: "", //예약자 이메일
    date: "", //예약 날짜
    guests: 1, //예약 인원 수
    requests: "",
    agree: false, //약관동의 여부
  };
  // 예약정보 저장
  saveReservations();
  // 예약이 제출되었음을 표시
  isSubmited.value = true;
  // 예약 확인 페이지로 이동
  currentPage.value = "check";
};
// 예약취소 함수
const cancelReservation = (index)=>{
  // 사용자가 예약 취소를 진행하려면
  if(confirm("예약취소하시겠습니까?")){
    reservations.value.splice(index, 1)//splice(index, 1) index로 start해서 1개 없애라는 의미
    // 예약정보를 저장    
    saveReservations();
    // 남아잇는 예약이 있는지 확인하여 isSubmited업데이트함
    isSubmited.value = reservations.value.length>0
    // 모든 예약이 취소되면 처음 화면으로 돌아감
    if(!isSubmited.value)currentPage.value = "form"//""로 두면 없어지고 "form"을쓰면 다지우면 넘어가게 됨
  }
}
</script>


<style lang="scss" scoped>
.container {
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
label {
  display: block;
  margin: 10px 0 5px;
}
input,
select,
textarea {
  width: 100% !important;
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
.checkbox-label input {
  width: 20px;
  margin-right: 5px;
}
.reservation_card {
  border: 1px solid #ddd;
  padding: 10px;
  margin: 10px 0;
  border-radius: 5px;
  background: #f9f9f9;
}
</style>
