import { TimeframeOption } from 'src/types/trading';

export const TIMEFRAME_OPTIONS: TimeframeOption[] = [
  { value: 5, label: '5m' },
  { value: 15, label: '15m' },
  { value: 30, label: '30m' },
  { value: 60, label: '1h' },
  { value: 240, label: '4h' },
  { value: 720, label: '12h' },
  { value: 1440, label: '1D' },
];
