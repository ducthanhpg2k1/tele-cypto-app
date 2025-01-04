// types.ts
import { Direction } from '@mui/material';
import React from 'react';

export interface TabItem {
  key: string | number;
  label: string;
  content?: React.ReactNode;
}

export interface TabsProps {
  tabs: TabItem[];
  defaultTab?: number;
  children?: React.ReactNode;
}

export interface TabPanelProps {
  children?: React.ReactNode;
  value: number;
  index: number;
  dir?: Direction;
  isNoScroll?:boolean
}
