<template>
  <div class="step__container">
    <Intake @update="handleIntakeUpdate" />
    <select id="" v-model="fabrication" name="fabrication">
      <option v-for="(fabricator, index) in fabrications" :key="index" :value="fabrication">
        {{ fabrication.name }}
      </option>
    </select>
    <Output :output="outputs" />
  </div>
</template>

<script lang="ts">
import { Product as Product } from '../types';
import Intake from './Intake.vue';
import Output from './Output.vue';
import { ref } from 'vue';

export default {
  name: 'FactoryStep',
  components: {
    Intake,
    Output,
  },
  setup() {
    const dspIntakes = ref([] as Product[]);

    function handleIntakeUpdate(intakes: Product[]) {
      dspIntakes.value = intakes;
    }

    return {
      dspIntakes,
      handleIntakeUpdate,
    };
  },
};
</script>
