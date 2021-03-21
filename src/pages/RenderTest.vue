<template>
  <main class="container">
    <h1>Render Test</h1>
    <div class="outer-parent">
      <grid />
    </div>
  </main>
</template>

<script lang="ts">
import { h, reactive, RendererElement, RendererNode, VNode } from 'vue';

export default {
  name: 'RenderTest',

  setup() {
    const state = reactive({
      count: 0,
    });
    const grid = createNewSection([subGridElement(3), subGridElement(2)]);

    function createNewSection(children: VNode<any>[]) {
      return h('div', { class: 'parent' }, children);
    }

    function subGridElement(elements: number) {
      const elementsArray = Array.from(new Array(elements), (_e, i) => h('div', { class: 'child' }));
      return createNewSection(elementsArray);
    }

    return {
      grid,
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
