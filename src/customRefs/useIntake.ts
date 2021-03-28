import { reactive } from 'vue';
import { Product } from '../types';

function useIntake() {
  const intake: Product = reactive({
    ammount: 0,
    name: '',
  });
  return intake;
}

export default useIntake;
