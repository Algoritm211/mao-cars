import {IconName} from "@/shared/components/icon/icon";

interface AccountRoute {
  href: string;
  icon: IconName,
  title: string,
}
export const ACCOUNTS_ROUTES_MAP: AccountRoute[] = [
  {
    href: '/account',
    icon: 'user',
    title: 'Account'
  },
  {
    href: '/account/listings',
    icon: 'list',
    title: 'Listings'
  }
]
