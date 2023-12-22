import { IconName } from '@/shared/components/icon/icon';

interface AccountRoute {
  href: string;
  icon: IconName;
  title: keyof Messages['Account_Page']['navbar'];
}
export const ACCOUNTS_ROUTES_MAP = (profileId: string): AccountRoute[] => {
  return [
    {
      href: `/account/${profileId}`,
      icon: 'user',
      title: 'account',
    },
    {
      href: `/account/${profileId}/listings`,
      icon: 'list',
      title: 'listings',
    },
  ];
};
