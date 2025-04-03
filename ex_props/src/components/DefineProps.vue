<template>
    <div>
        <h1>{{ props.count }}</h1>
        <h2>{{ props.state.count}}</h2>
    </div>
</template>

<script setup>
const props = defineProps({
    count: Number,
    state: [Object,Array]
})
</script>

<style lang="scss" scoped>

</style>