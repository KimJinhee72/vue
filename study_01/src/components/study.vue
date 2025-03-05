<script setup>
import {ref} from "vue";
const message = ref("안녕! 나는 vue야 만나서 반갑습니다.")
const message1 = ref("그래! 나는 Geen야 만나서 반갑습니다.")
const count = ref(0)
const count1 = ref(0)
</script>
<template>
     <div>
   <h1>{{ message }}</h1>
   <h2>{{ message }}</h2>
   <p>{{ message }}</p>
   <h2 class="h2">{{ message1 }}</h2>
   <h3>{{ message1 }}</h3>
   <h4>{{ message1 }}</h4>
   <button @click="count++">눌러봐{{ count }}</button>
   <button @click="count1--">눌러봐{{ count1 }}</button>
 </div>
 
</template>
<style scoped>
h1{
  color: rgb(101, 7, 90);
}
h2{
  color: brown;
}
p{
  color: blue;
}
.h2{
  color: aqua;
}
h3{
  color: chartreuse;
}
h4{
  color: rgb(251, 233, 40);
}
</style>