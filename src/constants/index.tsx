import { Typography } from '@mui/material';
import { t } from 'i18next';
import CustomSelect from 'src/components/ui/select';

export const maxHomeCoinList = 3;
export const spotFee = 0.001;
export const mockDataInviteList = [
  { avatar: '/assets/iconly/ic-avatar.svg', name: '@chanok', profit: '+ 10 USDT' },
  { avatar: '/assets/iconly/ic-avatar.svg', name: '@chanok', profit: '+ 10 USDT' },
  { avatar: '/assets/iconly/ic-avatar.svg', name: '@chanok', profit: '+ 10 USDT' },
  { avatar: '/assets/iconly/ic-avatar.svg', name: '@chanok', profit: '+ 10 USDT' },
  { avatar: '/assets/iconly/ic-avatar.svg', name: '@chanok', profit: '+ 10 USDT' },
];
export const mockDataCardEarn = [
  {
    img: '/assets/iconly/icon-usdt.svg',
    name: 'USDT',
    profit: '3,2% ~ 12,72%',
  },
  {
    img: '/assets/iconly/icon-usdt.svg',
    name: 'USDT',
    profit: '3,2% ~ 12,72%',
  },
];
export const mockDataEarn = [
  {
    img: '/assets/iconly/icon-usdt.svg',
    name: 'USDT',
    profit: '9,4%',
  },
  {
    img: '/assets/iconly/icon-usdc.svg',
    name: 'USDT',
    profit: '9,4%',
  },
  {
    img: '/assets/iconly/icon-bit.svg',
    name: 'USDT',
    profit: '9,4%',
  },
  {
    img: '/assets/iconly/icon-eth.svg',
    name: 'USDT',
    profit: '9,4%',
  },
  {
    img: '/assets/iconly/icon-bnb.svg',
    name: 'USDT',
    profit: '9,4%',
  },
];
export const mockDataWaleet = [
  {
    label: 'Funding',
    value: 'Funding',
  },
  {
    label: 'Spot',
    value: 'Spot',
  },
  {
    label: 'Future',
    value: 'Future',
  },
];
export const mockDataCoin = [
  {
    label: 'USDT',
    value: 'USDT',
  },
  {
    label: 'USDC',
    value: 'USDC',
  },
  {
    label: 'ETH',
    value: 'ETH',
  },
];
export type RefObject = {
  onOpen: () => void;
};

