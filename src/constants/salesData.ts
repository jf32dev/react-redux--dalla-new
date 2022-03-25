import FORMS from '../assets/images/forms.svg';
import PRODUCTS from '../assets/images/products.svg';
import RATES from '../assets/images/rates.svg';
import MARKETING from '../assets/images/marketing.svg';
import EMPLOYEE from '../assets/images/employee.svg';
import HR from '../assets/images/hr.svg';

export const SALES_ACTIONS = [
  {
    id: 1,
    entityId: 394449,
    entityType: 'tab',
    title: 'Forms',
    img: FORMS,
  },
  {
    id: 2,
    entityId: 536168,
    entityType: 'tab',
    title: 'Rates',
    img: RATES,
  },
  {
    id: 3,
    entityId: 395678,
    entityType: 'tab',
    title: 'Products',
    img: PRODUCTS,
  },
  {
    id: 4,
    entityId: 731476,
    entityType: 'channel',
    title: 'Marketing Material',
    img: MARKETING,
  },
  {
    id: 5,
    entityId: 458593,
    entityType: 'tab',
    title: 'Employee Corner',
    img: EMPLOYEE,
  },
  {
    id: 6,
    entityId: 429564,
    entityType: 'tab',
    title: 'Human Resources',
    img: HR,
  },
] as const;
