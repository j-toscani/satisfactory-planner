<template>
  <div>
    {{ output }}
  </div>
</template>

<script lang="ts">
export default {
  name: 'Output',
  props: {
    output: {
      type: Array,
      requiered: true,
    },
  },
};
</script>