export const tableDeposit = [
  {
    label: 'deposit.to',
    value: (
      <CustomSelect
        value={'Spot'}
        onChange={() => {}}
        options={['Spot', 'Funding', 'Future']}
        classNameValue='text-[10px] font-normal tracking-[0.2px] text-[#212121]'
        classNameIcon='w-2 h-2'
        classNameMenuItem='left-[-40px]'
        className='gap-0.5'
        icon='/assets/iconly/ic-arrow-down.svg'
      />
    ),
  },
  {
    label: 'deposit.min',
    value: (
      <Typography
        variant='caption'
        className='font-normal leading-normal text-[10px]'
      >{`>0,001 USDT`}</Typography>
    ),
  },
  {
    label: 'deposit.allow',
    value: (
      <Typography variant='caption' className='underline font-normal leading-normal text-[10px]'>
        Bundle 1
      </Typography>
    ),
  },
  {
    label: 'deposit.withdaw',
    value: (
      <Typography variant='caption' className='underline font-normal leading-normal text-[10px]'>
        Bundle 1
      </Typography>
    ),
  },
];
export const mockDataTopic = [
  {
    img: '/assets/iconly/icon-topic.svg',
    title: 'notification.topic1',
  },
  {
    img: '/assets/iconly/icon-topic.svg',
    title: 'notification.topic2',
  },
  {
    img: '/assets/iconly/icon-topic.svg',
    title: 'notification.topic3',
  },
  {
    img: '/assets/iconly/icon-topic.svg',
    title: 'notification.topic4',
  },
  {
    img: '/assets/iconly/icon-topic.svg',
    title: 'notification.topic5',
  },
  {
    img: '/assets/iconly/icon-topic.svg',
    title: 'notification.topic6',
  },
  {
    img: '/assets/iconly/icon-topic.svg',
    title: 'notification.topic7',
  },
  {
    img: '/assets/iconly/icon-topic.svg',
    title: 'notification.topic8',
  },
];
export const mockDataArct = [
  {
    img: '/images/airdrop.png',
    title: 'notification.title',
    time: '11/11/2024',
  },
  {
    img: '/images/airdrop.png',
    title: 'notification.title',
    time: '11/11/2024',
  },
  {
    img: '/images/airdrop.png',
    title: 'notification.title',
    time: '11/11/2024',
  },
];
export const mockDataAirdrop = [
  {
    img: '/images/airdrop-ques.png',
    title: 'academy.airques',
  },
  {
    img: '/images/airdrop-ques.png',
    title: 'academy.airques',
  },
  {
    img: '/images/airdrop-ques.png',
    title: 'academy.airques',
  },
];
export const mockDataTrend = [
  {
    img: '/images/stable-coin.png',
    title: 'notification.title',
    tag: ['academy.options.secure', 'academy.options.defi'],
  },
  {
    img: '/images/stable-coin.png',
    title: 'notification.title',
    tag: ['academy.options.blockchain', 'academy.options.defi'],
  },
  {
    img: '/images/stable-coin.png',
    title: 'notification.title',
    tag: ['academy.eco', 'academy.options.trans'],
  },
  {
    img: '/images/stable-coin.png',
    title: 'notification.title',
    tag: ['academy.eco', 'academy.options.trans'],
  },
  {
    img: '/images/stable-coin.png',
    title: 'notification.title',
    tag: ['academy.eco', 'academy.options.trans'],
  },
];
export const mockDataBotTradeOptions = [
  {
    img: '/assets/iconly/icon-blockchain.svg',
    label: 'bot.gridSpot',
  },
  {
    img: '/assets/iconly/icon-blockchain.svg',
    label: 'bot.gridFuture',
  },
  {
    img: '/assets/iconly/icon-blockchain.svg',
    label: 'bot.priceDifference',
  },
  {
    img: '/assets/iconly/icon-blockchain.svg',
    label: 'bot.equal',
  },
];

