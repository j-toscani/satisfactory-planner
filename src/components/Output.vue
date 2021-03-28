<template>
  <div>
    {{ output.factory.efficiency }}
  </div>
</template>

<script lang="ts">
export default {
  name: 'Output',
  props: {
    output: {
      type: Object,
      requiered: true,
    },
  },
};
</script>
