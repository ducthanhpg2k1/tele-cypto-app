import React from 'react';

type ArrowIconProps = {
  width?: number;
  height?: number;
  fill?: string;
  isFilled?: boolean;
  transform?: number;
};

const ArrowIcon: React.FC<ArrowIconProps> = ({
  width = 18,
  height = 18,
  fill = '#9E9E9E',
  isFilled = true,
  transform = 0,
}) => (
  <>
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        transform: `rotate(${transform}deg)`,
      }}
    >
      {isFilled ? (
        <path
          d="M4.67465 6.26955C4.40081 6.50343 4.25549 6.85426 4.28375 7.21327C4.30905 7.53475 4.49408 7.76683 4.58634 7.87704C4.68976 8.00057 4.83072 8.14149 4.97414 8.28486L8.05762 11.3683C8.12076 11.4315 8.19618 11.507 8.26807 11.568C8.35138 11.6388 8.47783 11.7329 8.65231 11.7896C8.87825 11.863 9.12164 11.863 9.34759 11.7896C9.52207 11.7329 9.64852 11.6388 9.73182 11.568C9.80371 11.507 9.87913 11.4315 9.94227 11.3683L13.0258 8.28482C13.1692 8.14147 13.3101 8.00055 13.4136 7.87703C13.5058 7.76683 13.6909 7.53475 13.7162 7.21327C13.7444 6.85426 13.5991 6.50343 13.3252 6.26955C13.08 6.06012 12.7851 6.02685 12.6419 6.01416C12.4815 5.99994 12.2821 5.99997 12.0793 6H5.92055C5.71777 5.99997 5.51845 5.99994 5.35797 6.01416C5.2148 6.02685 4.91986 6.06012 4.67465 6.26955Z"
          fill={fill}
        />
      ) : (
        <path
          d={height >= 20 ? 'M15.5 7.5L10.5 12.5L5.5 7.5' : 'M6 12L10 8L6 4' }
          stroke={fill}
          strokeWidth={height >= 20 ? '1.66667' : '1.33333'}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      )}
    </svg>
  </>
);

export default ArrowIcon;
{
  /* <path d="M15.5 7.5L10.5 12.5L5.5 7.5" stroke="#212121" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/> */
}
