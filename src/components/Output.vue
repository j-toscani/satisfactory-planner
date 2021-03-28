<template>
  <div>
    {{ intakes }}
  </div>
</template>

<script lang="ts">
export default {
  name: 'Intake',
  props: {
    intakes: {
      type: Array,
      requiered: true,
    },
  },
};
</script>
