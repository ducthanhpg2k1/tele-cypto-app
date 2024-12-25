import React from 'react';

type IconProps = {
  width?: number;
  height?: number;
  fill?: string;
  handleClick?: () => void;
};

const SwitchVertical: React.FC<IconProps> = ({
  width = 21,
  height = 20,
  fill = '#000000',
  handleClick = () => {},
}) => (
  <>
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={handleClick}
    >
      <path
        d="M8.83331 5L6.33331 2.5M6.33331 2.5L3.83331 5M6.33331 2.5V14.1667M12.1666 15L14.6666 17.5M14.6666 17.5L17.1666 15M14.6666 17.5V5.83333"
        stroke={fill}
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </>
);

export default SwitchVertical;
