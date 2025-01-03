import {  Typography } from '@mui/material';
import { ArrowDropDownIcon } from '@mui/x-date-pickers';
import ListCardPopular from './ListCardPopular';


const Popular = () => {
  return (
    <div className='flex flex-col gap-4'>
      <ListCardPopular />
    </div>
  );
};
export default Popular;

export const TagAction = ({ label, handleClick }: { label: string; handleClick?: VoidFunction }) => {
  return (
    <div
      onClick={handleClick}
      className='rounded-md max-h-6 w-max py-[2px] pl-[6px] bg-[#F5F5F5] flex gap-[4px] items-center'
    >
      <Typography className='text-xs' color={'#212121'} fontWeight={400}>
        {label}
      </Typography>

      <ArrowDropDownIcon className='text-[#9E9E9E]' />
    </div>
  );
};
