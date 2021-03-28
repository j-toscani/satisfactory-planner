import { reactive } from 'vue';

export interface Intake {
  ammount: number;
  name: string;
}

function useIntake() {
  const intake: Intake = reactive({
    ammount: 0,
    name: '',
  });
  return intake;
}

export default useIntake;
