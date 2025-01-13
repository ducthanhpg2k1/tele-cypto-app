import React from 'react';
import ListCard from './ListCard';
import ListLanchpad from './ListLanchpad';

const Content = () => {
  return (
    <div className='flex flex-col gap-6 h-full'>
      <ListCard />
      <ListLanchpad/>
    </div>
  );
};

export default Content;
