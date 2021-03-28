import Fabricator from '../Fabricator';
import { reactive } from 'vue';

const steelPlateFabricator = new Fabricator(
  [{ name: 'Iron Bars', ammount: 30 }],
  [{ name: 'Steel Plates', ammount: 30 }],
);
const ironFabricator = new Fabricator([{ name: 'Iron Ore', ammount: 60 }], [{ name: 'Iron Bars', ammount: 30 }]);

const fabricatory = [
  {
    name: 'Steel Plate Constructor',
    factory: steelPlateFabricator,
    efficiency: steelPlateFabricator.efficiency,
  },
  {
    name: 'Iron Ore Smelter',
    factory: ironFabricator,
    efficiency: ironFabricator.efficiency,
  },
];

export default fabricatory.map((factory) => reactive(factory));
