import { IconName } from '@/shared/components/icon/icon';

interface AccountRoute {
  href: string;
  icon: IconName;
  title: keyof Messages['Account_Page']['navbar'];
}
export const ACCOUNTS_ROUTES_MAP: AccountRoute[] = [
  {
    href: '/account',
    icon: 'user',
    title: 'account',
  },
  {
    href: '/account/listings',
    icon: 'list',
    title: 'listings',
  },
];
