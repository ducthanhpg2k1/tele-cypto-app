import { t } from 'i18next';
import { TabItem } from 'src/components/ui/tabs/types';

export const TAB_TRADES: TabItem[] = [
  {
    label: t('navigation.quickActions.convert'),
    key: 'transfer',
    content: <></>,
  },
  {
    label: t('navigation.quickActions.spot'),
    key: 'Giao ngay',
    content: <></>,
  },
  {
    label: 'Margin',
    key: 'margin',
    content: <></>,
  },
  {
    label: 'Bot',
    key: 'bot',
    content: <></>,
  },
  {
    label: t('navigation.quickActions.copytrade'),
    key: 'copy',
    content: <></>,
  },
];

export const TAB_FUTURES: TabItem[] = [
  {
    label: 'Future',
    key: 'future',
    content: <></>,
  },
  {
    label: t('navigation.quickActions.copytrade'),
    key: 'copy',
    content: <></>,
  },
  {
    label: 'Bot',
    key: 'Bot',
    content: <></>,
  },
  {
    label: 'Rank',
    key: 'rank',
    content: <></>,
  },
];

export const DOWN_TRADES: { price: string; value: string }[] = [
  {
    value: '0,00028',
    price: '69.464,12',
  },
  {
    value: '0,00028',
    price: '69.464,12',
  },
  {
    value: '0,00028',
    price: '69.464,12',
  },
  {
    value: '0,00028',
    price: '69.464,12',
  },
  {
    value: '0,00028',
    price: '69.464,12',
  },
  {
    value: '0,00028',
    price: '69.464,12',
  },
  {
    value: '0,00028',
    price: '69.464,12',
  },
];

export const mockDataRate = [
  {
    label: '0.001',
    value: '0.001',
  },
  {
    label: '0.01',
    value: '0.01',
  },
  {
    label: '0.1',
    value: '0.1',
  },
];
