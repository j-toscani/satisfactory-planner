import { Product } from '../../types';

export default [
  {
    name: 'No Fabrication',
    value: (value: Product[]) => ({ output: value, efficiency: 100 }),
  },
];
