import { scatterplot } from '../composants/scatterplot';

export default {
  title: 'Example/charts/scatterplot',
  component: scatterplot,
};

const randomArr = Array.from({length: 100}, () => Math.random() * 10)
const randomArr2 = Array.from({length: 100}, () => Math.random() * 10)

export const first_case = {
  args: {
    xx: randomArr,
    yy: randomArr2,
  },
};

