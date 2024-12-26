import { Card, Typography } from '@mui/material';
import Button from 'src/components/ui/button';

const DATA_CARD = [
  {
    id: 1,
    title: 'Đi ngang ngắn hạn',
    priceRange: {
      label: 'Khung giá (BNB)',
      value: '0,00233',
    },
    profit: {
      label: 'Lợi nhuận/ lưới (đã khấu trừ phí)',
      value: '0,2% - 0,28% ',
    },
    numberMeshes: {
      label: 'Số lượng lưới',
      value: '43',
    },
  },
  {
    id: 2,
    title: 'Đi ngang ngắn hạn đến trung hạn',
    priceRange: {
      label: 'Khung giá (BNB)',
      value: '0,00233',
    },
    profit: {
      label: 'Lợi nhuận/ lưới (đã khấu trừ phí)',
      value: '0,2% - 0,28% ',
    },
    numberMeshes: {
      label: 'Số lượng lưới',
      value: '43',
    },
  },
  {
    id: 3,
    title: 'Đi ngang ngắn hạn',
    priceRange: {
      label: 'Khung giá (BNB)',
      value: '0,00233',
    },
    profit: {
      label: 'Lợi nhuận/ lưới (đã khấu trừ phí)',
      value: '0,2% - 0,28% ',
    },
    numberMeshes: {
      label: 'Số lượng lưới',
      value: '43',
    },
  },
  {
    id: 4,
    title: 'Đi ngang ngắn hạn',
    priceRange: {
      label: 'Khung giá (BNB)',
      value: '0,00233',
    },
    profit: {
      label: 'Lợi nhuận/ lưới (đã khấu trừ phí)',
      value: '0,2% - 0,28% ',
    },
    numberMeshes: {
      label: 'Số lượng lưới',
      value: '43',
    },
  },
];
const ListCardShortTerm = () => {
  return (
    <div className='flex flex-col gap-[16px]'>
      {DATA_CARD?.map((item) => {
        return (
          <Card
            key={item?.id}
            sx={{
              border: '1px solid #EEEEEE',
            }}
            className='p-4 rounded-xl shadow-none flex flex-col gap-4'
          >
            <div className='flex items-center justify-between'>
              <div className='flex flex-col gap-[4px]'>
                <Typography color={'#212121'} fontWeight={600} variant='body2'>
                  {item?.title}
                </Typography>
                <div className='w-max rounded-sm py-[1px] px-[2px] bg-[#F5F5F5]'>
                  <Typography
                    color={'#757575'}
                    fontWeight={400}
                    className='text-[8px] leading-[10px]'
                  >
                    3-7 ngày
                  </Typography>
                </div>
              </div>
              <Button>
                <Typography fontWeight={700} className='text-[12px] h-[32px]'>
                  Sao chép
                </Typography>
              </Button>
            </div>
            <div className='flex flex-col gap-1'>
              <ItemCard value={item?.priceRange?.value} label={item?.priceRange?.label} />
              <ItemCard value={item?.numberMeshes?.value} label={item?.numberMeshes?.label} />
              <ItemCard value={item?.profit?.value} label={item?.profit?.label} />
            </div>

            <Typography color={'#177DFF'} fontWeight={500} className='text-xs'>
              Tuỳ chỉnh thông số
            </Typography>
          </Card>
        );
      })}
    </div>
  );
};
export default ListCardShortTerm;

const ItemCard = ({ label, value }: { label: string; value: string }) => {
  return (
    <div className='flex justify-between items-center'>
      <Typography color={'#9E9E9E'} fontWeight={400} className='text-xs'>
        {label}
      </Typography>
      <Typography color={'#212121'} fontWeight={500} className='text-xs'>
        {value}
      </Typography>
    </div>
  );
};
