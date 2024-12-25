import * as React from 'react';
import { SVGProps } from 'react';

const CenterIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={46}
    height={46}
    fill="none"
    {...props}
  >
    <path
      fill={props.color || '#757575'}
      stroke={props.color || '#757575'}
      strokeWidth={2}
      d="M26.535 3.121a5 5 0 0 0-7.07 0L3.12 19.464a5 5 0 0 0 0 7.072l16.343 16.343a5 5 0 0 0 7.072 0l16.343-16.343a5 5 0 0 0 0-7.072L26.536 3.122Z"
    />
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M33 26c0 3.87-3.13 7-7 7l1.05-1.75M13 20c0-3.87 3.13-7 7-7l-1.05 1.75"
    />
    <path
      fill="#fff"
      d="M33 15.2v.11c0 .28-.22.5-.5.5h-9c-.28 0-.5-.22-.5-.5v-.11c0-1.76.44-2.2 2.22-2.2h5.56c1.78 0 2.22.44 2.22 2.2ZM23.5 16.81c-.28 0-.5.22-.5.5v1.99c0 1.76.44 2.2 2.22 2.2h5.56c1.78 0 2.22-.44 2.22-2.2v-1.99c0-.28-.22-.5-.5-.5h-9ZM23 26.7v.11c0 .28-.22.5-.5.5h-9c-.28 0-.5-.22-.5-.5v-.11c0-1.76.44-2.2 2.22-2.2h5.56c1.78 0 2.22.44 2.22 2.2ZM13.5 28.31c-.28 0-.5.22-.5.5v1.99c0 1.76.44 2.2 2.22 2.2h5.56c1.78 0 2.22-.44 2.22-2.2v-1.99c0-.28-.22-.5-.5-.5h-9Z"
    />
  </svg>
);
export default CenterIcon;
