<template>
  <div class="step__container">
    <Intake @update="handleIntakeUpdate" />
    <select id="" v-model="fabrication" name="fabrication" @change="handleIntakeChange">
      <option v-for="(fabricator, index) in fabrications" :key="index" :value="index">
        {{ fabricator.name }}
      </option>
    </select>
    <Output :output="processor" />
  </div>
</template>

<script lang="ts">
import { Product as Product } from '../types';

import Intake from './Intake.vue';
import Output from './Output.vue';
import { ref, computed } from 'vue';
import fabrications from '../lib/api/fabrications';

export default {
  name: 'Process',
  components: {
    Intake,
    Output,
  },
  setup() {
    const dspIntakes = ref([] as Product[]);
    const fabrication = ref(0);

    function handleIntakeUpdate(intakes: Product[]) {
      processor.value.factory.inputs = intakes;
    }

    const processor = computed(() => fabrications[fabrication.value]);

    return {
      fabrication,
      dspIntakes,
      fabrications,
      handleIntakeUpdate,
      processor,
    };
  },
};
</script>
