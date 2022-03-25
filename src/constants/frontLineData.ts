import FORMS from '../assets/images/forms.svg';
import PRODUCTS from '../assets/images/products.svg';
import RATES from '../assets/images/rates.svg';
import POLICIES from '../assets/images/policies.svg';
import LEARNING from '../assets/images/learning.svg';
import HR from '../assets/images/hr.svg';

export const FRONTLINE_ACTIONS = [
  {
    id: 1,
    entityId: 394449,
    entityType: 'tab',
    title: 'Forms',
    img: FORMS,
  },
  {
    id: 2,
    entityId: 395678,
    entityType: 'tab',
    title: 'Products',
    img: PRODUCTS,
  },
  {
    id: 3,
    entityId: 536168,
    entityType: 'tab',
    title: 'Rates',
    img: RATES,
  },
  {
    id: 4,
    entityId: 558214,
    entityType: 'tab',
    title: 'Policies & Procedures',
    img: POLICIES,
  },
  {
    id: 5,
    entityId: 652232,
    entityType: 'tab',
    title: 'Learning & Development',
    img: LEARNING,
  },
  {
    id: 6,
    entityId: 429564,
    entityType: 'tab',
    title: 'Human Resources',
    img: HR,
  },
] as const;
