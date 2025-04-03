<template>
    <div>
        <button @click="increamemt">count증가</button>
        <button @click="emit('state-increament')">state.count증가</button><!--위방법 아래방법 방법이 다양함-->
    </div>
</template>

<script setup>
const emit = defineEmits(["count-increamemt ", "state-increament"])
const increamemt = ()=>{
    emit("count-increamemt")
}
</script>

<style lang="scss" scoped>

</style>