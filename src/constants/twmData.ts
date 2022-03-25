import MARKETING from '../assets/images/marketing.svg';
import FORMS from '../assets/images/forms.svg';
import SALES from '../assets/images/sales.svg';
import LEARNING from '../assets/images/learning.svg';
import LIBRARY from '../assets/images/library.svg';
import EMPLOYEE from '../assets/images/employee.svg';

export const TWM_ACTIONS = [
  {
    id: 1,
    entityId: 394104,
    entityType: 'channel',
    title: 'Investment Info',
    img: MARKETING,
  },
  {
    id: 2,
    entityId: 389770,
    entityType: 'channel',
    title: 'Client Forms',
    img: FORMS,
  },
  {
    id: 3,
    entityId: 589835,
    entityType: 'channel',
    title: 'Sales/Marketing Material',
    img: SALES,
  },
  {
    id: 4,
    entityId: 710136,
    entityType: 'channel',
    title: 'Learning Center',
    img: LEARNING,
  },
  {
    id: 5,
    entityId: 566802,
    entityType: 'channel',
    title: 'Library',
    img: LIBRARY,
  },
  {
    id: 6,
    entityId: 458593,
    entityType: 'tab',
    title: 'Employee Corner',
    img: EMPLOYEE,
  },
] as const;
