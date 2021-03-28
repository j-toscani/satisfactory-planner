import Fabricator from '../Fabricator';
import { reactive } from 'vue';

const steelFabricator = new Fabricator([{ name: 'steel', ammount: 60 }], [{ name: 'plates', ammount: 30 }]);

const fabs = [
  {
    name: 'To Plates',
    factory: steelFabricator,
    efficiency: steelFabricator.efficiency,
  },
];

export default fabs.map((factory) => reactive(factory));
