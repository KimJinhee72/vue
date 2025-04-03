<script setup>
import { reactive, ref } from 'vue';
import DefineProps from './components/DefineProps.vue';
import DefineEmits from './components/DefineEmits.vue';
const count = ref(0)
const state = reactive({
    count:0,
})
// emits 함수 사용
const countIncreament = ()=>{
    count.value++
}
const stateIncreament = ()=>{
    state.count++
}
</script>

<template>
 <div>
    <!-- <DefineProps :count="count" :state="state"/> -->
    <h1>{{ count }}</h1>
    <h1>{{ state.count }}</h1>
    <DefineEmits @count-increamemt="countIncreament" @state-increament="stateIncreament"/>
 </div>
</template>

<style scoped>

</style>
