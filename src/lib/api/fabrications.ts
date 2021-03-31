import Fabricator from '../Fabricator';
import { reactive } from 'vue';

const fabricators = [
  {
    name: 'Steel Plate Constructor',
    reqInput: [{ name: 'Iron Bars', ammount: 30 }],
    output: [{ name: 'Steel Plates', ammount: 30 }],
  },
  {
    name: 'Iron Ore Smelter',
    reqInput: [{ name: 'Iron Ore', ammount: 60 }],
    output: [{ name: 'Iron Bars', ammount: 30 }],
  },
];

export default fabricators.map((config) => {
  const { name, reqInput, output } = config;
  return reactive(new Fabricator(name, reqInput, output));
});
