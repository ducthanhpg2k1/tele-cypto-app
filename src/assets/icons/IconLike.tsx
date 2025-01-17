const IconLike = ({ active }: { active: boolean }) => {
  return (
    <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M10.0009 3.77415C11.9584 2.01665 14.9834 2.07498 16.8692 3.96415C18.7542 5.85415 18.8192 8.86415 17.0659 10.8275L9.99919 17.9042L2.93419 10.8275C1.18086 8.86415 1.24669 5.84915 3.13086 3.96415C5.01836 2.07748 8.03752 2.01415 10.0009 3.77415Z'
        fill={active ? '#F54336' : '#BDBDBD'}
      />
    </svg>
  );
};
export default IconLike;
