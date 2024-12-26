import * as React from 'react';
const MenuRateIcon = ({ color = 'currentColor', ...props }) => (
  <svg
    width='14'
    height='14'
    viewBox='0 0 14 14'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path d='M0 0H7V4H0V0Z' fill='#212121' />
    <rect y='5' width='7' height='4' fill='#212121' />
    <rect y='10' width='7' height='4' fill='#212121' />
    <rect x='8' width='6' height='6.5' fill='#F54336' />
    <rect x='8' y='7.5' width='6' height='6.5' fill='#4AAF57' />
  </svg>
);
export default MenuRateIcon;
