import { Input, Stack, TextField, Typography } from '@mui/material';
import React from 'react';

type Props = {
  subfixBlack?: string;
  subfixBlue?: string;
  value: string;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement> | undefined;
};
const CustomInput = (props: Props) => {
  return (
    <Stack className="flex-row w-full bg-[#F5F5F5] gap-1 items-center rounded-lg">
      <TextField
        fullWidth
        onChange={props.onChange}
        value={props.value}
        variant="outlined"
        sx={{
          color: 'text.secondary',
          backgroundColor: '#F5F5F5',
          borderRadius: '8px',
          '& .MuiOutlinedInput-notchedOutline': {
            border: 'none',
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            border: 'none',
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            border: 'none',
          },
        }}
      />
      {props.subfixBlack && (
        <Typography
          variant="body1"
          className="font-semibold text-[14px]"
        >
          {props.subfixBlack}
        </Typography>
      )}
      {props.subfixBlue && (
        <Typography
          variant="body1"
          className="font-semibold text-[#177DFF] w-[100px] text-[14px]"
        >
          {props.subfixBlue}
        </Typography>
      )}
    </Stack>
  );
};

export default CustomInput;
