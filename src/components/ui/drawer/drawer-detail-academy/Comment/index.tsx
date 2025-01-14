import { Typography } from '@mui/material';
import IconBookmark from 'src/assets/icons/IconBookmark';
import IconChat from 'src/assets/icons/IconChat';
import IconLike from 'src/assets/icons/IconLike';
import { t } from 'i18next';
import { useState } from 'react';
import clsx from 'clsx';
import ListMessage from './ListMessage';

const messages = [
  'In mauris porttitor tincidunt mauris massa sit lorem sed scelerisque. Fringilla pharetra vel massa enim sollicitudin cras. At pulvinar eget sociis adipiscing eget donec ultricies nibh tristique. ',
  'In mauris porttitor tincidunt mauris massa sit lorem sed scelerisque',
  'In mauris porttitor tincidunt mauris massa sit lorem sed scelerisque. Fringilla pharetra vel massa enim sollicitudin cras. At pulvinar eget sociis adipiscing eget donec ultricies nibh tristique. ',
];

const Comment = () => {
  const DATA_ACTION = [t('lanchpad.most_featured'), t('lanchpad.latest')];

  const [valueAction, setValueAction] = useState(t('lanchpad.most_featured'));

  return (
    <div className='flex flex-col gap-4'>
      <div className='flex justify-between items-center'>
        <div className='flex items-center gap-0.5'>
          <IconLike />
          <Typography className='text-[12px] leading-5 text-[#BDBDBD] font-normal'>100K</Typography>
        </div>
        <div className='flex items-center gap-0.5'>
          <IconChat />
          <Typography className='text-[12px] leading-5 text-[#BDBDBD] font-normal'>
            100.000
          </Typography>
        </div>
        <div className='flex items-center gap-0.5'>
          <IconBookmark />
          <Typography className='text-[12px] leading-5 text-[#BDBDBD] font-normal'>32</Typography>
        </div>
      </div>
      <div className='flex items-center gap-3'>
        {DATA_ACTION?.map((item) => {
          return (
            <div
              onClick={() => setValueAction(item)}
              key={item}
              className={clsx('py-[10px] transition-all px-3 bg-[#F5F5F5] rounded-md', {
                '!bg-[#177DFF]': item === valueAction,
              })}
            >
              <Typography
                className={clsx('text-[14px] leading-5 text-[#212121] font-normal', {
                  'font-semibold text-white': item === valueAction,
                })}
              >
                {item}
              </Typography>
            </div>
          );
        })}
      </div>
      <div className='flex flex-col gap-4'>
        {messages.map((item, index) => (
          <ListMessage item={item} index={index} key={index} />
        ))}
      </div>
    </div>
  );
};
export default Comment;
