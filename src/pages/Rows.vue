<template>
  <main class="container">
    <h1>Facility</h1>
    <Process />
    <!-- <div v-for="(row, index) in rows" :key="index">
      <li class="facility__row">
        <span>{{ row.name }}</span>
        <span class="box__container">
          <span
            v-for="(item, innerIndex) in Array.from(new Array(row.elements), (_e, i) => i + 1)"
            :key="innerIndex"
            class="box__item"
          >
          </span>
        </span>
        <button @click="remove(index)">remove</button>
      </li>
    </div>
    <div class="facility__row">
      <span></span>
      <div class="box__container">
        <select v-for="(element, index) in lastRow" :key="index">
          <option value="split">Splitter</option>
          <option value="merge">Merger</option>
          <option value="create">Frabricate</option>
        </select>
      </div>
      <span></span>
    </div> -->
  </main>
</template>

<script lang="ts">
import { Ref, ref, computed, ComputedRef } from 'vue';
import Process from '../components/Process.vue';

export default {
  name: 'Rows',
  components: {
    Process,
  },
  setup() {
    const row = {
      name: 'New Row',
      elements: 3,
    };

    const rows: Ref<any[]> = ref([row]);
    const lastRow: ComputedRef<number[]> = computed(() =>
      createArrayFromNumber(rows.value[rows.value.length - 1].elements),
    );

    function addRow() {
      rows.value.push(row);
    }

    function remove(position: number) {
      rows.value.splice(position, 1);
    }

    function createArrayFromNumber(elements: number) {
      return Array.from(new Array(elements), (_e, i) => i + 1);
    }

    return {
      rows,
      remove,
      addRow,
      lastRow,
      createArrayFromNumber,
    };
  },
};
</script>

<style scoped>
.page {
  display: flex;
  flex-flow: column;
  width: 100%;
  min-height: 100vh;
}

ul {
  padding: 0;
}

.box__container {
  flex-grow: 1;
  display: flex;
  justify-content: space-around;
}

.box__item {
  display: inline-block;
  height: 2rem;
  width: 2rem;
  border: 1px solid black;
}

.facility__row {
  display: grid;
  grid-template-columns: 16ch 1fr 16ch;
}

li.facility__row {
  margin-bottom: 2rem;
}
</style>
