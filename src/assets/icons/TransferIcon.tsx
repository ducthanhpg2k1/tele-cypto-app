import React from 'react';

type IconProps = {
  width?: number;
  height?: number;
  fill?: string;
};

const TransferIcon: React.FC<IconProps> = ({ width = 21, height = 20, fill = '#177DFF' }) => (
  <svg
    width={width}
    height={height}
    viewBox={`0 0 ${width} ${height}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16.625 1L19.625 4M19.625 4L16.625 7M19.625 4H5.625C3.41586 4 1.625 5.79086 1.625 8M4.625 17L1.625 14M1.625 14L4.625 11M1.625 14H15.625C17.8341 14 19.625 12.2091 19.625 10"
      stroke={fill}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default TransferIcon;
