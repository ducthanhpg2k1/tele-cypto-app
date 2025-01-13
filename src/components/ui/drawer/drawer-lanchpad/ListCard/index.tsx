import { Typography } from '@mui/material';
import { t } from 'i18next';

const ListCard = () => {
  const DATA_LIST_CARD = [
    {
      id: 1,
      value: '$ 1B+',
      label: t('lanchpad.show_locked'),
    },
    {
      id: 2,
      value: '$ 200M+',
      label: t('lanchpad.amount_raised'),
    },
    {
      id: 3,
      value: '100',
      label: t('lanchpad.project_has_implemented'),
    },
  ];
  return (
    <div className='grid grid-cols-3 gap-3'>
      {DATA_LIST_CARD?.map((item) => {
        return (
          <div key={item?.id} className='bg-[#E8F2FF] rounded-md p-1 flex flex-col gap-[2px]'>
            <Typography className='font-semibold text-[12px] text-[#177DFF] leading-4'>
              {item?.value}
            </Typography>
            <Typography className='font-normal text-[10px] leading-3 text-[#616161]'>
              {item?.label}
            </Typography>
          </div>
        );
      })}
    </div>
  );
};
export default ListCard;
