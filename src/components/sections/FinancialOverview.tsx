import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import React from 'react';
import SettingIcon from 'src/assets/icons/SettingIcon';
import ScrollableTabsButtonPrevent from '../ui/ScrollableTabsButtonPrevent';
import { TabItem } from '../ui/tabs/types';
import { Tabs } from '../ui/tabs';
import Image from 'next/image';

// Styled Components
const SectionContainer = styled(Box)(({ theme }) => ({
  height: '100%',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
}));


const Title = styled(Typography)({
  fontSize: '14px',
  fontWeight: 500,
  lineHeight: '21px',
  color: '#212121',
});

const DetailText = styled(Typography)<{ color?: string }>(({ color }) => ({
  fontSize: '12px',
  fontWeight: 400,
  lineHeight: '20px',
  color: color || '#9E9E9E',
}));



// Types
interface SectionItem {
  value: string;
  averageCost?: string;
  percentageChange?: string;
  tetherUS?: string;
  id: number
}

// Mock Data
const sectionItems: SectionItem[] = [
  {
    id: 1,
    value: '1.219,00 USDT',
    tetherUS: '1,627 USDT',
    averageCost: '5,33 USDT',
    percentageChange: '-2,342 USDT(-0,51%)',
  },
  {
    id: 2,
    value: '1.219,00 USDT',
    averageCost: '5,33 USDT',
    tetherUS: '1,627 USDT',
    percentageChange: '-2,342 USDT(-0,51%)',
  },

];

// Reusable Component for Section Rows
const SectionItemRow: React.FC<SectionItem> = ({
  value,
  averageCost,
  percentageChange,
  tetherUS,
}) => (
  <div className='py-2 border-1 border-solid border-b-[#F5F5F5]'>
    <div className='flex justify-between items-center'>
      <div className='flex gap-1'>
        <Image src={'/images/logo-usdt.png'} alt='logo-usdt' width={24} height={24} className='w-6 h-6' />
        <div className='flex flex-col gap-[2px]'>
          <Title>USDT</Title>
          <DetailText>TetherUS</DetailText>
          <DetailText>PNL của hôm nay</DetailText>
          <DetailText>Chi phí trung bình</DetailText>
        </div>
      </div>
      <div className='flex flex-col gap-[2px] text-end'>
        <Title>{value}</Title>
        <DetailText>{tetherUS}</DetailText>
        <DetailText color='#F54336'>{percentageChange}</DetailText>
        <DetailText color='#212121'>{averageCost}</DetailText>
      </div>
    </div>
  </div>


);

// Main Component
const FinancialOverview: React.FC = () => {
  const tabs: TabItem[] = [
    {
      key: 'crypto',
      label: 'Tiền mã hoá',
      content: (
        <Box sx={{ overflowY: 'auto', flex: 1, pt: 1 }}>
          {sectionItems.map((item) => (
            <SectionItemRow
              key={`${item.id}`}
              {...item}
            />
          ))}
        </Box>
      ),
    },
    {
      key: 'account',
      label: 'Tài khoản',
      content: (
        <Box sx={{ overflowY: 'auto', flex: 1, mt: 1 }}>
          {sectionItems.map((item) => (
            <SectionItemRow
              key={`${item.id}`}
              {...item}
            />
          ))}
        </Box>
      ),
    },
  ];
  return (
    <SectionContainer>
      {/* Tabs Section */}
      <Box
        sx={{
          marginBottom: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Tabs
          tabs={tabs}
          defaultTab={1}
        >
          <SettingIcon />
        </Tabs>
      </Box>

      {/* Content Section */}
    </SectionContainer>
  );
};

export default FinancialOverview;
