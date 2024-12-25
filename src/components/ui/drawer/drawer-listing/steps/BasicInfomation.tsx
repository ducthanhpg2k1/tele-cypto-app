import { Box, FormControl, FormControlLabel, Radio, RadioGroup, SelectChangeEvent, Typography } from '@mui/material';
import React, { useState } from 'react';
import { t } from 'i18next';
import CustomSelect from '../CustomSelect';
import CustomInput from '../CustomInput';

const CHANNELS_REFER = [
  {
    label: 'Crypto News',
    value: 'crypto_news',
  },
  {
    label: 'Merlin Trade',
    value: 'merlin_trade',
  },
];

const BasicInformation = () => {
  const [formValues, setFormValues] = useState({
    channelRefer: "",
    whoRefer: "",
    email: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target; // Get the field name and value
    console.log('nameee', value, value);
    
    setFormValues({
      ...formValues, // Preserve other fields
      [name]: value, // Update the changed field
    });
  };

  // const handleChannelRefer = (event: SelectChangeEvent) => {
  //   setChannelRefer(event.target.value);
  // };
  // const handleChangeWhoRefer = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setWhoRefer(event.target.value);
  // };
  // const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setEmail(event.target.value);
  // };
  return (
    <Box sx={sx.wrap}>
      <Box sx={sx.content}>
        <Typography sx={sx.title}>{t('listing.basicInformation.title')}</Typography>
        
        <Box sx={sx.form}>
          <FormControl sx={sx.formItem}>
            <Typography sx={sx.label}>{t('listing.basicInformation.basicInfoFirstQuestion')}</Typography>
            <Box sx={sx.boxSelect}>
              <CustomSelect
                onChange={handleChange}
                value={formValues.channelRefer}
                data={CHANNELS_REFER}
                name='channelRefer'
                placeholder={t('listing.basicInformation.basicInfoFirstQuestionPlaceHolder')}
              />
            </Box>
          </FormControl>
          <FormControl sx={sx.formItem}>
            <Typography sx={sx.label}>{t('listing.basicInformation.basicInfoSecondQuestion')}</Typography>
            <Box sx={sx.boxSelect}>
              <CustomInput
                value={formValues.whoRefer}
                onChange={handleChange}
                placeholder={t('listing.basicInformation.basicInfoSecondQuestionPlaceHolder')}
                name='whoRefer'
              />
            </Box>
          </FormControl>
          <FormControl sx={sx.formItem}>
            <Typography sx={sx.label}>{t('listing.basicInformation.basicInfoThirdQuestion')}</Typography>
            <Box sx={sx.boxSelect}>
              <CustomInput
                name='email'
                value={formValues.email}
                onChange={handleChange}
                placeholder={t('listing.basicInformation.basicInfoThirdQuestionPlaceHolder')}
              />
            </Box>
          </FormControl>
        </Box>
      </Box>
    </Box>
  );
};

export default BasicInformation;
const sx = {
  wrap: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
    overflow: 'auto',
  },
  content: {
    display: 'flex',
    paddingBottom: '24px',
    // alignItems: 'center',
    flexDirection: 'column',
    gap: '12px',
    flex: 1,
  },
  boxSelect: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    padding: '12px 16px',
    height: '48px',
    borderRadius: '8px',
    width: '100%',
  },
  boxInput: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    padding: '4px 0px',
    height: '51px',
    borderRadius: '8px',
  },
  title: {
    fontWeight: 600,
    fontSize: 16,
    lineHeight: 1.5
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    alignItems: 'flex-start',
  },
  formItem: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    alignItems: 'flex-start',
    // alignItems: 'flex-start',
  },
  label: {
    fontSize: 12,
    fontWeight: 400,
    lineHeight: 1.5,
    color: '#757575'
  },
  groupRadio: {
    display: 'flex',
    flexDirection: 'row',
  }
};
