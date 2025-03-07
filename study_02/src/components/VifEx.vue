<script setup>
import { ref } from "vue";
const isVisible = ref(true);
const awesome = ref(true);
const type1 = ref("A");
// 단락표시
const ok = ref(true); //false면 안보임
// 로그인 상태버튼
const isLogin = ref(false);
const toggleLogin = () => {
  isLogin.value = !isLogin.value;
};
// 예약 상태 버튼 변경
const isAvailable = ref(true);
// 날짜 선택
const selectDate = ref("");
</script>
<template>
  <div class="container">
    <!-- v-if v-show -->
    <h2>v-if v-show</h2>
    <button @click="isVisible = !isVisible">토글</button>
    <p v-if="isVisible">
      v-if: 조건이 true일 때만 표시 (조건이 false이면) DOM에서 완전히 제거됨
    </p>
    <p v-show="isVisible">
      v-show: 조건에 따라 보이기만 함 (조건이 false여도 DOM에서 남아있지만
      display :none으로 숨김)
    </p>
    <hr />
    <div class="if">
      <button @click="awesome = !awesome">전환</button>
      <h2 v-if="awesome">vue는 정말 멋지죠!</h2>
      <h2 v-else>아닌가요? 😢</h2>
    </div>
    <hr />
    <div class="ifelse">
      <div v-if="type1 === 'A'">A</div>
      <!--처음에는 if 쓰고 다음에는 else-if 마지막에는 else만-->
      <div v-else-if="type1 === 'B'">B</div>
      <div v-else-if="type1 === 'C'">C</div>
      <div v-else>A/B/C아님</div>
      <button @click="type1 = 'A'">A 선택</button>
      <button @click="type1 = 'B'">B 선택</button>
      <button @click="type1 = 'C'">C 선택</button>
      <button @click="type1 = 'D'">D 선택</button>
    </div>
    <hr />
    <!-- 단락표시 -->
    <button @click="ok = !ok">단락표시여부</button>
    <div v-if="ok" class="info">
      <h1>제목</h1>
      <p>단락1</p>
      <p>단락2</p>
    </div>
    <hr />
    <!-- 로그인 상태에 따라 버튼 보이기 -->
    <button @click="toggleLogin">
      {{ isLogin ? "로그아웃" : "로그인" }}
    </button>
    <p v-if="isLogin">환영합니다.^^</p>
    <p v-else>로그인 후 예약이 가능합니다</p>
    <hr />
    
    <div class="container">
      <h2>예약가능여부</h2>
      <p :class="{ available: isAvailable, unavailable: !isAvailable }">
        {{
          isAvailable
            ? "현재 예약이 가능합니다."
            : "죄송합니다. 예약이 마감되었습니다."
        }}
      </p>
      <button
        :class="{ reserveBtn: isAvailable, disableBtn: !isAvailable }"
        @click="isAvailable = !isAvailable">
        {{ isAvailable ? "예약하기" : "예약불가" }}
      </button>
    </div>
    <hr />
    <!--날짜 선택후 화면보이기 -->
    <div class="date_container">
      <h2>예약날짜 선택</h2>
      <input
        type="date"
        class="date_input"
        v-model="selectDate" /><!--v-model 바로 글짜 반영-->
      <p :class="{ selected: selectDate, unselected: !selectDate }">
        {{ selectDate ? `선택한 날짜=${selectDate}` : "날짜를 선택해 주세요" }}
      </p>
    </div>
  </div>
  
</template>
<style scoped>
.info {
  background-color: aquamarine;
  padding: 20px;
}
/* button{
    background-color: rgb(211, 175, 244);
} */
.available {
  color: #2ecc71;
  font-weight: bold;
}
.unavailable {
  color: #e74c3c;
}
.reserveBtn {
  background-color: #2ecc71;
  color: white;
}
.reserveBtn:hover {
  background-color: #0d5d2e;
}
.disableBtn {
  background-color: #bdc3c7;
  color: white;
  cursor: not-allowed; /*비활성화라 커서 없이*/
}
button {
  padding: 12px 24px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s, transform 0.2s;
}
.date_input {
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
  transition: all 0.5;
}
.date_input:focus {
  border-color: #0d5d2e;
}
.selected {
  color: #2ecc71;
  font-weight: bold;
}
.unselected {
  color: #e74c3c;
  font-weight: bold;
}
</style>
