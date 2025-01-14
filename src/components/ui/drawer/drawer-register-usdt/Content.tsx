import React from 'react';
import CardFlexible from './CardFlexible';
import {  Button, IconButton, TextField, Typography } from '@mui/material';
import { t } from 'i18next';
import { Box } from '@mui/system';
import { styled } from '@mui/material/styles';
import CustomInput from '../drawer-transfer/CustomInput';
import Image from 'next/image';
import TabContent from './TabContent';
import CustomCheckbox from '../../checkbox';

const StyledButton = styled(Box)(({ theme }) => ({
  position: 'absolute',
  right: theme.spacing(1.5),
  display: 'flex',
  alignItems: 'center',
}));

const Content = () => {
  return (
    <div className='flex flex-col gap-3 h-full'>
      <div className='flex flex-col gap-4'>
        <CardFlexible />
        <Typography className='font-medium text-[#9E9E9E] text-[12px] leading-5 pr-2'>
          {t('earn.text_note')}
        </Typography>
        <div className='flex flex-col gap-0.5'>
          <Typography className='font-medium text-[#9E9E9E] text-[12px] leading-5'>
            {t('earn.quantity')}
          </Typography>
          <Box position='relative' display='flex' alignItems='center'>
            <CustomInput type='number' placeholder='0' />

            <StyledButton>
              <Box display='flex' alignItems='center' gap={1}>
                {/* USDT Text */}
                <Typography fontWeight='600' fontSize='14px' lineHeight='21px' color='text.primary'>
                  USDT
                </Typography>

                {/* MAX Button */}
                <Button
                  sx={{
                    fontWeight: '600',
                    fontSize: '14px',
                    lineHeight: '21px',
                    textTransform: 'uppercase',
                    color: '#007bff',
                    padding: 0,
                    minWidth: 'unset',
                    '&:hover': {
                      background: 'transparent',
                    },
                  }}
                >
                  max
                </Button>
              </Box>
            </StyledButton>
          </Box>
          <div className='flex flex-col gap-0.5'>
            <div className='flex items-center gap-0.5'>
              <Typography className='font-normal text-[#9E9E9E] text-[10px] leading-3'>
                {t('earn.available')}
              </Typography>
              <Typography className='font-normal text-[#212121] text-[10px] leading-3'>
                0 USDT
              </Typography>
              <IconButton size='small'>
                <Image alt='' width={20} height={20} src={'assets/iconly/ic-add-blue.svg'} />
              </IconButton>
            </div>
            <div className='flex items-center gap-0.5'>
              <Typography className='font-normal text-[#9E9E9E] text-[10px] leading-3'>
                {`${t('earn.personal_limit')}:`}
              </Typography>
              <Typography className='font-normal text-[#212121] text-[10px] leading-3'>
                5000 USDT
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <TabContent />
      <div className='bg-white sticky z-50 pt-3 left-0 right-0 bottom-[-8px] flex flex-col gap-4'>
        <CustomCheckbox
          label={t('earn.note_confirm')}
          variantLabel='body2'
          classNameWrapper='flex-row items-center gap-[8px]'
          classNameLabel='font-normal'
        />
        <Button fullWidth className='h-12 bg-[#177DFF] font-semibold'>
          <Typography className='text-[14px]' fontWeight={600} color={'#ffffff'}>{t('earn.confirm_transfer')}</Typography>
        </Button>
      </div>
      
    </div>
  );
};

export default Content;
