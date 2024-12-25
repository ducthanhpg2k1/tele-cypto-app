import React from 'react';
import Checkbox, { CheckboxProps } from '@mui/material/Checkbox';
import { styled } from '@mui/material/styles';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { Variant } from '@mui/material/styles/createTypography';
import { Stack, Typography } from '@mui/material';

interface CustomCheckboxProps {
  checked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  color?: string;
  label: string;
  variantLabel?: Variant;
  classNameWrapper?: string;
  classNameLabel?: string;
}

type Props = CheckboxProps & CustomCheckboxProps;

const StyledCheckbox = styled(Checkbox)(({ theme }) => ({
  '&.Mui-checked': {
    color: theme.palette.primary.main,
  },
  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.04)',
  },
}));

const CustomCheckbox: React.FC<Props> = ({
  checked,
  onChange,
  color,
  label,
  variantLabel,
  classNameLabel,
  classNameWrapper,
  ...rest
}) => {
  return (
    <Stack className={classNameWrapper}>
      <StyledCheckbox
        icon={<CheckBoxOutlineBlankIcon />}
        checkedIcon={<CheckBoxIcon />}
        checked={checked}
        onChange={onChange}
        sx={{
          color: '#BDBDBD',
          padding: '0px',
          '&.Mui-checked': {
            color: color,
          },
        }}
        {...rest}
      />
      <Typography
        className={classNameLabel}
        variant={variantLabel}
        color={'#212121'}
      >
        {label}
      </Typography>
    </Stack>
  );
};

export default CustomCheckbox;
