<script setup>
import VifEx from "./components/VifEx.vue"

// import Vcount from "./components/Vcount.vue"
import Vbind from './components/Vbind.vue'
</script>

<template>
  <div class="wrap">
    <VifEx/>
    <Vbind/>
  </div>
  <!-- <div>
    <Vcount/>
  </div>
   -->
</template>

<style scoped>
.wrap{
  display: flex;
}
.container{
  flex: 1;
  padding: 20px;
}
</style>