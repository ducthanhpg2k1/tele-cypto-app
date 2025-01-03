import * as React from 'react';
const ThreeDotIcon = (props: any) => (
  <svg
    width='24'
    height='25'
    viewBox='0 0 24 25'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <g clip-path='url(#clip0_34_1313)'>
      <path
        d='M4.5 11C3.675 11 3 11.675 3 12.5C3 13.325 3.675 14 4.5 14C5.325 14 6 13.325 6 12.5C6 11.675 5.325 11 4.5 11ZM19.5 11C18.675 11 18 11.675 18 12.5C18 13.325 18.675 14 19.5 14C20.325 14 21 13.325 21 12.5C21 11.675 20.325 11 19.5 11ZM12 11C11.175 11 10.5 11.675 10.5 12.5C10.5 13.325 11.175 14 12 14C12.825 14 13.5 13.325 13.5 12.5C13.5 11.675 12.825 11 12 11Z'
        fill={props.fill || '#9E9E9E'}
      />
    </g>
    <defs>
      <clipPath id='clip0_34_1313'>
        <rect width='24' height='24' fill='white' transform='translate(0 0.5)' />
      </clipPath>
    </defs>
  </svg>
);
export default ThreeDotIcon;
