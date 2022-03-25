import RATES from '../assets/images/rates.svg';
import FORMS from '../assets/images/forms.svg';
import LENDING from '../assets/images/lending.svg';
import HR from '../assets/images/hr.svg';
import ACCOUNTING from '../assets/images/accounting.svg';
import EMPLOYEE from '../assets/images/employee.svg';

export const LENDING_ACTIONS = [
  {
    id: 1,
    entityId: 536168,
    entityType: 'tab',
    title: 'Rates',
    img: RATES,
  },
  {
    id: 2,
    entityId: 507453,
    entityType: 'channel',
    title: 'Lending Procedures ',
    img: LENDING,
  },
  {
    id: 3,
    entityId: 507454,
    entityType: 'channel',
    title: 'Forms/Templates ',
    img: FORMS,
  },
  {
    id: 4,
    entityId: 429564,
    entityType: 'tab',
    title: 'Human Resources',
    img: HR,
  },
  {
    id: 5,
    entityId: 539259,
    entityType: 'tab',
    title: 'Accounting Reports',
    img: ACCOUNTING,
  },
  {
    id: 6,
    entityId: 458593,
    entityType: 'tab',
    title: 'Employee Corner',
    img: EMPLOYEE,
  },
] as const;
