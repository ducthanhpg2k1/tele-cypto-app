import * as React from 'react';
const TransferIcon = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke="#177DFF"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m18.333 4 3 3m0 0-3 3m3-3h-14a4 4 0 0 0-4 4m3 9-3-3m0 0 3-3m-3 3h14a4 4 0 0 0 4-4"
    />
  </svg>
);
export default TransferIcon;
