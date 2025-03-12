<script setup>
import { ref } from "vue";
// 1.버튼 클릭 이벤트
const count = ref(0)
// 2. 입력 이벤트
// 입력된 메시지르 저장하는 변수
const message = ref("")
// 3.마우스 오버 이벤트
const hover = ref(false)
// 4.키보드 이벤트
// 키보드 이벤트에서 입력된 메시지
const newMessage = ref("") //""로 하면 한줄로 
// 추가된 메시지를 저장하는 배열
const messages = ref([])//[]를 해야 쌓임 
const addMessage = ()=>{
    if(newMessage.value){
        messages.value.push(newMessage.value)
        newMessage.value = ""//이것을 해주어여 입력창이 초기화됨
    }
}
// 5.폼 제출
const username = ref("")
const saveName = ref("")
//  폼 제출 기능
const submitForm = ()=>{
    saveName.value = username.value//saveName과 username같게 하겠다는 내용
    alert(`${saveName.value}이름이 맞으신가요?`)
}
// 6.더블클릭 이벤트
const color = ref("lightgray")
const toggleColor = ()=>{
    color.value = color.value ==="lightgray" ? "lightblue" : "lightgray"
}
// 7. 마우스 위치
const x = ref(0)
const y = ref(0)
// 마우스위치 업데이트 함수
const updatePosition = (event)=>{//event
    x.value = event.clientX
    y.value = event.clientY
}
// 8.체크박스
const checked = ref(false)//true하나 false하나 같음
// 9.컨텍스트 매뉴
const menuVisible = ref(false)
const menuX = ref(200)
const menuY = ref(0)
const showMenu = (event)=>{
    menuVisible.value = true
    menuX.value = event.clientX
    menuY.value = event.clientY
}
const selectOption = (option)=>{
    // console.log(option);
    alert(`${option} 선택됨`)
    menuVisible.value = false
}
</script>
<template>
    <div class="container">
        <h1>Vue Event</h1>
        <!-- 1.버튼 클릭 이벤트 -->
        <button @click="count++">클릭 {{count}}번</button><hr>
        <!-- 2.입력 이벤트 -->
        <input type="text" placeholder="입력하세요" required v-model="message">
        <p>입력값 : {{message}}</p><hr>
        <!-- 3.마우스 오버 이밴트 -->
        <button @mouseover="hover = true" @mouseleave="hover = false"
        :style="{backgroundColor : hover ? 'blue' : 'gray' , color : hover ? 'white' : 'green'}">마우스를 올려보세요</button><br><hr>
        <!-- 4.키보드 이벤트 -->
        <input type="text" v-model="newMessage" @keyup.enter="addMessage" placeholder="Enter 후 입력값 출력">
        <ul>
            <li v-for="(msg, index) in messages" :key="index">{{ msg}}</li><!--여러개 쌓이니 v-for 해주어야 함을 잊지 말자, msg는 value가 필요 없음-->
        </ul>
        <!-- 5.폼 제출 -->
        <!-- 폼을 제출하면 user name 값을 saveName에 저장하고 경고창을 띄움 -->
        <form @submit.prevent="submitForm"><!--@submit.prevent a태그 와 자동 이벤트 기능(제출되고 없어짐) 멈추는 내용-->
            <input type="text" placeholder="이름입력" v-model="username">
            <button type="submit">제출</button>
        </form>
        <p>입력된 이름:{{ saveName }}</p>
        <!-- 6.더블클릭 이벤트 -->
        <div class="box" :style="{backgroundColor: color}" @dblclick="toggleColor"><!--:style="{}"담아서 써야 내용이 나옴 div도 db이벤트 가능-->
            더블 클릭 하세요!            
        </div>
        <!-- 7. 마우스 위치 추적 -->
        <div @mousemove="updatePosition" class="tracker">
            X:{{ x }} ,  Y:{{ y }}
        </div>
        <!-- 8.체크박스 -->
        <label>
            <input type="checkbox" v-model="checked">
            동의합니다.
        </label>
        <p>{{ checked ? "동의하셨습니다." : "동의가 필요합니다." }}</p>
        <hr>
        <!-- 9.컨텍스트 메뉴(우클릭 메뉴) -->
        <div @contextmenu.prevent="showMenu($event)"  class="box">우클릭 하세요</div>
        <ul v-if="menuVisible" :style="{top:`${menuY}px` , left:`${menuX}px`}" class="context_menu">
            <li @click="selectOption('옵션1')">옵션1</li>
            <li @click="selectOption('옵션2')">옵션2</li>
        </ul>
    </div>
</template>


<style lang="scss" scoped>
.box{
    position: fixed;
    width: 200px;
    height: 100px;
    border: 1px solid #333;
    display: flex;
    justify-content: center;
    align-items:center ;
}
// 마우스 위치 추적박스
.tracker{
    width: 100%;
    height: 100px;
    border: 1px solid black;
    display: flex;//혼자 있어도 이것 쓰면 중간 정렬 가능
    justify-content: center;
    align-items: center;
}
// 컨텍스트 메뉴 스타일
.context_menu{
    position: fixed;
    background-color: #fff;
    border: 1px solid #ccc;
    list-style: none;
    padding: 5px;
}
.context_menu li{
    padding: 5px;
    cursor: pointer;
}
.context_menu li:hover{
    background-color: antiquewhite;
}
</style>