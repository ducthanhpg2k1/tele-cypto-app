import * as React from 'react';
const FutureIcon = ({ color = 'currentColor', ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <g fill={color}>
      <path
        fillRule="evenodd"
        d="M15 2H8.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C4 4.28 4 5.12 4 6.8v10.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C6.28 22 7.12 22 8.8 22h6.4c.29 0 .556 0 .8-.002V19.83a3 3 0 0 1-1.121-4.95l2-2A3 3 0 0 1 20 12.17V7l-5-5Zm-1 1.5v3.7c0 .28 0 .42.055.527a.5.5 0 0 0 .218.218C14.38 8 14.52 8 14.8 8h3.7L14 3.5ZM8 8a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2H8Zm0 4a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2H8Zm0 4a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2H8Z"
        clipRule="evenodd"
      />
      <path d="M20 17.414V21a1 1 0 1 1-2 0v-3.586l-.293.293a1 1 0 0 1-1.414-1.414l2-2a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1-1.414 1.414L20 17.414Z" />
    </g>
  </svg>
);
export default FutureIcon;
