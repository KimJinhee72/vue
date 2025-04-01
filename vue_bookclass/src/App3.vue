<template>
  <div>
    <input type="text" v-model="inpuStr" />
    <h1>{{ arr }}</h1>
    <h1>{{ obj }}</h1>
    <button @click="arr.push(3)">배열변경</button>
    <button @click="obj.age = 20">객체변경</button>
  </div>
</template>

<script>
export default {
  data() {
    //const 처럼 정의 내리는 곳
    return {
      inpuStr: "",
      num: 0,
      arr: [0, 1, 2],
      obj: { name: "chulsu" }, //name은 대괄호 말고 {}중괄호로
    };
  },
  watch: {
    //함수 whach는 감시는
    //     inpuStr(newValue , oldValue){
    //         console.log(`oldValue : ${oldValue}`);
    //         console.log(`newValue : ${newValue}`);
    //     },
    //     arr(newValue,oldValue){
    //         console.log(`oldValue : ${oldValue}`);
    //         console.log(`newValue : ${newValue}`);
    //     },
    //    obj(newValue,oldValue){
    //         console.log(`${JSON.stringify(oldValue)}`);
    //         console.log(`${JSON.stringify(newValue)}`);
    //     }
    arr: {
      handler(newValue, oldValue) {
        console.log(`oldValue : ${oldValue}`);
        console.log(`newValue : ${newValue}`);
      },
      deep:true,
    },
    obj:{
        handler(newValue,oldValue){
            console.log(`oldValue : ${JSON.stringify(oldValue)}`);
            console.log(`newValue : ${JSON.stringify(newValue)}`);
        },
        deep:true,
    },

  },
};
</script>

<style></style>
