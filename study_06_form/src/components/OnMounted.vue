
<template>
    <div class="container" :class="{dark:isDarkMode}">
       <h1>OnMounted()예제</h1>
       <p>{{ message }}</p>
       <div class="reservation">
        <h2>예약목록</h2>
        <ul>
            <li v-for="res in reservations" :key="res.id">{{ res.name }} -  {{ res.date }}({{ res.time }})</li>
        </ul>
       </div>
       <!-- 장바구니 기능 -->
    <div class="cart">
        <h2>🛒 장바구니({{ cartItems.length }})</h2>
        <div class="cart-btn">
            <input v-model="newItem" placeholder="상품 이름 입력">
            <button @click="addToCart">+추가</button>
        </div>
        <ul v-if="cartItems.length">
            <li v-for="(item, index) in cartItems" :key="index">{{ item }}
                <button @click="removeCart(index)" >❌</button>
            </li>
        </ul>
        <p v-else>장바구니가 비어있습니다.</p>
        
    </div>
    <!-- 다크모드 전환 -->
     <div class="darkMode" >
        <p>현재모드 : {{ isDarkMode ? "🌙 다크 모드" : "☀ 라이트 모드"  }}</p>
        <button @click="toggleDarkmode">
            {{ isDarkMode ? "☀ 라이트 모드로 변경" : "🌙 다크 모드로 변경" }}
        </button>
     </div>
     <!-- gotop버튼 -->
    <button v-if="showTopbutton" @click="scrollToTop" class="topBtn">🔝 TOP</button>
    </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
const reservations = ref([])
const cartItems = ref([])
const newItem = ref("")
const fetchReservations = async () => {//async는 비동기 방식: 기다리지 않고 다른 작업을 할 수 있어 코드를 더 읽기 쉽고 직관적으로 작성할 수 있습니다. 
    // 특히, 콜백 지옥이나 복잡한 .then() 체인을 피하고 가독성을 높이는 데 매우 유용
    
    reservations.value = [
        { id: 1, name: '김철수', date: '2025-03-20', time: '14:00' },
        { id: 2, name: '이영희', date: '2025-03-22', time: '10:30' }
    ]
}
const message  = ref("로딩중...")
// 다크모드 전환

const isDarkMode = ref(false)
const toggleDarkmode= ()=>{
    isDarkMode.value = !isDarkMode.value
}
onMounted(()=>{
    // 메시지 로딩중
    message.value = "컴포넌트가 화면에 표시됨"
    fetchReservations()
    // 장바구니기능
    const savedCart = localStorage.getItem("cart")
    if(savedCart){
        cartItems.value = JSON.parse(savedCart)//문자열을 객체화
    }
    // 다크모드 전화
    isDarkMode.value = window.matchMedia("(prefers-color-scheme: dark)").matches// css를 매치해라
    // 스크롤 감지기능
    window.addEventListener("scroll" , ()=>{
        showTopbutton.value = window.scrollY > 200
    })
})
//장바구니 저장함수
const saveCart = ()=>{
    localStorage.setItem("cart", JSON.stringify(cartItems.value))
}
// 장바구니에 상품추가하는 함수
//newItem입력후 추가해 button 눌러 추가하면 push 되고 save됨 saveCart()//로컬스토리지 저장
const addToCart = ()=>{
    if(newItem.value.trim() !== ""){
        cartItems.value.push(newItem.value)
        saveCart()
        newItem.value = ""
    }
}
// 장바구니 아이템 삭제
const removeCart = (index) =>{
    cartItems.value.splice(index, 1)
    saveCart()
    newItem.value = ""
}
// gotop버튼
const showTopbutton = ref(false)
// page 상단으로 이동하는 함수
const scrollToTop = ()=>{
    window.scrollTo({top:0 , behavior:"smooth"})
}
</script>

<style scoped>
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
.container {
  width: 70%;
  height: 2000px;
  margin: 100px auto;
}
.container div{
    padding: 20px 0;
}
.cart-btn{
    display: flex;
    justify-content: space-between;
}
.container button{
    width: 20%;
    margin: 0;
}
.container input{
    width: 70%;
}
.dark{
    background-color: #333;
    color: #fff ;
}
/* TOP 버튼 스타일 */
.topBtn{
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: #007bff;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.topBtn:hover {
  background: #0056b3;
}
</style>
