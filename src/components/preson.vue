<template>
  {{ _sum }}
  <button @click="changeON">修改</button>
</template>


<script lang="ts" setup name="person1">
import { ref, reactive, toRefs, toRef, computed, watch } from "vue";

let _sum = ref(0);

function changeON() {
  _sum.value++;
}

//ref 情况1
const stopx = watch(
  _sum,
  (a, b) => {
    console.log("sum变化了1", a);
    console.log("sum变化了2", b);
    if (a > 10) {
      stopx();
    }
  },
  { deep: true,immediate:true }
);
</script>

<style scoped>
</style>