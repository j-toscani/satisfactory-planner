import { Product, ProductObject } from '../types';

function toProductObject(products: Product[]): ProductObject {
  const requierements: { [key: string]: number } = {};
  products.forEach((product) => (requierements[product.name] = product.ammount));
  return requierements;
}

export default class Fabricator {
  reqInput: ProductObject;
  name: string;
  output: Product[];
  inputs: Product[];

  constructor(name: string, reqInput: Product[], output: Product[]) {
    this.name = name;
    this.reqInput = toProductObject(reqInput);
    this.output = output;
    this.inputs = [];
  }

  get _inputs() {
    return toProductObject(this.inputs);
  }

  get efficiency() {
    const efficiencies = this.inputKeys.map(this.checkEfficiency);
    const allEqual = efficiencies.every((element) => element === efficiencies[0]);
    return {
      // If intakes are not optimized, factory will clog and ultimately not produce
      totalEfficency: allEqual ? efficiencies[0] : 0,
      inputs: this.inputKeys.map((key, index) => ({
        name: key,
        efficiency: efficiencies[index],
      })),
    };
  }

  get inputKeys() {
    return Object.keys(this._inputs);
  }

  get missingInputs(): string[] {
    const missing: string[] = [];

    this.inputKeys.forEach((key) => {
      const hasProperty = Object.prototype.hasOwnProperty.call(this.reqInput, key);

      if (!hasProperty) {
        missing.push(key);
      }
    });

    return missing;
  }

  checkEfficiency = (productName: string) => {
    if (!this.reqInput[productName]) {
      return 0;
    }

    const mathmeticalEfficiency = this._inputs[productName] / this.reqInput[productName];
    const efficiency = mathmeticalEfficiency > 1 ? 1 : mathmeticalEfficiency;
    return Math.floor(efficiency * 1e9) / 1e7;
  };
}
