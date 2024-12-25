import { Box, FormControl, FormControlLabel, Radio, RadioGroup, SelectChangeEvent, Typography } from '@mui/material';
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

const keyBooleanValues = ['hasOfficalWebsite', 'hasCmcLink', 'hasXLink', 'hasTeleCommunity', 'hasBlockchainType']

const Detail = () => {
  const [formValues, setFormValues] = useState({
    project: "",
    token: "",
    hasOfficalWebsite: true,
    officalWebsite: "",
    hasCmcLink: true,
    cmcLink: "",
    hasXLink: true,
    xLink: "",
    hasTeleCommunity: true,
    teleCommunity: "",
    hasBlockchainType: true,
    blockchainType: "",
    contractAddress: "",
    discord: "",
    marketMakerPlan: "",
    tgeTime: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target; // Get the field name and value
    console.log('nameeee', name, value, typeof value);
    const isBoleanValue = keyBooleanValues.includes(name);
    setFormValues({
      ...formValues, // Preserve other fields
      [name]: isBoleanValue ? value === 'true' : value, // Update the changed field
    });
  };

  return (
    <Box sx={sx.wrap}>
      <Box sx={sx.content}>
        <Typography sx={sx.title}>{t('listing.detail.title')}</Typography>
        
        <Box sx={sx.form}>
          <FormControl sx={sx.formItem}>
            <Typography sx={sx.label}>{t('listing.detail.projectName')}</Typography>
            <Box sx={sx.boxSelect}>
              <CustomInput
                name='project'
                value={formValues.project}
                onChange={handleChange}
                placeholder={t('listing.detail.projectNamePlaceHolder')}
              />
            </Box>
          </FormControl>
          <FormControl sx={sx.formItem}>
            <Typography sx={sx.label}>{t('listing.detail.tokenCoinSymbol')}</Typography>
            <Box sx={sx.boxSelect}>
              <CustomInput
                name='token'
                value={formValues.token}
                onChange={handleChange}
                placeholder={t('listing.detail.tokenCoinSymbolPlaceHolder')}
              />
            </Box>
          </FormControl>
          <FormControl sx={sx.formItem}>
            <Typography sx={sx.label}>{t('listing.detail.officalWebsiteQuestion')}</Typography>
            <Box>
              <RadioGroup
                name="hasOfficalWebsite"
                value={formValues.hasOfficalWebsite}
                onChange={handleChange}
                sx={sx.groupRadio}
              >
                <FormControlLabel value={true} control={<Radio sx={sx.radio}/>} label="Yes" />
                <FormControlLabel value={false} control={<Radio sx={sx.radio}/>} label="No" />
              </RadioGroup>
            </Box>
            {formValues.hasOfficalWebsite && <Box sx={sx.boxSelect}>
              <CustomInput
                value={formValues.officalWebsite}
                onChange={handleChange}
                name="officalWebsite"
                placeholder={t('listing.detail.officalWebsiteQuestionPlaceHolder')}
              />
            </Box>}
          </FormControl>
          <FormControl sx={sx.formItem}>
            <Typography sx={sx.label}>{t('listing.detail.cmcLinkQuestion')}</Typography>
            <Box>
              <RadioGroup
                name="hasCmcLink"
                value={formValues.hasCmcLink}
                onChange={handleChange}
                 sx={sx.groupRadio}
              >
                <FormControlLabel value={true} control={<Radio sx={sx.radio}/>} label="Yes" />
                <FormControlLabel value={false} control={<Radio sx={sx.radio}/>} label="No" />
              </RadioGroup>
            </Box>
            {formValues.hasCmcLink && <Box sx={sx.boxSelect}>
              <CustomInput
                value={formValues.cmcLink}
                onChange={handleChange}
                name="cmcLink"
                placeholder={t('listing.detail.cmcLinkQuestionPlaceHolder')}
              />
            </Box>}
          </FormControl>
          <FormControl sx={sx.formItem}>
            <Typography sx={sx.label}>{t('listing.detail.xLinkQuestion')}</Typography>
            <Box>
              <RadioGroup
                name="hasXLink"
                value={formValues.hasXLink}
                onChange={handleChange}
                 sx={sx.groupRadio}
              >
                <FormControlLabel value={true} control={<Radio sx={sx.radio}/>} label="Yes" />
                <FormControlLabel value={false} control={<Radio sx={sx.radio}/>} label="No" />
              </RadioGroup>
            </Box>
            {formValues.hasXLink && <Box sx={sx.boxSelect}>
              <CustomInput
                value={formValues.xLink}
                onChange={handleChange}
                name="xLink"
                placeholder={t('listing.detail.xLinkQuestionPlaceHolder')}
              />
            </Box>}
          </FormControl>
          <FormControl sx={sx.formItem}>
            <Typography sx={sx.label}>{t('listing.detail.teleCommunityQuestion')}</Typography>
            <Box>
              <RadioGroup
                name="hasTeleCommunity"
                value={formValues.hasTeleCommunity}
                onChange={handleChange}
                 sx={sx.groupRadio}
              >
                <FormControlLabel value={true} control={<Radio sx={sx.radio}/>} label="Yes" />
                <FormControlLabel value={false} control={<Radio sx={sx.radio}/>} label="No" />
              </RadioGroup>
            </Box>
            {formValues.hasTeleCommunity && <Box sx={sx.boxSelect}>
              <CustomInput
                value={formValues.teleCommunity}
                onChange={handleChange}
                name="teleCommunity"
                placeholder={t('listing.detail.teleCommunityPlaceHolder')}
              />
            </Box>}
          </FormControl>
          <FormControl sx={sx.formItem}>
            <Typography sx={sx.label}>{t('listing.detail.blockChainType')}</Typography>
            <Box>
              <RadioGroup
                name="hasBlockchainType"
                value={formValues.hasBlockchainType}
                onChange={handleChange}
                sx={sx.groupRadio}
              >
                <FormControlLabel value={true} control={<Radio sx={sx.radio}/>} label="Yes" />
                <FormControlLabel value={false} control={<Radio sx={sx.radio}/>} label="No" />
              </RadioGroup>
            </Box>
            {formValues.hasBlockchainType && <Box sx={sx.boxSelect}>
              <CustomSelect
                name='blockchainType'
                onChange={handleChange}
                value={formValues.blockchainType}
                data={BLOCKCHAIN_TYPES}
                placeholder={t('listing.detail.blockChainTypePlaceHolder')}
              />
            </Box>}
          </FormControl>
          <FormControl sx={sx.formItem}>
            <Typography sx={sx.label}>{t('listing.detail.contractAdress')}</Typography>
            <Box sx={sx.boxSelect}>
              <CustomInput
                name='contractAddress'
                value={formValues.contractAddress}
                onChange={handleChange}
                placeholder={t('listing.detail.contractAdressPlaceHolder')}
              />
            </Box>
          </FormControl>
          <FormControl sx={sx.formItem}>
            <Typography sx={sx.label}>{t('listing.detail.discord')}</Typography>
            <Box sx={sx.boxSelect}>
              <CustomInput
                name='discord'
                value={formValues.discord}
                onChange={handleChange}
                placeholder={t('listing.detail.discordPlaceHolder')}
              />
            </Box>
          </FormControl>
          <FormControl sx={sx.formItem}>
            <Typography sx={sx.label}>{t('listing.detail.marketMakerPlan')}</Typography>
            <Box sx={sx.boxSelect}>
              <CustomInput
                name='marketMakerPlan'
                value={formValues.marketMakerPlan}
                onChange={handleChange}
                placeholder={t('listing.detail.marketMakerPlanPlaceHolder')}
              />
            </Box>
          </FormControl>
          <FormControl sx={sx.formItem}>
            <Typography sx={sx.label}>{t('listing.detail.tgeTime')}</Typography>
            <Box sx={sx.boxSelect}>
              <CustomInput
                name='tgeTime'
                value={formValues.tgeTime}
                onChange={handleChange}
                placeholder={t('listing.detail.tgeTimePlaceHolder')}
              />
            </Box>
          </FormControl>
        </Box>
      </Box>
    </Box>
  );
};

export default Detail;
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
  },
  radio: {
    color: '#E0E0E0',
  }
};
