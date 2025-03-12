<script setup>
import { ref } from "vue";
const message = ref("")
const name = ref("")
const email = ref("")
const checked = ref(false)
const selected = ref("")
</script>
<template>
    <div class="vModel">
        <h1>v-model</h1><!--반응값 바로 바로 보임-->
        <!--@input="name = $event.target.value"한글도 바로바로-->
        <input placeholder="입력하세요" v-model="message" @input="message = $event.target.value">
        <p>입력한 값:{{message}}</p>
        <!--@input="name = $event.target.value"한글도 바로바로-->
        <input placeholder="이름을 입력하세요" v-model="name" @input="name = $event.target.value">
        <input placeholder="이메일을 입력하세요" v-model="email" @input="email = $event.target.value">
        <p>{{ name }}님의 {{ email }}이메일 입니다.</p>
        <hr>
        <label ><input type="checkbox" v-model="checked">동의합니다.</label>
        <p>체크여부 : {{ checked }}</p>
        <hr>
        <select v-model="selected">
            <option value="apple">사과</option>
            <option value="banana">바나나</option>
            <option value="grape">포도</option>
        </select>
        <p>내가 선택한 과일:{{selected}}</p>
    </div>
</template>
<style lang="scss" scoped>
.vModel{
    margin-bottom: 50px;
    padding: 50px;
    background-color: rgb(173, 251, 251);
}
label{
    display: flex;
}
input:last-child{
    width: 20px;
}


</style>