import * as React from 'react';
import { SVGProps } from 'react';
const ChartIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={24} height={24} fill='none' {...props}>
    <path
      fill='#212121'
      d='M4 7.2c0-1.12 0-1.68.218-2.108a2 2 0 0 1 .874-.874C5.52 4 6.08 4 7.2 4h.6c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874C11 5.52 11 6.08 11 7.2V11h2v-.8c0-1.12 0-1.68.218-2.108a2 2 0 0 1 .874-.874C14.52 7 15.08 7 16.2 7h.6c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874C20 8.52 20 9.08 20 10.2v.8h1a1 1 0 1 1 0 2h-1v.8c0 1.12 0 1.68-.218 2.108a2 2 0 0 1-.874.874C18.48 17 17.92 17 16.8 17h-.6c-1.12 0-1.68 0-2.108-.218a2 2 0 0 1-.874-.874C13 15.48 13 14.92 13 13.8V13h-2v3.8c0 1.12 0 1.68-.218 2.108a2 2 0 0 1-.874.874C9.48 20 8.92 20 7.8 20h-.6c-1.12 0-1.68 0-2.108-.218a2 2 0 0 1-.874-.874C4 18.48 4 17.92 4 16.8V13H3a1 1 0 1 1 0-2h1V7.2Z'
    />
  </svg>
);
export default ChartIcon;
