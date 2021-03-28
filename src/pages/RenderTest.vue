<template>
  <main class="container">
    <h1>Render Test</h1>
    <children />
    <button @click="addRow">Add Row</button>
  </main>
</template>

<script lang="ts">
import { ref, Ref, h } from 'vue';

export default {
  name: 'RenderTest',
  setup() {
    const row = {
      text: 'I am a Row',
      children: [1, 2, 3],
    };
    const rows: Ref<any> = ref([{ text: 'Ole Ole', children: [row, row, row] }]);

    function addRow() {
      rows.value.push({ ...rows.value[rows.value.length - 1] });
    }

    function renderGrid(element: any, children: any) {
      if (children) {
        return h(
          'div',
          { class: 'row' },
          children.map((element: any) => renderGrid(element, element.children)),
        );
      }
      return h('span', { class: 'child' }, element.text ?? 'me');
    }

    return {
      rows,
      addRow,
      children: () =>
        h('div', { class: ['outer-parent'] }, ...rows.value.map((row: any) => renderGrid(row, row.children))),
    };
  },
};
</script>

<style>
.child {
  border: 1px solid red;
  margin: 5px;
  height: 1rem;
  width: 1rem;
}

.row {
  border: 1px solid green;
  display: flex;
  height: 2rem;
  width: 100%;
}

.parent {
  border: 1px solid blue;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.outer-parent {
  display: flex;
  flex-flow: column;
}
</style>
