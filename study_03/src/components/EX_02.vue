<script setup>
import { computed, reactive, ref } from "vue";

// 예약 카운트 추가 및 두배 표시기능
const reservation = ref(0);
const dbreservation = computed(() => {
  return reservation.value * 2;
}); //또는 (()=>reservation.value*2) 이렇게 표기해야함 {}있을 때는 return 필요
const increaseReservation = () => {
  //이렇게 담았으면 바로 button에 increaseReservation담고, 아니면 button 속에서 @click="increaseReservation += 1"로 해야함
  reservation.value++;
};
// 2. 짐보관 상태
const strage = reactive({
  isStored: false,
});
const toggleButton = () => {
  strage.isStored = !strage.isStored;
};
// 3. 제빙기 청소 옵션 선택 및 요금 계산
const selectedOption = ref("basic"); //디폴트 값으로 basic을 설정해둠
const totalPrice = computed(() =>
 {const price = selectedOption.value === 'deep' ? 100000 : 50000;
return price.toLocaleString(); // 천 단위 구분 기호 추가
});
// 4.고객 정보관리 및 업데이트
const custmer = reactive({
  name: "김철수",
  phone: "010-1234-5678",
});
const updateCustomer = () => {
  custmer.name = "이영희";
  custmer.phone = "010-9999-9999";
};
// 5.남은 예약 가능 수 계산
// 최대예약수
const maxReservation = ref(10)
// 현재예약수
const currentReservation = ref(0)
// 남은예약수
const remainReservation  = computed(()=> maxReservation.value - currentReservation.value)
const addreservation = ()=>{
    if(currentReservation.value < maxReservation.value){
        currentReservation.value++
    }
}
</script>
<template>
  <div class="wrap">
    <!-- 예약카운트 증가 및 두배 표시기능 -->
    <div class="ex">
      <h2>예약관리</h2>
      <p>예약 수 : {{ reservation }}</p>
      <p>두배 예약 수 :{{ dbreservation }}</p>
      <button @click="increaseReservation">예약추가</button>
    </div>
    <hr />
    <!-- 짐 보관 상태 -->
    <div class="ex">
      <h2>짐보관 상태</h2>
      <p>짐 보관 상태 : {{ strage.isStored ? "보관중" : "미보관" }}</p>
      <button @click="toggleButton">짐보관 토글</button
      ><!--toggleButton대신에 strage.isStored = !strage.isStored 써도 됨-->
    </div>
    <hr />
    <!-- 3. 제빙기 청소 옵션 선택 및 요금 계산 -->
    <div class="ex">
      <h2>제빙기 청소 예약</h2>
      <label>
        청소 옵션:
        <select v-model="selectedOption">
          <option value="basic">기본청소(₩50,000)</option>
          <option value="deep">심층청소(₩100,000)</option>
        </select>
      </label>
      <p>선택한 요금:{{ totalPrice }}원</p>
    </div>
    <hr />
    <!-- 4.고객 정보관리 및 업데이트 -->
    <div class="ex">
      <h2>고객정보</h2>
      <p>고객이름 :{{ custmer.name }}</p>
      <p>전화번호 :{{ custmer.phone }}</p>
      <button @click="updateCustomer">정보변경</button>
    </div>
    <hr />
    <!-- 5.남은 예약 가능 수 계산 -->
    <div class="ex">
      <h2>예약 가능여부</h2>
      <p>최대 예약 가능 수 :{{ maxReservation }}</p>
      <p>현재 예약 수 :{{ currentReservation }}</p>
      <p>남은 예약 가능 수 :{{ remainReservation }}</p>
      <button
        @click="addreservation"
        :disabled="currentReservation >= maxReservation">
        예약 추가
      </button>
      <!--disabled="currentReservation >= maxReservation"버튼 비활성화-->
    </div>
  </div>
</template>

<style scoped>
.wrap {
  display: flex;
  gap: 20px;
}
.ex {
  flex: 1;
}
button {
  margin: 5px;
  padding: 8px 12px;
  border: none;
  background-color: #42b983;
  color: white;
  cursor: pointer;
  border-radius: 5px;
}
button:disabled {
  background-color: gray;
  cursor: not-allowed; /*금지 표시*/
}
</style>
