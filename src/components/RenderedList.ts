import { h, toRefs } from 'vue';

export default {
  name: 'RenderedList',
  props: {
    rows: {
      type: Array,
      default: [],
    },
  },
};
