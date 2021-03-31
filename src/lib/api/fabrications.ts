import Fabricator from '../Fabricator';

const fabrications = [
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

export function createFabricator(index: number) {
  const { name, reqInput, output } = fabrications[index];
  return new Fabricator(name, reqInput, output);
}

export default fabrications;
