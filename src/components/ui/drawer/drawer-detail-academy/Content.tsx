import React from 'react';
import HeaderDetail from './HeaderDetail';
import { Typography } from '@mui/material';
import { t } from 'i18next';
import Comment from './Comment';
import CustomInput from '../drawer-transfer/CustomInput';
import { IconLikeDefault } from './Comment/ListMessage';
import IconChat from 'src/assets/icons/IconChat';
import HeaderIconShare from 'src/assets/icons/HeaderIconShare';

const Content = () => {
  return (
    <div className='flex flex-col gap-6 h-full'>
      <HeaderDetail />
      <div className='flex flex-col gap-4'>
        <div className='flex flex-col gap-3'>
          <Typography className='text-[20px] leading-8 text-[#212121] font-semibold'>
            Magic Eden (ME) là gì?
          </Typography>
          <Typography className='text-[14px] leading-5 text-[#212121] font-normal italic'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type specimen book.
          </Typography>
          <Typography className='text-[20px] leading-8 text-[#212121] font-semibold'>
            {t('lanchpad.key_points')}
          </Typography>
          <div className='flex flex-col gap-3 border-b border-b-[#EEEEEE] pb-4'>
            {[...Array(3)].map((_, index) => (
              <div className='flex items-start gap-0.5'>
                <Typography className='text-[40px] leading-5 text-[#212121] font-normal'>
                  ·
                </Typography>
                <Typography className='text-[14px] leading-5 text-[#212121] font-normal'>
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when
                  an unknown printer took a galley of type and scrambled it to make a type specimen
                  book.
                </Typography>
              </div>
            ))}
          </div>
        </div>
        <Comment />
      </div>

      <div className='bg-white sticky z-50 pt-3 left-0 right-0 bottom-[-8px] flex items-center justify-between gap-4'>
        <CustomInput isInputSmall placeholder={t('lanchpad.share_your_ideas')}/>
        <div className='flex items-center gap-3'>
          <IconLikeDefault/>
          <IconChat/>
          <HeaderIconShare/>
        </div>
      </div>
    </div>
  );
};

export default Content;
