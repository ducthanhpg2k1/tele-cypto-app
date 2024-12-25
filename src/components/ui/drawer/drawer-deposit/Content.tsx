import { Box, Typography, Stack, TextField, InputAdornment } from '@mui/material';
import { t } from 'i18next';
import Image from 'next/image';
import React from 'react';
import Card from './Card';
import { tableDeposit } from 'src/constants';
import Item from './item';
import Button from 'src/components/ui/button';
import { toast } from 'src/components/ui/toast-sooner/toast';

const Content = () => {
  return (
    <>
      <Image
        src="/images/qr.png"
        alt=""
        width={160}
        height={160}
        className="self-center"
      />
      <Card />
      <Stack className="gap-3 w-full">
        {tableDeposit.map((e, index) => {
          return (
            <Item
              key={index}
              label={e.label}
              value={e.value}
            />
          );
        })}
        <Stack className="gap-0.5 items-start">
          <Stack className="flex-row gap-0.5">
            <Typography
              variant="caption"
              color={'#9E9E9E'}
              className="font-normal leading-normal text-[10px]"
            >
              *{t('deposit.warn1')}
            </Typography>
            <Typography
              variant="caption"
              color={'#177DFF'}
              className="font-normal leading-normal text-[10px]"
            >
              {t('deposit.more1')}
            </Typography>
          </Stack>
          <Typography
            variant="caption"
            color={'#9E9E9E'}
            className="font-normal leading-normal text-[10px]"
          >
            *{t('deposit.warn2')}
          </Typography>
        </Stack>
      </Stack>
      <Stack
        className="flex-row gap-0.5 hover:cursor-pointer self-center"
        onClick={() => toast.error('No details!')}
      >
        <Typography
          variant="body2"
          className="font-medium text-[12px]"
          color={'#9E9E9E'}
        >
          {t('deposit.more2')}
        </Typography>
        <Image
          src="/assets/iconly/icon-arrow-up-grey.svg"
          alt=""
          width={16}
          height={16}
        />
      </Stack>
      <Box
        position={'sticky'}
        bottom={'0px'}
        height={32}
        bgcolor={'#FFF'}
        paddingBottom={'20px'}
      >
        <Button
          fullWidth
          className="sticky bottom-0.5"
        >
          <Typography className="text-[14px]">{t('deposit.button')}</Typography>
        </Button>
      </Box>
    </>
  );
};

export default Content;
