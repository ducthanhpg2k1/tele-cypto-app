import { IconButton, Typography } from '@mui/material';
import Image from 'next/image';
import { ArrowDropDownIcon } from '@mui/x-date-pickers';
import CustomInput from 'src/components/ui/drawer/drawer-transfer/CustomInput';

const SettingPrice = () => {
  return (
    <div className='flex flex-col gap-4'>
      <div className='flex flex-col gap-1'>
        <div className='flex justify-between items-center'>
          <Typography className='text-sm' color={'#212121'} fontWeight={500}>
            1. Khung giá
          </Typography>
          <div className='flex items-center gap-1'>
            <Image alt='' width={18} height={18} src={'/assets/iconly/ic-note.svg'} />
            <Typography className='text-xs' color={'#212121'} fontWeight={400}>
              AI 3 ngày
            </Typography>
          </div>
        </div>
        <div className='grid grid-cols-2 gap-4'>
          <CustomInput placeholder='Giá sản' />
          <CustomInput placeholder='Giá trần' />
        </div>
      </div>
      <div className='flex flex-col gap-1'>
        <Typography className='text-sm' color={'#212121'} fontWeight={500}>
          2. Số lượng lưới
        </Typography>

        <CustomInput
          placeholder='2 - 170'
          endContent={
            <div className='flex items-center gap-1'>
              <Typography className='text-sm' color={'#212121'} fontWeight={500}>
                Số học
              </Typography>
              <ArrowDropDownIcon className='text-[#9E9E9E]' />
            </div>
          }
        />
      </div>
      <div className='flex flex-col gap-1'>
        <div className='flex justify-between items-center'>
          <Typography className='text-sm' color={'#212121'} fontWeight={500}>
            3. Khung giá
          </Typography>
          <div className='flex items-center gap-1'>
            <Typography className='text-xs' color={'#212121'} fontWeight={400}>
              Số học
            </Typography>
            <ArrowDropDownIcon className='text-[#9E9E9E]' />
          </div>
        </div>

        <CustomInput
          placeholder='Giá trần'
          endContent={
            <Typography variant='body1' className='font-semibold text-[14px]'>
              BNB
            </Typography>
          }
        />
      </div>
    </div>
  );
};
export default SettingPrice;
