import { Typography, Stack } from '@mui/material';
import { t } from 'i18next';
import React from 'react';
import CopyInviteIcon from 'src/assets/icons/CopyInvite';
import Button from 'src/components/ui/button';
import { toast } from 'src/components/ui/toast-sooner/toast';
const CardInvite = () => {
  const handleCopy = () => {
    try {
      navigator.clipboard.writeText('https://www...EIYEs');
      toast.success('Copied to clipboard!');
    } catch (error) {
      toast.success('Copied!');
    }
  };
  return (
    <Stack className="w-full flex p-3 flex-col gap-4 items-start border-[1px] border-solid rounded-lg border-gray-200">
      <Stack className="flex flex-row justify-between items-center self-stretch">
        <Stack className="flex flex-col items-start gap-0.5 justify-center">
          <Typography
            variant="caption"
            color="#757575"
            className="font-normal"
          >
            {t('invite.sub')}
          </Typography>
          <Typography
            variant="body2"
            className="font-medium leading-[21px]"
          >
            https://www...EIYEs
          </Typography>
        </Stack>
        <Stack
          className="rounded-full w-10 p-2.5 bg-[#E8F2FF]"
          onClick={handleCopy}
        >
          <CopyInviteIcon />
        </Stack>
      </Stack>
      <Button
        fullWidth
        onClick={handleCopy}
      >
        <Typography className="text-[14px]">{t('invite.button')}</Typography>
      </Button>
    </Stack>
  );
};

export default CardInvite;
