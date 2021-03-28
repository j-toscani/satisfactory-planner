<template>
  <div class="step__container">
    <Intake @update="handleIntakeUpdate" />
    <Output :intakes="intakes" />
  </div>
</template>

<script lang="ts">
import { Intake as IntakeT } from '../customRefs/Intake';
import Intake from './Intake.vue';
import { ref } from 'vue';
export default {
  name: 'FactoryStep',
  components: {
    Intake,
  },
  setup() {
    const dspIntakes = ref([] as IntakeT[]);
    function handleIntakeUpdate(intakes: IntakeT[]) {
      dspIntakes.value = intakes;
    }
    return {
      dspIntakes,
      handleIntakeUpdate,
    };
  },
};
</script>
