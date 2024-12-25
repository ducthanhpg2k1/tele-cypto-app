import { ReactNode } from 'react';

export interface TransactionCardProps {
  icon: any;
  title: string;
  description: string;
  onClick?: () => void;
  subDesc?: string;
}

export interface DepositLayoutProps {
  children: ReactNode;
}
