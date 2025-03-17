<script setup>
import { ref } from "vue";

const favoriteColor = ref("");
const agree = ref(false);
const selectedFruits = ref([]); //배열로 저장은 대괄호[] 바로 선택한것이 보여짐
const selectedCity = ref("")//[]로도 가능하다
const selectedHobbies = ref([])
</script>

<template>
  <div class="radio-group">
    <p>🎨 좋아하는 색상을 선택하세요:</p>
    <label class="raido-label">
      <input type="radio" v-model="favoriteColor" value="빨강" />
      <span class="custom-radio"></span>
      빨강
    </label>
    <label class="raido-label">
      <input type="radio" v-model="favoriteColor" value="파랑" />
      <span class="custom-radio"></span>
      파랑
    </label>
    <label class="raido-label">
      <input type="radio" v-model="favoriteColor" value="초록" />
      <span class="custom-radio"></span>
      초록
    </label>
    <p>
      ✅ 선택한 색상:<strong>{{ favoriteColor }}</strong>
    </p>
  </div>
  <div class="radio-group">
    <!-- 예제1: 단일 체크박스 (블리언값) -->
    <h2>예제1: 단일 체크박스 (블리언값)</h2>
    <label>
      <input type="checkbox" v-model="agree" />약관에 동의 합니다.
    </label>
    <p>동의 여부:{{ agree }}</p>
    <!-- 예제2: 여러 체크박스 (배열저장) -->
    <h2>예제2: 여러 체크박스 (배열저장)</h2>
    <div class="checkbox_group">
      <p>🍎 좋아하는 과일을 선택하세요:</p>
      <label class="checkbox_label">
        <input type="checkbox" v-model="selectedFruits" value="바나나" />
        <span class="custom_checkbox"></span>
        바나나
      </label>
      <label class="checkbox_label">
        <input type="checkbox" v-model="selectedFruits" value="사과" />
        <span class="custom_checkbox"></span>
        사과
      </label>
      <label class="checkbox_label">
        <input type="checkbox" v-model="selectedFruits" value="포도" />
        <span class="custom_checkbox"></span>
        포도
      </label>
      <p>
        ✅ 선택한 과일: <strong>{{ selectedFruits }}</strong>
      </p>
    </div>
  </div>
  <div class="radio-group">
    <!-- 셀렉트 박스 값 바인딩 -->
    <h1>🎯 셀렉트 박스 값 바인딩 🎯</h1>
    <!-- 예제1:단일 선택  -->
    <h2>예제1:단일 선택 </h2>
    <div class="select_group">
      <p>🏙 도시를 선택하세요:</p>
      <select v-model="selectedCity" class="custom_select">
        <option value="" selected disabled>도시를 선택하세요</option><!--value="":출력값 없음 selected:미리 선택되어 있음 disabled:비활성화됨-->
        <option value="서울">서울</option>
        <option value="부산">부산</option>
        <option value="대구">대구</option>
      </select>
      <p>✅ 선택한 도시 : <strong>{{selectedCity  }}</strong></p>
    </div>
    <!-- 예제2:다중 선택  -->
    <h2>예제2:다중 선택 (배열로 저장) </h2>
    <p>취미를 선택하세요 (Ctrl 또는 Shift 키를 누르고 여러 개 선택 가능):</p>
    <select v-model="selectedHobbies" class="custom-select" multiple>
      <!--multiple다중 선택가능-->
      <option value="독서">독서</option>
      <option value="운동">운동</option>
      <option value="게임">게임</option>
      <option value="여행">여행</option>
    </select>
    <p>{{ selectedHobbies }}</p>
  </div>
</template>

<style scoped>
.radio-group {
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #ddd;
}
.raido-label,
.checkbox_label {
  display: flex;
  align-content: center;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  font-size: 16px;
  margin: 5px 0;
}
.raido-label input,
.checkbox_label input {
  display: none; /*때문에 라디오 모양이 없어짐*/
}
.custom-radio {
  /*라이오 모양 만들기*/
  width: 10px;
  height: 10px;
  border: 2px solid gray;
  border-radius: 50%;
  display: inline-block;
  position: relative;
}
.raido-label input:checked + .custom-radio {
  /* + .custom-radio 인접한 것 border-color 라운드 색 전체색해서 파랑색이 먹음*/
  border-color: blue;
  background-color: blue;
}
/* 2번 예제 */
.custom_checkbox {
  width: 16px;
  height: 16px;
  border: 2px solid gray;
  display: inline-block;
  position: relative;
}
.checkbox_label input:checked + .custom_checkbox {
  background-color: green;
  border: green;
  position: relative;
}
.checkbox_label input:checked + .custom_checkbox::after {
  /*위의 체크박스에 가상공간으로 ✔넣기 */
  content: "✔";
  color: #fff;
  position: absolute;
  top: -4px;
  left: 3px;
}
.custom_select{
  padding: 10px;
  font-size: 16px;
  border: 2px solid gray;
  border-radius:7%;
  background-color: #fff;
  cursor: pointer;
  transition: all .3s;/*부드럽게 변하라는 의미 */
}
.custom_select:focus{
  border-color: blue;
  outline: none;
  box-shadow:  0 0 5px rgba(0,0,0,.2);
}

</style>
