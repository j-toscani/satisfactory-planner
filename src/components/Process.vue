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
    <ul>
      <li v-for="(output, index) in processor.output" :key="index">
        {{ output.name + ': ' + output.ammount }}
      </li>
    </ul>
    <div>
      {{ processor.efficiency }}
    </div>
  </div>
</template>

<script lang="ts">
import { Product as Product } from '../types';

import Intake from './Intake.vue';
import Output from './Output.vue';
import { ref, computed, PropType } from 'vue';
import fabrications from '../lib/api/fabrications';

export default {
  name: 'Process',
  props: {
    intakes: {
      type: Array as PropType<Product[]>,
      default: [
        {
          name: 'Iron Bars',
          ammount: 30,
        },
      ],
    },
  },
  setup(props, { emit }) {
    const fabrication = ref(0);
    const processor = computed(() => {
      const processor = fabrications[fabrication.value];
      processor.inputs = props.intakes;
      emit('update', { output: processor.output, efficiency: processor.efficiency });
      return processor;
    });

    return {
      fabrication,
      fabrications,
      processor,
    };
  },
};
</script>
