import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { TabItem } from 'src/components/ui/tabs/types';
import ScrollableTabsButtonPrevent from 'src/components/ui/ScrollableTabsButtonPrevent';
import Image from 'next/image';
import ChartIcon from 'src/assets/icons/ChartIcon';
import { t } from 'i18next';
import { Tabs } from 'src/components/ui/tabs';

// Styled Components
const SectionContainer = styled(Box)(({ theme }) => ({
  height: '100%',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
}));

const ItemContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: theme.spacing(0, 0, 2),
  height: 77,
  borderBottom: `1px solid ${theme.palette.divider}`,
  '&:last-child': {
    borderBottom: 'none',
  },
}));

const Title = styled(Typography)({
  fontSize: '14px',
  fontWeight: 500,
  lineHeight: '21px',
  color: '#212121',
});

const DetailText = styled(Typography)({
  fontSize: '12px',
  fontWeight: 400,
  lineHeight: '20px',
  color: '#424242',
});

const ValueText = styled(Typography)({
  fontSize: '12px',
  fontWeight: 400,
  lineHeight: '20px',
  color: '#9E9E9E',
});

// Types
// Mock Data
const sectionItems = [
  {
    img: '/assets/iconly/icon-usdt.svg',
    name: 'USDT',
    profit: '9,4%',
  },
  {
    img: '/assets/iconly/icon-usdc.svg',
    name: 'USDC',
    profit: '9,4%',
  },
  {
    img: '/assets/iconly/icon-bit.svg',
    name: 'BTC',
    profit: '9,4%',
  },
  {
    img: '/assets/iconly/icon-eth.svg',
    name: 'ETH',
    profit: '9,4%',
  },
  {
    img: '/assets/iconly/icon-bnb.svg',
    name: 'BNB',
    profit: '9,4%',
  },
  {
    img: '/assets/iconly/icon-bnb.svg',
    name: 'BNB',
    profit: '9,4%',
  },
  {
    img: '/assets/iconly/icon-bnb.svg',
    name: 'BNB',
    profit: '9,4%',
  },
  {
    img: '/assets/iconly/icon-bnb.svg',
    name: 'BNB',
    profit: '9,4%',
  },
  {
    img: '/assets/iconly/icon-bnb.svg',
    name: 'BNB',
    profit: '9,4%',
  },
  {
    img: '/assets/iconly/icon-bnb.svg',
    name: 'BNB',
    profit: '9,4%',
  },
  {
    img: '/assets/iconly/icon-bnb.svg',
    name: 'BNB',
    profit: '9,4%',
  },
  {
    img: '/assets/iconly/icon-bnb.svg',
    name: 'BNB',
    profit: '9,4%',
  },
  {
    img: '/assets/iconly/icon-bnb.svg',
    name: 'BNB',
    profit: '9,4%',
  },
  {
    img: '/assets/iconly/icon-bnb.svg',
    name: 'BNB',
    profit: '9,4%',
  },
  {
    img: '/assets/iconly/icon-bnb.svg',
    name: 'BNB',
    profit: '9,4%',
  },
  {
    img: '/assets/iconly/icon-bnb.svg',
    name: 'BNB',
    profit: '9,4%',
  },
  {
    img: '/assets/iconly/icon-bnb.svg',
    name: 'BNB',
    profit: '9,4%',
  },
];

const tabs: TabItem[] = [
  { key: 'flexible', label: t('earn.flexible') },
  { key: 'permanent', label: t('earn.pernament') },
  { key: 'popular', label: t('earn.popular') },
];
const tabsWrapper: TabItem[] = [
  { key: 'lowrisk', label: t('earn.risk') },
  { key: 'highyield', label: t('earn.profit') },
];

// Reusable Component for Section Rows
const SectionItemRow = ({
  onClick,
  img,
  name,
  profit,
}: {
  onClick: VoidFunction;
  img: string;
  name: string;
  profit: string;
}) => {
  return (
    <div onClick={onClick}>
      <Stack className='flex-row h-[54px] p-4 justify-between rounded-lg border-[1px] border-solid border-[#EEE]'>
        <Stack className='flex-row gap-1 items-center'>
          <Image src={img} alt='' width={20} height={20} />
          <Typography variant='body2' className='font-medium'>
            {name}
          </Typography>
        </Stack>
        <Stack className='flex-row gap-1 items-center'>
          <Typography variant='caption' className='font-normal text-[#9E9E9E]'>
            {t('earn.max')}
          </Typography>
          <Typography variant='subtitle2' className='text-[#4AAF57]'>
            {profit}
          </Typography>
          <Image src='/assets/iconly/icon-chart.svg' alt='' width={18} height={18} />
        </Stack>
      </Stack>
    </div>
  );
};

// Main Component
const ListCoin = ({ onClickRow }: { onClickRow: VoidFunction }) => {
  const tabItems = tabs.map((tab) => ({
    key: tab.key,
    label: t(tab.label),
    content: (
      <Box
        sx={{
          overflowY: 'auto',
          flex: 1,
          display: 'flex',
          gap: '12px',
          flexDirection: 'column',
          marginTop: '16px',
        }}
      >
        <Stack className='flex-row items-center px-4 py-3 justify-between rounded-lg border-[1px] border-solid border-[#EEE]'>
          <Stack className='flex-row gap-0.5 items-center'>
            <Image src='/assets/iconly/icon-circle.svg' alt='' width={20} height={20} />
            <Typography variant='caption' className='font-normal text-[#9E9E9E] text-[10px]'>
              {t('earn.rewards')}
            </Typography>
            <Image src='/assets/iconly/icon-warning.svg' alt='' width={18} height={18} />
          </Stack>
          <Typography variant='caption' className='font-semibold text-[#4AAF57]'>
            54,5$
          </Typography>
        </Stack>
        {sectionItems.map((item, index) => (
          <SectionItemRow onClick={onClickRow} key={`${item.name}-${index}`} {...item} />
        ))}
      </Box>
    ),
  }));
  const tabList = tabsWrapper.map((tab) => ({
    key: tab.key,
    label: t(tab.label),
    content: <Tabs isNoScroll tabs={tabItems} defaultTab={0} />,
  }));

  return (
    <div>
      <Tabs isNoScroll hideIndicator tabs={tabList} defaultTab={0} size='large' />
    </div>
  );
};

export default ListCoin;
