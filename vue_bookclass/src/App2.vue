<template>
    <div>
        <form id="loginForm" ></form>
        <label for="uid">아이디: <input type="text" id="uid" v-model="uid"></label><!--v-model="uid"에 바로 사용 가능-->
        <label for="upw">비밀번호: <input type="password" id="upw" v-model="upw" ></label>
        <textarea v-model="massage"></textarea>
        <button @click="printData">데이타출력</button>
        <button @click="login">로그인</button>
        <hr>
        <label for="banana">
      <input
        type="checkbox"
        id="banana"
        v-model="fruitsarr"
        value="banana"
      />banana
    </label>
    <label for="orange">
      <input
        type="checkbox"
        id="orange"
        v-model="fruitsarr"
        value="orange"
      />orange
    </label>
    <label for="apple">
      <input type="checkbox" id="apple" v-model="fruitsarr" value="apple" />apple
    </label>
    <button type="button" @click="printData">확인</button>
    <hr>
    <label for="male">
        <input type="radio" name="male" id="male" v-model="gender" value="male">male
    </label>
    <label for="female">
        <input type="radio" name="female" id="female" v-model="gender" value="female">female 
    </label>
    <hr>
    <h1>{{fullName  }}</h1>
    <h1>{{fullName  }}</h1>
    <h1>{{fullName  }}</h1>
    </div>
</template>

<script>
export default {
    data () {
        

        return {//여기에 적힌 값들은 key:value 이니 input 안에 value 값으로 인식해 v-model이 실현된다. female에 value="male"로 했더니 선택이 두개 되어있었음
            uid:"ha",//초기값을 "" 하면 빈것이 나옴
            upw:"",
            massage:"데이터변경",
            // fruits: true,//true 체크 false 미체크
            fruitsarr: ["banana" , "orange"],//이름을 담아줘도 트루처럼 체크됨
            gender: "male",
            firstName:"Gildong",
            lastName:"Hong",
        }
    },
    methods:{
        login(){
            console.log(`id : ${this.uid}`);//this 부모
            console.log(`pw : ${this.upw}`);
            
        },
        printData(){
            console.log(`id : ${this.massage}`);
            console.log(`${this.fruitsarr}`);
            console.log(this.fruitsarr);          
            
        }
    },
    computed:{
        fullName(){
            console.log("computed FullName");
            return `${this.lastName} ${this.firstName}`;
        }
    }
}
</script>

<style >

</style>