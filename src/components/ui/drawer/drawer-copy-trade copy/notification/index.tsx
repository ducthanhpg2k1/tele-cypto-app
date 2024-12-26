import { useTranslation } from 'react-i18next';
import VolumnIcon from 'src/assets/icons/VolumeIcon';
import { Box, Typography } from '@mui/material';


const NotificationCopyTrade = () => {
  const { t } = useTranslation();

  return (
    <Box sx={sx.wrap}>
      <VolumnIcon />
      <Box sx={sx.textBox}>
        <Typography sx={sx.text}>{t('copyTrade.notification')}</Typography>
      </Box>
    </Box>
  );
};

const sx = {
  wrap: {
    display: 'flex',
    flexDirection: 'row',
    gap: '6px',
    // overflow: 'hidden',
    height: 'max-content',
    margin: '12px 0 24px 0'
    // whiteSpace: 'nowrap',
    // overflow: 'hidden',
    // boxSizing: 'border-box',
  },
  text: {
    fontSize: '12px',
    fontWeight: 400,
    lineHeight: '20px',
    textAlign: 'center',
    color: '#424242',
    animation: 'move 25s linear infinite',
    '@keyframes move': {
      '0%': {
        transform: 'translate(0, 0)',
      },
      '100%': {
        transform: 'translate(-100%, 0)',
      },
    },
  },

  textBox: {
    width: '100%',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    boxSizing: 'border-box',
  },
  
}

export default NotificationCopyTrade;
