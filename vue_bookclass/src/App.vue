<template>
  <div>
    <h1>이름 : {{ name }}</h1>
    <p>나이 : {{ age }}</p>
    <!--v-html h1 태그로 인식해 글자만 보임-->
    <!-- v-text 전체를 txt로 인식 -->
    <p v-html="massage" :class="className"></p>
    <p v-text="massage1"></p>
    <div>{{ text }}</div><!-- text 변수 data 내용을 보여지나-->
    <div v-pre>{{ text }}</div><!--v-pre는 그냥 {{  }} 텍스트로 인식-->
    <h1 v-bind:class="className" >안녕하세요</h1><!--:class 때문에 class명이 아닌 변수[className , fontSize]를 써야함 -->
    <h1 :class="[className , fontSize] " >안녕하세요</h1><!--:class 축약형으로 써도 됨 담아두면 어디서든 써도 되고 css색을 바꾸면 색이 같이 변함-->
    <h1 :id="ID" :class="Class">Good Moring!</h1>
  </div>
</template>

<script >

export default {//data를 const 처럼씀 그래서 name, age는 변수임
  // data : function() {    :오리지날형
  //   return {
      
  //   }
  // },
  data() { //               :축약형
    return {
      name : "김진희",
      age : "45",
      massage : `<h1>Hi 반가워</h1>`,
      massage1 : `<p>금요일 좋아</p>`,
      text : "hello Vue Js",
      className : "red-color",
      fontSize : "title",
      Id : "id",
      Class : "class",
    }
  },
};

</script>

<style>
.red-color{
  color: red;
}
.title{
  font-size: 50px;
}

</style>