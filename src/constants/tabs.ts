export const HOME_TABS = {
  EXPLORE: 'explore',
  FOLLOW: 'follow',
  BUZZ: 'buzz',
  NOTIFICATIONS: 'notifications',
  NEWS: 'news',
} as const;

export const HOME_TAB_LABELS = {
  [HOME_TABS.EXPLORE]: 'Explore',
  [HOME_TABS.FOLLOW]: 'Follow',
  [HOME_TABS.BUZZ]: 'Buzz',
  [HOME_TABS.NOTIFICATIONS]: 'Notifications',
  [HOME_TABS.NEWS]: 'News',
} as const;

export type HomeTabKey = keyof typeof HOME_TABS;
export type HomeTabValue = (typeof HOME_TABS)[HomeTabKey];
