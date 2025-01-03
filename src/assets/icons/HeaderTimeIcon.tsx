import * as React from 'react';
const HeaderTimeIcon = (props: any) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={24} height={24} fill='none' {...props}>
    <g fill='#424242'>
      <path
        fillRule='evenodd'
        d='M12 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16Zm0 4a1 1 0 0 1 1 1v2.586l1.707 1.707a1 1 0 0 1-1.414 1.414l-2-2A1 1 0 0 1 11 10V7a1 1 0 0 1 1-1Z'
        clipRule='evenodd'
      />
      <path d='M12 19a9 9 0 0 0 8-4.873V15.6c0 2.24 0 3.36-.436 4.216a4 4 0 0 1-1.748 1.748C16.96 22 15.84 22 13.6 22h-3.2c-2.24 0-3.36 0-4.216-.436a4 4 0 0 1-1.748-1.748C4 18.961 4 17.84 4 15.6v-1.473A9 9 0 0 0 12 19Z' />
    </g>
  </svg>
);
export default HeaderTimeIcon;
