import React from 'react';

type IconProps = {
  width?: number;
  height?: number;
  fill?: string;
  handleClick?: () => void;
};

const SwitchHorizontal: React.FC<IconProps> = (props) => (
  <>
    <svg
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M15 8.33398L17.5 5.83398M17.5 5.83398L15 3.33398M17.5 5.83398H5.83333M5 11.6673L2.5 14.1673M2.5 14.1673L5 16.6673M2.5 14.1673H14.1667'
        stroke='#177DFF'
        stroke-width='1.66667'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </svg>
  </>
);

export default SwitchHorizontal;
