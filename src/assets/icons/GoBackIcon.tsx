import React from 'react';

type GoBackIconProps = {
  width?: number;
  height?: number;
  fill?: string;
  handleClick: () => void;
};

const GoBackIcon: React.FC<GoBackIconProps> = ({
  width = 14,
  height = 12,
  fill = '#000000',
  handleClick = () => {},
}) => (
  <>
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      onClick={handleClick}
    >
      <path
        d='M1 6H13M1 6L6 1M1 6L6 11'
        stroke={fill}
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  </>
);

export default GoBackIcon;
