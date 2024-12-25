import { Box, Step, StepLabel, Stepper, Typography } from '@mui/material';
import React, { useState } from 'react';
import Button from 'src/components/ui/button';
import { t } from 'i18next';
import BasicInformation from './steps/BasicInfomation';
import { useRouter } from 'next/navigation';
import Detail from './steps/Detail';
import ProjectEcosystem from './steps/ProjectEcosystem';
import SubmitsionResult from './steps/SubmitsionResult';
import { fontWeight } from '@mui/system';
import Steps from './steps/Steps';

const STEPS = [
  { label: t('listing.steps.basicInformation'), number: 1 },
  { label: t('listing.steps.detail'), number: 2 },
  { label: t('listing.steps.projectEcosystem'), number: 3 },
  { label: t('listing.steps.submissionResult'), number: 4 },
];

const Content = () => {
  const [activeStep, setActiveStep] = useState(1);
  const router = useRouter()
  
  const renderStep = () => {
    switch (activeStep) {
      case 1:
        return <BasicInformation />
      case 2:
        return <Detail />
      case 3:
        return <ProjectEcosystem />
      case 4:
        return <SubmitsionResult />
      default:
        break;
    }
  }
  console.log('activeStep',activeStep);
  
  const nextStep = () => {
    if (activeStep == STEPS.length) {
      return router.push('/wallet')
    }
    setActiveStep(activeStep + 1)
  }

  const prevStep = () => {
    if (activeStep == STEPS.length) {
      return router.push('/wallet')
    }
    setActiveStep(activeStep - 1)
  }
  return (
    <Box sx={sx.wrap}>
      <Steps
        activeStep={activeStep}
        setActiveStep={setActiveStep}
        steps={STEPS}
      />
      {renderStep()}
      <Box sx={sx.action}>
        {activeStep > 0 && <Button onClick={prevStep} className='!bg-[#E8F2FF] !text-[#177DFF] !outline-0 !border-0 font-semibold' variant="outline" fullWidth>
          <Typography className="text-[14px]">{activeStep == STEPS.length ? t('listing.backToHome') : t('listing.back')}</Typography>
        </Button>}
        <Button
          fullWidth
          onClick={nextStep}
          className='font-semibold'>
          <Typography className="text-[14px]">{activeStep == STEPS.length ? t('listing.submiting') : t('listing.next')}</Typography>
        </Button>
      </Box>
    </Box>
  );
};

export default Content;
const sx = {
  wrap: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
  },
  content: {
    display: 'flex',
    paddingBottom: '24px',
    // alignItems: 'center',
    flexDirection: 'column',
    gap: '24px',
    flex: 1,
  },
  boxSelect: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    padding: '4px 16px',
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
  action: {
    display: 'flex',
    flexDirection: 'row',
    gap: '12px',
    paddingTop: '16px',
  },
};
