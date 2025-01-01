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

export const DATA_LIMIT = [
  {
    id: 1,
    title: 'Limit',
    value: 1,
  },
  {
    id: 2,
    title: 'Market',
    value: 2,
  },
  {
    id: 3,
    title: 'Stop Limit',
    value: 3,
  },
  {
    id: 4,
    title: 'Stop Market',
    value: 4,
  },
  {
    id: 5,
    title: 'Trailing Stop',
    value: 5,
  },
  {
    id: 6,
    title: 'OCO',
    value: 6,
  },
  {
    id: 7,
    title: 'Lệnh thuật toán',
    value: 7,
  },
];

export const DATA_RATE = [
  {
    id: 1,
    title: '0.01',
    value: 0.01,
  },
  {
    id: 2,
    title: '0.1',
    value: 0.1,
  },
  {
    id: 3,
    title: '1',
    value: 1,
  },
  {
    id: 4,
    title: '10',
    value: 10,
  },
  {
    id: 5,
    title: '50',
    value: 50,
  },
  {
    id: 6,
    title: '100',
    value: 100,
  },
];
