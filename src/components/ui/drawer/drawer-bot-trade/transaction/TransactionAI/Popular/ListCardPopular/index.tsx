import DrawerDetailBot from 'src/components/ui/drawer/drawer-detail-bot';
import CardContentTabGrid from '../../../../tab-grid/CardContentTabGrid';
import { useRef } from 'react';

const ListCardPopular = () => {
  const refDrawerDetailBot: any = useRef()
  return (
    <div className='flex flex-col gap-4'>
      {Array.from({ length: 10 }).map((_, key) => {
        return <CardContentTabGrid onClick={() => refDrawerDetailBot.current.onOpen()} key={key + 'card content'} />;
      })}
      <DrawerDetailBot ref={refDrawerDetailBot} />

    </div>
  );
};
export default ListCardPopular;
