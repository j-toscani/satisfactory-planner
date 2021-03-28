<template>
  <div class="intakes__wrapper">
    <button v-if="!intakes.length" @click="resetIntake">reset</button>
    <div class="intakes__container">
      <select
        v-if="!selected"
        id=""
        v-model="selected"
        name="intake"
        placeholder="Number of Intakes"
        @change="handleIntakeSelect"
      >
        <option v-for="(option, index) in intakeOptions" :key="index" :value="option.value" selected>
          {{ option.display }}
        </option>
      </select>
      <ul v-else>
        <li v-for="(intake, index) in dspIntakes" :key="index">
          <input id="" v-model="intake.ammount" type="number" name="ammount" @change="updateIntakes" />
          <input id="" v-model="intake.name" type="text" name="type" @change="updateIntakes" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';
import intakeOptions from '../lib/api/intakeOptions';
import useIntake, { Intake } from '../customRefs/Intake';

export default {
  name: 'Intake',
  props: {
    intakes: {
      type: Array,
      default: [] as Intake[],
    },
  },
  setup(props, { emit }) {
    function resetIntake() {
      selected.value = 0;
      dspIntakes.value = [];
    }

    function handleIntakeSelect() {
      const numberOfIntakes = Number(selected.value);
      setIntakes(numberOfIntakes);
    }

    function updateIntakes() {
      emit('update', dspIntakes.value);
    }

    function setIntakes(numberOfIntakes: number) {
      dspIntakes.value = Array.from(new Array(numberOfIntakes), useIntake);
    }

    const selected = ref(props.intakes.length);
    const dspIntakes = ref(props.intakes as Intake[]);

    return { dspIntakes, selected, resetIntake, handleIntakeSelect, updateIntakes, intakeOptions };
  },
};
</script>

<style scoped>
.intakes__container {
  width: 100%;
  border: 1px blue dashed;
  padding: 1rem;
}
</style>
