import * as React from 'react';
import Popover from '@mui/material/Popover';
import CustomCheckbox from 'src/components/ui/checkbox';
import { useTranslation } from 'react-i18next';
import SettingIcon from 'src/assets/icons/SettingIcon';

export default function PopoverMenuSetting() {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const { t } = useTranslation();

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <button aria-describedby={id} onClick={handleClick}>
        <SettingIcon />
      </button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <div className='flex flex-col gap-3 p-3'>
          <CustomCheckbox
            variantLabel='caption'
            label={'Ẩn tài sản <1 USD'}
            classNameLabel='font-normal'
            classNameWrapper='flex-row items-center text-[#212121] font-normal gap-[4px]'
          />
          <CustomCheckbox
            variantLabel='caption'
            label={'Ẩn PNL của coin'}
            classNameLabel='font-normal'
            classNameWrapper='flex-row items-center text-[#212121] font-normal gap-[4px]'
          />
        </div>
      </Popover>
    </div>
  );
}
