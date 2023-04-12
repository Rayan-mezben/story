import { sankeydiagram } from '../composants/sankeydiagram';

export default {
  title: 'Example/charts/sankeydiagram',
  component: sankeydiagram,

};

export const first_cas = {
  args: {
    lab:["A1", "A2", "B1", "B2", "C1", "C2"],
    coulor:["blue", "blue", "red", "red", "green", "green"],
    sources:[0,1,0,2,3,3],
    dest:[2,3,3,4,4,5],
    valeur:[8,4,2,8,4,2]
  },
};
