import type { ComponentType } from 'react';

export interface IconComponentProps {
  className?: string;
}

export const icons = {
  information: 'InformationCircleIcon',
  chart: 'ChartBarIcon',
  arrows: 'ArrowsRightLeftIcon',
  stack: 'CircleStackIcon',
  rocket: 'RocketLaunchIcon',
  bell: 'BellIcon',
  academic: 'AcademicCapIcon',
  gift: 'GiftIcon',
  cpu: 'CpuChipIcon',
  transfer: 'BanknotesIcon',
  list: 'ListBulletIcon',
  copy: 'DocumentDuplicateIcon',
  userPlus: 'UserPlusIcon',
  spot: 'SpotIcon',
  launchpad: 'LaunchpadIcon',
  notification: 'NotificationIcon',
  airdrop: 'AirdropIcon',
  bot: 'TradeBotIcon',
  invite: 'InviteIcon',
  future: 'FutureIcon',
  megadrop: 'MegaDrop',
  exchange: 'Exchange',
  academy: 'Academy',
} as const;

export type IconName = keyof typeof icons;

export interface MenuItem {
  iconName: IconName;
  label: string;
  id: string;
  action?: () => void;
}

export type IconMapType = {
  [key in IconName]: ComponentType<IconComponentProps>;
};
