<script setup>
import ExArr from './components/ExArr.vue'
import Event from './components/Event.vue'
import { ref } from "vue";
const show_ex = ref(false)
   

</script>

<template>
 <div>
    <ExArr/>
    <div class="exdisplay_btn">
      <button @click="show_ex = !show_ex" class="btn">{{ show_ex ? "닫기" : "ex예제 보기" }}</button>
      <Event v-if="show_ex"/>      
    </div>
    
 </div>
</template>

<style scoped>
.btn{
   margin: 20px auto;
   display: flex;
   justify-content: center;
   align-items: center;
}
</style>
