import { useState } from 'react';
import { NoData } from '..';
import TotalBalance from '../TotalBalance';
import { useTranslation } from 'react-i18next';

const Closed = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className='flex flex-col gap-6'>
        <TotalBalance />
        <ReadMoreText text='* Chỉ hiển thị các danh mục đầu tư đã đóng trong 90 ngày .Chỉ hiển thị các danh mục đầu tư đã đóng trong 90 ngày .Chỉ hiển thị các danh mục đầu tư đã đóng trong 90 ngày Chỉ hiển thị các danh mục đầu tư đã đóng trong 90 ngày .Chỉ hiển thị các danh mục đầu tư đã đóng trong 90 ngày .Chỉ hiển thị các danh mục đầu tư đã đóng trong 90 ngày' />
      </div>
      <NoData />
    </>
  );
};
export default Closed;

const ReadMoreText = ({ text }: { text: string }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className='w-full max-w-md'>
      <div className='inline text-[10px]'>
        <span className='text-[#9E9E9E]'>
          {!isExpanded ? <>{text.substring(0, 70)}...</> : text}
        </span>{' '}
        <button onClick={handleToggle} className='text-[#177DFF] inline-block ml-1'>
          {isExpanded ? 'See less' : 'See more'}
        </button>
      </div>
    </div>
  );
};
