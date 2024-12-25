import { Box, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

type Props = {
  img: string;
  from: string;
  to: string;
  cross: string;
  showProtect?: boolean; //
  price: string;
  profit: string;
  kl: string;
};

const Item = (props: Props) => {
  return (
    <Stack className="flex-row items-center jusstify-betwwen w-full py-1">
      <Stack className="flex-row gap-2 items-center w-full">
        <Image
          src={props.img}
          alt=""
          width={24}
          height={24}
        />
        <Stack>
          <Stack className="flex-row gap-0.5 items-center">
            <Typography variant="subtitle1">{props.from}</Typography>
            <Typography
              variant="subtitle1"
              color="#9E9E9E"
            >
              {props.to}
            </Typography>
            <Box
              sx={{
                display: 'flex',
                padding: '1px 2px',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '2px',
                background: '#F5F5F5',
              }}
            >
              <Typography
                className="text-[8px] font-normal leading-[9.6px]"
                color="#757575"
              >
                {props.cross}
              </Typography>
            </Box>

            {props.showProtect && (
              <Box
                sx={{
                  display: 'flex',
                  padding: '1px 2px',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: '2px',
                  background: '#E8F2FF',
                }}
              >
                <Typography
                  className="text-[8px] font-normal leading-[9.6px]"
                  color="#177DFF"
                >
                  Price Protection
                </Typography>
              </Box>
            )}
          </Stack>
          <Typography variant="body2">KL {props.kl}</Typography>
        </Stack>
      </Stack>
      <Stack>
        <Typography
          variant="body1"
          className="font-semibold"
        >
          {props.price}
        </Typography>
        <Typography
          variant="body2"
          color="#4AAF57"
        >
          {props.profit}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default Item;
