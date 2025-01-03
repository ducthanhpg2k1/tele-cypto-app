import {
  Box,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  SelectChangeEvent,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import { t } from 'i18next';
import CustomSelect from '../CustomSelect';
import CustomInput from '../CustomInput';

const BLOCKCHAIN_TYPES = [
  {
    label: 'Decentralization',
    value: 'decentralization',
  },
  {
    label: 'Distributed Ledger',
    value: 'distributed_ledger',
  },
  {
    label: 'Immutability',
    value: 'immutability',
  },
  {
    label: 'Consensus Mechanisms',
    value: 'consensus_mechanisms',
  },
  {
    label: 'Smart Contracts',
    value: 'smart_contracts',
  },
];

const ProjectEcosystem = () => {
  const [formValues, setFormValues] = useState({
    introduction: '',
    investor: '',
    futureBusinessPlan: '',
    numberOfUsers: '',
    fdv: '',
    tradingVolume: '',
    exchanges: '',
    otherExchanges: '',
    specialListingArrangements: '',
    additionalInformation: '',
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target; // Get the field name and value
    console.log('nameeee', name, value, typeof value);
    setFormValues({
      ...formValues, // Preserve other fields
      [name]: value, // Update the changed field
    });
  };

  return (
    <Box sx={sx.wrap}>
      <Box sx={sx.content}>
        <Typography sx={sx.title}>{t('listing.projectEcosystem.title')}</Typography>

        <Box sx={sx.form}>
          <FormControl sx={sx.formItem}>
            <Typography sx={sx.label}>{t('listing.projectEcosystem.foundingTeam')}</Typography>
            <Box sx={sx.boxInputMutiple}>
              <CustomInput
                rows={4}
                name='introduction'
                value={formValues.introduction}
                onChange={handleChange}
                placeholder={t('listing.projectEcosystem.foundingTeamPlaceHolder')}
              />
            </Box>
          </FormControl>
          <FormControl sx={sx.formItem}>
            <Typography sx={sx.label}>
              {t('listing.projectEcosystem.investorInformation')}
            </Typography>
            <Box sx={sx.boxSelect}>
              <CustomInput
                name='investor'
                value={formValues.investor}
                onChange={handleChange}
                placeholder={t('listing.projectEcosystem.investorInformationPlaceHolder')}
              />
            </Box>
          </FormControl>
          <FormControl sx={sx.formItem}>
            <Typography sx={sx.label}>
              {t('listing.projectEcosystem.futureBusinessPlan')}
            </Typography>
            <Box sx={sx.boxSelect}>
              <CustomInput
                name='futureBusinessPlan'
                value={formValues.futureBusinessPlan}
                onChange={handleChange}
                placeholder={t('listing.projectEcosystem.futureBusinessPlanPlaceHolder')}
              />
            </Box>
          </FormControl>
          <FormControl sx={sx.formItem}>
            <Typography sx={sx.label}>{t('listing.projectEcosystem.numberOfUsers')}</Typography>
            <Box sx={sx.boxSelect}>
              <CustomInput
                name='numberOfUsers'
                value={formValues.numberOfUsers}
                onChange={handleChange}
                placeholder={t('listing.projectEcosystem.numberOfUsersPlaceHolder')}
              />
            </Box>
          </FormControl>
          <FormControl sx={sx.formItem}>
            <Typography sx={sx.label}>{t('listing.projectEcosystem.fdv')}</Typography>
            <Box sx={sx.boxSelect}>
              <CustomInput
                name='fdv'
                value={formValues.fdv}
                onChange={handleChange}
                placeholder={t('listing.projectEcosystem.fdvPlaceHolder')}
              />
            </Box>
          </FormControl>
          <FormControl sx={sx.formItem}>
            <Typography sx={sx.label}>{t('listing.projectEcosystem.tradingVolume')}</Typography>
            <Box sx={sx.boxSelect}>
              <CustomInput
                name='tradingVolume'
                value={formValues.tradingVolume}
                onChange={handleChange}
                placeholder={t('listing.projectEcosystem.tradingVolumePlaceHolder')}
              />
            </Box>
          </FormControl>
          <FormControl sx={sx.formItem}>
            <Typography sx={sx.label}>{t('listing.projectEcosystem.exchanges')}</Typography>
            <Box sx={sx.boxSelect}>
              <CustomInput
                name='exchanges'
                value={formValues.exchanges}
                onChange={handleChange}
                placeholder={t('listing.projectEcosystem.exchangesPlaceHolder')}
              />
            </Box>
          </FormControl>
          <FormControl sx={sx.formItem}>
            <Typography sx={sx.label}>{t('listing.projectEcosystem.otherExchanges')}</Typography>
            <Box sx={sx.boxSelect}>
              <CustomInput
                name='otherExchanges'
                value={formValues.otherExchanges}
                onChange={handleChange}
                placeholder={t('listing.projectEcosystem.otherExchangesPlaceHolder')}
              />
            </Box>
          </FormControl>
          <FormControl sx={sx.formItem}>
            <Typography sx={sx.label}>
              {t('listing.projectEcosystem.specialListingArrangements')}
            </Typography>
            <Box sx={sx.boxSelect}>
              <CustomInput
                name='specialListingArrangements'
                value={formValues.specialListingArrangements}
                onChange={handleChange}
                placeholder={t('listing.projectEcosystem.specialListingArrangementsPlaceHolder')}
              />
            </Box>
          </FormControl>
          <FormControl sx={sx.formItem}>
            <Typography sx={sx.label}>
              {t('listing.projectEcosystem.additionalInformation')}
            </Typography>
            <Box sx={sx.boxInputMutiple}>
              <CustomInput
                name='additionalInformation'
                value={formValues.additionalInformation}
                onChange={handleChange}
                placeholder={t('listing.projectEcosystem.additionalInformationPlaceHolder')}
              />
            </Box>
          </FormControl>
        </Box>
      </Box>
    </Box>
  );
};

export default ProjectEcosystem;
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
  boxInputMutiple: {
    display: 'flex',
    // alignItems: 'center',
    backgroundColor: '#F5F5F5',
    padding: '12px 16px',
    height: '100px',
    alignItems: 'flex-start',
    // paddingTop: '12px',
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
    lineHeight: 1.5,
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
    color: '#757575',
  },
  groupRadio: {
    display: 'flex',
    flexDirection: 'row',
  },
};