export const mockDataOptions = [
  {
    img: '/assets/iconly/icon-blockchain.svg',
    label: 'academy.options.blockchain',
  },
  {
    img: '/assets/iconly/icon-blockchain.svg',
    label: 'academy.options.nft',
  },
  {
    img: '/assets/iconly/icon-blockchain.svg',
    label: 'academy.options.defi',
  },
  {
    img: '/assets/iconly/icon-blockchain.svg',
    label: 'academy.options.secure',
  },
  {
    img: '/assets/iconly/icon-blockchain.svg',
    label: 'academy.options.trans',
  },
];
export const mockDataListCoinUSDT: CoinTrade[] = [
  {
    img: '/assets/iconly/ic-star-grey.svg',
    from: 'BNB',
    to: 'USDT',
    cross: '10x',
    kl: '25M',
    price: '7.234',
    profit: '+0,60%',
  },
  {
    img: '/assets/iconly/ic-star-grey.svg',
    from: 'TON',
    to: 'USDT',
    cross: '10x',
    kl: '25M',
    price: '7.234',
    profit: '+0,60%',
  },
  {
    img: '/assets/iconly/ic-star-grey.svg',
    from: 'DOGE',
    to: 'USDT',
    cross: '10x',
    kl: '25M',
    price: '7.234',
    profit: '+0,60%',
  },
  {
    img: '/assets/iconly/ic-star-grey.svg',
    from: 'ARK',
    to: 'USDT',
    cross: '10x',
    kl: '25M',
    price: '7.234',
    profit: '+0,60%',
  },
  {
    img: '/assets/iconly/ic-star-grey.svg',
    from: 'ETH',
    to: 'USDT',
    cross: '10x',
    kl: '25M',
    price: '7.234',
    profit: '+0,60%',
  },
  {
    img: '/assets/iconly/ic-star-grey.svg',
    from: 'FUEL',
    to: 'USDT',
    cross: '10x',
    kl: '25M',
    price: '7.234',
    profit: '+0,60%',
  },
  {
    img: '/assets/iconly/ic-star-grey.svg',
    from: 'SOL',
    to: 'USDT',
    cross: '10x',
    kl: '25M',
    price: '7.234',
    profit: '+0,60%',
  },
  {
    img: '/assets/iconly/ic-star-grey.svg',
    from: 'XNP',
    to: 'USDT',
    cross: '10x',
    kl: '25M',
    price: '7.234',
    profit: '+0,60%',
  },
  {
    img: '/assets/iconly/ic-star-grey.svg',
    from: 'XLM',
    to: 'USDT',
    cross: '10x',
    kl: '25M',
    price: '7.234',
    profit: '+0,60%',
  },
  {
    img: '/assets/iconly/ic-star-grey.svg',
    from: 'SUI',
    to: 'USDT',
    cross: '10x',
    kl: '25M',
    price: '7.234',
    profit: '+0,60%',
  },
];
export const mockDataListCoinFav: CoinTrade[] = [
  {
    img: '/assets/iconly/ic-star-yellow.svg',
    from: 'BNB',
    to: 'USDT',
    cross: '10x',
    kl: '25M',
    price: '7.234',
    profit: '+0,60%',
    showProtect: true,
  },
  {
    img: '/assets/iconly/ic-star-yellow.svg',
    from: 'ETH',
    to: 'USDT',
    cross: '10x',
    kl: '25M',
    price: '7.234',
    profit: '+0,60%',
  },
  {
    img: '/assets/iconly/ic-star-yellow.svg',
    from: 'SOL',
    to: 'USDT',
    cross: '10x',
    kl: '25M',
    price: '7.234',
    profit: '+0,60%',
  },
  {
    img: '/assets/iconly/ic-star-yellow.svg',
    from: 'TON',
    to: 'USDT',
    cross: '10x',
    kl: '25M',
    price: '7.234',
    profit: '+0,60%',
  },
];
export const mockDataListCoinTON: CoinTrade[] = [
  {
    img: '/assets/iconly/ic-star-grey.svg',
    from: 'BNB',
    to: 'TON',
    cross: '10x',
    kl: '25M',
    price: '7.234',
    profit: '+0,60%',
  },
  {
    img: '/assets/iconly/ic-star-grey.svg',
    from: 'USDT',
    to: 'TON',
    cross: '10x',
    kl: '25M',
    price: '7.234',
    profit: '+0,60%',
  },
  {
    img: '/assets/iconly/ic-star-grey.svg',
    from: 'USDC',
    to: 'TON',
    cross: '10x',
    kl: '25M',
    price: '7.234',
    profit: '+0,60%',
  },
  {
    img: '/assets/iconly/ic-star-grey.svg',
    from: 'LEO',
    to: 'TON',
    cross: '10x',
    kl: '25M',
    price: '7.234',
    profit: '+0,60%',
  },
  {
    img: '/assets/iconly/ic-star-grey.svg',
    from: 'LTC',
    to: 'TON',
    cross: '10x',
    kl: '25M',
    price: '7.234',
    profit: '+0,60%',
  },
  {
    img: '/assets/iconly/ic-star-grey.svg',
    from: 'APT',
    to: 'TON',
    cross: '10x',
    kl: '25M',
    price: '7.234',
    profit: '+0,60%',
  },
  {
    img: '/assets/iconly/ic-star-grey.svg',
    from: 'LINK',
    to: 'TON',
    cross: '10x',
    kl: '25M',
    price: '7.234',
    profit: '+0,60%',
  },
  {
    img: '/assets/iconly/ic-star-grey.svg',
    from: 'SHIB',
    to: 'TON',
    cross: '10x',
    kl: '25M',
    price: '7.234',
    profit: '+0,60%',
  },
  {
    img: '/assets/iconly/ic-star-grey.svg',
    from: 'AVAX',
    to: 'TON',
    cross: '10x',
    kl: '25M',
    price: '7.234',
    profit: '+0,60%',
  },
  {
    img: '/assets/iconly/ic-star-grey.svg',
    from: 'TRX',
    to: 'TON',
    cross: '10x',
    kl: '25M',
    price: '7.234',
    profit: '+0,60%',
  },
];
export type CoinTrade = {
  img: string;
  from: string;
  to: string;
  cross: string;
  kl: string;
  price: string;
  profit: string;
  showProtect?: boolean;
};
export const CoinTradeSort = [
  { name: 'sheetTrade.name' },
  { name: 'sheetTrade.kl' },
  { name: 'sheetTrade.price' },
  { name: 'sheetTrade.pl' },
];
