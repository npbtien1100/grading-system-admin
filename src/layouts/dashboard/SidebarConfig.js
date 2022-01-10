import { Icon } from '@iconify/react';
import pieChart2Fill from '@iconify/icons-eva/pie-chart-2-fill';
import peopleFill from '@iconify/icons-eva/people-fill';

// ----------------------------------------------------------------------

const getIcon = (name) => <Icon icon={name} width={22} height={22} />;

const sidebarConfig = [
  {
    title: 'dashboard',
    path: '/dashboard/app',
    icon: getIcon(pieChart2Fill)
  },
  {
    title: 'admins',
    path: '/dashboard/admins',
    icon: getIcon('clarity:administrator-solid')
  },
  {
    title: 'users',
    path: '/dashboard/users',
    icon: getIcon(peopleFill)
  },
  {
    title: 'classes',
    path: '/dashboard/classes',
    icon: getIcon('ic:round-dashboard-customize')
  }
];

export default sidebarConfig;
// {
//   title: 'login',
//   path: '/login',
//   icon: getIcon(lockFill)
// },
// {
//   title: 'register',
//   path: '/register',
//   icon: getIcon('')
// },
// {
//   title: 'Not found',
//   path: '/404',
//   icon: getIcon(alertTriangleFill)
// }
