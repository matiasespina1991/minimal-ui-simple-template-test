// components
import SvgIconStyle from '../../../components/SvgIconStyle';

// ----------------------------------------------------------------------

const getIcon = (name: string) => (
  <SvgIconStyle src={`/icons/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const ICONS = {
  user: getIcon('ic_user'),
  ecommerce: getIcon('ic_ecommerce'),
  analytics: getIcon('ic_analytics'),
  dashboard: getIcon('ic_dashboard'),
  calendar: getIcon('ic_calendar')
};

const sidebarConfig = [
  // GENERAL
  // ----------------------------------------------------------------------
  {
    subheader: 'menu',
    items: [
      { title: 'Dashboard', path: '/dashboard/main', icon: ICONS.dashboard },
      { title: 'Purchases', path: '/dashboard/purchases', icon: ICONS.ecommerce },
      { title: 'Dates', path: '/dashboard/dates', icon: ICONS.calendar },
      { title: 'Statistics', path: '/dashboard/statistics', icon: ICONS.analytics },
    ],
  },

  // MANAGEMENT
  // ----------------------------------------------------------------------
  {
    subheader: 'advanced settings',
    items: [
      {
        title: 'preferences',
        path: '/dashboard/preferences',
        icon: ICONS.user,
        children: [
          { title: 'Appearence', path: '/dashboard/preferences/appearence' },
          { title: 'Privacy and security', path: '/dashboard/preferences/privacy-and-security' },
          { title: 'Error Logs', path: '/dashboard/preferences/error-logs' },
        ],
      },
    ],
  },
];

export default sidebarConfig;
