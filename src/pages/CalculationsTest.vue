<template>
  <div>
    <div>{{ counter }}</div>
    <button @click="upCounter">Up!</button>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';

export default {
  name: 'Calc',
  setup() {
    const counter = ref(0);
    function upCounter() {
      counter.value++;
    }
    return { counter, upCounter };
  },
};
</script>
