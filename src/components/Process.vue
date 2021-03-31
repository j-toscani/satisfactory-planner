<template>
  <div class="step__container">
    <ul>
      <li v-for="(intake, index) in intakes" :key="index">
        {{ intake.name + ': ' + intake.ammount }}
      </li>
    </ul>
    <select id="" v-model="fabrication" name="fabrication" @change="handleIntakeChange">
      <option v-for="(fabricator, index) in fabrications" :key="index" :value="index">
        {{ fabricator.name }}
      </option>
    </select>
    <ul v-if="fabricator">
      <li v-for="(output, index) in outputs" :key="index">
        {{ output.name + ': ' + output.ammount }}
      </li>
    </ul>
    <div v-if="fabricator">
      {{ efficiency }}
    </div>
  </div>
</template>

<script lang="ts">
import { Product as Product } from '../types';

import { ref, computed, PropType } from 'vue';
import fabrications, { createFabricator } from '../lib/api/fabrications';

export default {
  name: 'Process',
  props: {
    intakes: {
      type: Array as PropType<Product[]>,
      default: [
        {
          name: 'Iron Bars',
          ammount: 25,
        },
      ],
    },
  },
  setup(props, { emit }) {
    const fabrication = ref(0);

    const fabricator = computed(() => {
      const fabricator = createFabricator(fabrication.value);
      fabricator.inputs = props.intakes;
      emit('update', { output: fabricator.output, efficiency: fabricator.efficiency });
      return fabricator;
    });

    const outputs = computed(() => fabricator.value.output);
    const efficiency = computed(() => fabricator.value.efficiency);

    return {
      fabrication,
      fabricator,
      fabrications,
      efficiency,
      outputs,
    };
  },
};
</script>
