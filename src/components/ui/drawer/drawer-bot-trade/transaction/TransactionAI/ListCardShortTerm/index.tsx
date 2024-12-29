import { Card, Typography } from '@mui/material';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import Button from 'src/components/ui/button';
import BottomSheetInvestmentAmount from 'src/components/ui/drawer/drawer-detail-bot/bottom-sheet-investment-amount';

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
  const { t } = useTranslation();

  const refBottomSheetInvestmentAmount: any = useRef()
  return (
    <div className='flex flex-col gap-[16px]'>
      {DATA_CARD?.map((item) => {
        return (
          <Card
            key={item?.id}
            onClick={() => refBottomSheetInvestmentAmount.current.onOpen()}
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
                    {t('bot.threeArrive7days')}

                  </Typography>
                </div>
              </div>
              <Button className=' h-[32px]'>
                <Typography fontWeight={700} className='text-[12px]'>
                  {t('bot.card.copy')}
                </Typography>
              </Button>
            </div>
            <div className='flex flex-col gap-1'>
              <ItemCard value={item?.priceRange?.value} label={item?.priceRange?.label} />
              <ItemCard value={item?.numberMeshes?.value} label={item?.numberMeshes?.label} />
              <ItemCard value={item?.profit?.value} label={item?.profit?.label} />
            </div>

            <Typography color={'#177DFF'} fontWeight={500} className='text-xs'>
              {t('bot.custom_parameters')}
            </Typography>
          </Card>
        );
      })}
      <BottomSheetInvestmentAmount ref={refBottomSheetInvestmentAmount} />

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
