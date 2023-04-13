import { linechart } from '../composants/linechart';

export default {
  title: 'Example/charts/linechart',
  component: linechart,

};
const randomArr = Array.from({length: 5}, () => Math.random() * 10)
const randomArr2 = Array.from({length: 5}, () => Math.random() * 10)

export const first_case = {
  args: {
    x: randomArr,
    y: randomArr2,
  },
};

