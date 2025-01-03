import * as React from 'react';
const IconMarket = ({ color = 'currentColor', ...props }) => (
  <svg
    width='20'
    height='20'
    viewBox='0 0 20 20'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M17.65 2.35H15.1V1.5H4.9V2.35H2.35C1.84 2.35 1.5 2.69 1.5 3.2V5.24C1.5 7.195 2.945 8.81 4.9 9.065V9.15C4.9 11.615 6.6 13.655 8.895 14.165L8.3 15.95H6.345C6.005 15.95 5.665 16.205 5.58 16.545L4.9 18.5H15.1L14.42 16.545C14.335 16.205 13.995 15.95 13.655 15.95H11.7L11.105 14.165C13.4 13.655 15.1 11.615 15.1 9.15V9.065C17.055 8.81 18.5 7.195 18.5 5.24V3.2C18.5 2.69 18.16 2.35 17.65 2.35ZM4.9 7.365C3.965 7.11 3.2 6.26 3.2 5.24V4.05H4.9V7.365ZM11.7 10L10 9.065L8.3 10L8.725 8.3L7.45 6.6H9.235L10 4.9L10.765 6.6H12.55L11.275 8.3L11.7 10ZM16.8 5.24C16.8 6.26 16.035 7.195 15.1 7.365V4.05H16.8V5.24Z'
      fill={color}
    />
  </svg>
);
export default IconMarket;
