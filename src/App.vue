<template>
  <div class="app">
    <person />
  </div>
</template>

<script lang="ts">

import person from "./components/preson.vue";
export default {
  name: "app",
  components: {
    person
  }
}


</script>


<style scoped>
.app {
  background-color: #ff3;
  font-size: 54px;
}
</style>
