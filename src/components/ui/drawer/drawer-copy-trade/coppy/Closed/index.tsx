import { useState } from 'react';
import { NoData } from '..';
import TotalBalance from '../TotalBalance';
import { useTranslation } from 'react-i18next';

const Closed = () => {
  const { t } = useTranslation();

  return (
    <div className='flex flex-col gap-6'>
      <TotalBalance />
      {/* <ReadMoreText /> */}
      <NoData />
    </div>
  );
};
export default Closed;

// const ReadMoreText = () => {
//   const [isExpanded, setIsExpanded] = useState(false);

//   const handleToggle = () => {
//     setIsExpanded(!isExpanded);
//   };

//   return (
//     <div className='w-full flex items-center gap-1 max-w-md'>
//       <p
//         className={`text-[10px] w-11/12 text-[#9E9E9E] ${isExpanded ? 'line-clamp-none' : 'line-clamp-1'} font-normal leading-3 overflow-hidden`}
//       >
//         * Chỉ hiển thị các danh mục đầu tư đã đóng trong 90 ngày Chỉ hiển thị các danh mục đầu tư đã
//         đóng trong 90 ngày Chỉ hiển thị các danh mục đầu tư đã đóng trong 90 ngày Chỉ hiển thị các
//         danh mục đầu tư đã đóng trong 90 ngàyChỉ hiển thị các danh mục đầu tư đã đóng trong 90
//         ngàyChỉ hiển thị các danh mục đầu tư đã đóng trong 90 ngày
//       </p>
//       {!isExpanded && (
//         <button
//           onClick={handleToggle}
//           className='text-[#177DFF] w-[60px] !text-[10px] font-normal leading-3 text-sm'
//         >
//           {isExpanded ? 'See less' : 'See more'}
//         </button>
//       )}
//     </div>
//   );
// };
