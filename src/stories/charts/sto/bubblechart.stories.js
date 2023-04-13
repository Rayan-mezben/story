import { bubblechart } from '../composants/bubblechart';

export default {
  title: 'Example/charts/bubblechart',
  component: bubblechart,

};
const randomArr = Array.from({length: 100}, () => Math.random() * 10)
const randomArr2 = Array.from({length: 100}, () => Math.random() * 10)
const randomArr3 = Array.from({length: 100}, () => Math.random() * 40)


export const first_case = {
  args: {
    titre:"bubblechart",
    x: randomArr,
    y: randomArr2,
    size:randomArr3

  },
};

