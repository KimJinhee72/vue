<template>
    <!-- 감시기능 -->
    <div>
        <h1>ref : {{ count  }}</h1>
        <button @click="count++">ref 증가</button>
        <h1>reactive : {{ state.count }}</h1>
        <button @click="state.count++">ref 증가</button>
        <hr>
        <div>
            <input type="text" v-model="message" placeholder="메시지를 입력하세요">
            <p ref="messagePargraph">{{ message}}</p>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive, watchEffect, watch, watchPostEffect } from 'vue';
const count = ref(0)
const state = reactive({count:0})
const message = ref("")
const messagePargraph = ref(null)
watch(message, ()=>{
    if(message.value){
    console.log(`watch:${messagePargraph.value.innerText}`);//보기용
    }
})
watchEffect(()=>{//setup 감시시
    if(message.value){
    console.log(`watchEffect:${messagePargraph.value.innerText}`);//보기용
    }
    // console.log(count.value);//ref는 value가 필요하고
    // console.log(state.count);//reactive는 value가 필요없다    
})
watchPostEffect(()=>{//이게 제일 반응이 빠름
    if(message.value){
    console.log(`watchPostEffect:${messagePargraph.value.innerText}`);//보기용
    }
})
</script>

<style lang="scss" scoped>

</style>