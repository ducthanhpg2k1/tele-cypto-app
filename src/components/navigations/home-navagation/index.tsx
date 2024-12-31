import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { PlusIcon, MinusIcon } from '@heroicons/react/24/outline';
import type { MenuItem, IconName } from './types';
import {
  Box,
  Button,
  Grid,
  Typography,
  Drawer,
  IconButton,
  TextField,
  InputAdornment,
} from '@mui/material';
import { ArrowBack as ArrowBackIcon } from '@mui/icons-material';
import {
  StyledCard,
  ActionsGrid,
  ActionCard,
  ActionIcon,
  ActionLabel,
  RemoveButton,
  AddButton,
  DrawerHeader,
  ActiveActionGrid,
} from './styles';
import MoreIcon from 'src/assets/icons/MoreIcon';
import HelpInfoIcon from 'src/assets/icons/HelpInfoIcon';
import HeaderTimeIcon from 'src/assets/icons/HeaderTimeIcon';
import SearchIcon from 'src/assets/icons/SearchIcon';
import FutureIcon from 'src/assets/icons/FutureIcon';
import TradeBotIcon from 'src/assets/icons/TradeBotIcon';
import CopyTradeIcon from 'src/assets/icons/CopyTradeIcon';
import TransferIcon from 'src/assets/icons/HomeNavigation/TransferIcon';
import ListingIcon from 'src/assets/icons/ListingIcon';
import AirdropIcon from 'src/assets/icons/Airdrop';
import NotificationIcon from 'src/assets/icons/HomeNavigation/NotificationIcon';
import LaunchpadIcon from 'src/assets/icons/LauchpadIcon';
import StakingIcon from 'src/assets/icons/StakingIcon';
import SpotIcon from 'src/assets/icons/SpotIcon';
import AcademyIcon from 'src/assets/icons/AcademyIcon';
import InviteIcon from 'src/assets/icons/InviteIcon';
import ChartIcon from 'src/assets/icons/ChartIcon';
import { blue } from 'src/theme/colors';
import Invite from 'src/components/ui/drawer/drawer-invite/Content';
import DrawerInvite from 'src/components/ui/drawer/drawer-invite';
import DrawerEarn from 'src/components/ui/drawer/drawer-earn';
import CustomDrawer, { DrawerHandle } from 'src/components/ui/drawer';
import DrawerTransfer from 'src/components/ui/drawer/drawer-transfer';
import DrawerAcademy from 'src/components/ui/drawer/drawer-academy';
import MegaDrop from 'src/assets/icons/MegaDrop';
import Exchange from 'src/assets/icons/Exchange';
import InputSearch from 'src/components/ui/input-search/InputSearch';
import { useRouter } from 'next/navigation';
import DrawerNotification from 'src/components/ui/drawer/drawer-notification';
import DrawerAirDrop from 'src/components/ui/drawer/drawer-airdrop';
import DrawerBotTrade from 'src/components/ui/drawer/drawer-bot-trade';
import DrawerExchange from 'src/components/ui/drawer/drawer-exchange';
import DrawerMore from 'src/components/ui/drawer/drawer-more/DrawerMore';
import DrawerListing from 'src/components/ui/drawer/drawer-listing';
import DrawerCopyTrade from 'src/components/ui/drawer/drawer-copy-trade';

const STORAGE_KEY = 'quick_actions';
export const MAX_ACTIVE_ITEMS = 7;

const iconComponents: Record<IconName, React.ComponentType<any>> = {
  information: InviteIcon,
  spot: SpotIcon,
  stack: StakingIcon,
  launchpad: LaunchpadIcon,
  notification: NotificationIcon,
  academic: AcademyIcon,
  airdrop: AirdropIcon,
  bot: TradeBotIcon,
  transfer: TransferIcon,
  list: ListingIcon,
  copy: CopyTradeIcon,
  invite: InviteIcon,
  future: FutureIcon,
  chart: ChartIcon,
  arrows: ArrowBackIcon,
  rocket: LaunchpadIcon,
  bell: NotificationIcon,
  gift: AirdropIcon,
  cpu: TradeBotIcon,
  userPlus: InviteIcon,
  megadrop: MegaDrop,
  exchange: Exchange,
  academy: AcademyIcon,
};

const ALL_MENU_ITEMS: MenuItem[] = [
  { iconName: 'information', label: 'intro', id: 'intro' },
  { iconName: 'spot', label: 'spot', id: 'spot' },
  { iconName: 'future', label: 'future', id: 'future' },
  { iconName: 'exchange', label: 'exchange', id: 'exchange' },
  { iconName: 'stack', label: 'staking', id: 'staking' },
  { iconName: 'launchpad', label: 'launchpad', id: 'launchpad' },
  { iconName: 'notification', label: 'notification', id: 'notification' },
  { iconName: 'academy', label: 'academy', id: 'academy' },
  { iconName: 'airdrop', label: 'airdrop', id: 'airdrop' },
  { iconName: 'bot', label: 'bot', id: 'tradingbot' },
  { iconName: 'transfer', label: 'transfer', id: 'transfer' },
  { iconName: 'list', label: 'listing', id: 'listing' },
  { iconName: 'copy', label: 'copytrade', id: 'copytrade' },
  { iconName: 'megadrop', label: 'megadrop', id: 'megadrop' },
];

const getIconComponent = (iconName: IconName): JSX.Element => {
  const IconComponent = iconComponents[iconName];
  return IconComponent ? (
    <IconComponent style={{ width: 24, height: 24 }} color={blue.main} />
  ) : (
    <Box sx={{ width: 24, height: 24 }} />
  );
};

const NavigationMenu = (): JSX.Element => {
  const refEarn = useRef<DrawerHandle | null>(null);
  const refInvite = useRef<DrawerHandle | null>(null);
  const refMore = useRef<DrawerHandle | null>(null);
  const refTransfer = useRef<DrawerHandle | null>(null);
  const refAcademy = useRef<DrawerHandle | null>(null);
  const refNoti = useRef<DrawerHandle | null>(null);
  const refAirDrop = useRef<DrawerHandle | null>(null);
  const refBotTrade = useRef<DrawerHandle | null>(null);
  const refExchange = useRef<DrawerHandle | null>(null);
  const refListing = useRef<DrawerHandle | null>(null);
  const refCopyTrade = useRef<DrawerHandle | null>(null);
  const router = useRouter();

  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeItems, setActiveItems] = useState<MenuItem[]>([
    {
      iconName: 'transfer',
      label: 'transfer',
      id: 'transfer',
    },
    {
      iconName: 'invite',
      label: 'invite',
      id: 'invite',
    },
    {
      iconName: 'stack',
      label: 'staking',
      id: 'staking',
    },
    {
      iconName: 'list',
      label: 'listing',
      id: 'listing',
    },
    {
      iconName: 'copy',
      label: 'copytrade',
      id: 'copytrade',
    },
  ]);
  const [inactiveItems, setInactiveItems] = useState<MenuItem[]>([]);

  const { t } = useTranslation();
  const handleAction = useCallback((id: string) => {
    switch (id) {
      case ALL_MENU_ITEMS[0].id: {
        return refInvite.current?.onOpen();
      }
      case ALL_MENU_ITEMS[1].id: {
        return router.push('/trade');
      }
      case ALL_MENU_ITEMS[2].id: {
        return router.push('/future');
      }
      case ALL_MENU_ITEMS[3].id: {
        return refExchange.current?.onOpen();
      }
      case ALL_MENU_ITEMS[4].id: {
        return refEarn.current?.onOpen();
      }
      case ALL_MENU_ITEMS[5].id: {
        return console.log('launchpad');
      }
      case ALL_MENU_ITEMS[6].id: {
        return refNoti.current?.onOpen();
      }
      case ALL_MENU_ITEMS[7].id: {
        return refAcademy.current?.onOpen();
      }
      case ALL_MENU_ITEMS[8].id: {
        return refAirDrop.current?.onOpen();
      }
      case ALL_MENU_ITEMS[9].id: {
        return refBotTrade.current?.onOpen();
      }
      case ALL_MENU_ITEMS[10].id: {
        return refTransfer.current?.onOpen();
      }
      case ALL_MENU_ITEMS[11].id: {
        return refListing.current?.onOpen();
      }
      case ALL_MENU_ITEMS[12].id: {
        return refCopyTrade.current?.onOpen();
      }
      case ALL_MENU_ITEMS[13].id: {
        return console.log('mega drop');
      }
      case 'invite': {
        return refInvite.current?.onOpen();
      }
      default:
        break;
    }
  }, []);

  const defaultQuickActions: MenuItem[] = [
    {
      iconName: 'transfer',
      label: 'transfer',
      id: 'transfer',
      action: () => {
        refTransfer.current?.onOpen();
      },
    },
    {
      iconName: 'invite',
      label: 'invite',
      id: 'invite',
      action: () => {
        refInvite.current?.onOpen();
      },
    },
    {
      iconName: 'stack',
      label: 'staking',
      id: 'staking',
      action: () => {
        refEarn.current?.onOpen();
      },
    },
    {
      iconName: 'academy',
      label: 'academy',
      id: 'academy',
      action: () => {
        refAcademy.current?.onOpen();
      },
    },
    {
      iconName: 'notification',
      label: 'notification',
      id: 'notification',
      action: () => {
        refNoti.current?.onOpen();
      },
    },
    {
      iconName: 'bot',
      label: 'bot',
      id: 'tradingbot',
      action: () => {
        refBotTrade.current?.onOpen();
      },
    },
    {
      iconName: 'airdrop',
      label: 'airdrop',
      id: 'airdrop',
      action: () => {
        refAirDrop.current?.onOpen();
      },
    },
    {
      iconName: 'exchange',
      label: 'exchange',
      id: 'exchange',
      action: () => {
        refExchange.current?.onOpen();
      },
    },
    {
      iconName: 'spot',
      label: 'spot',
      id: 'spot',
      action: () => {
        router.push('/trade');
      },
    },
    {
      iconName: 'future',
      label: 'future',
      id: 'future',
      action: () => {
        router.push('/future');
      },
    },
  ];
  useEffect(() => {
    const savedActions = localStorage.getItem(STORAGE_KEY);
    if (savedActions) {
      const parsedActions = JSON.parse(savedActions) as MenuItem[];
      const actionsWithHandlers = parsedActions.map((item) => {
        const defaultAction = defaultQuickActions.find((defaultItem) => defaultItem.id === item.id);
        return { ...item, action: defaultAction?.action };
      });
      setActiveItems(actionsWithHandlers);
      updateInactiveItems(actionsWithHandlers);
    } else {
      setActiveItems(defaultQuickActions);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultQuickActions));
      updateInactiveItems(defaultQuickActions);
    }
  }, []);

  const updateInactiveItems = (activeOnes: MenuItem[]): void => {
    const inactiveOnes = ALL_MENU_ITEMS.filter(
      (item) => !activeOnes.some((active) => active.id === item.id),
    );
    setInactiveItems(inactiveOnes);
  };

  const handleToggleAction = (item: MenuItem, isActive: boolean): void => {
    if (!isEditing) return;
    if (!isActive && activeItems.length >= MAX_ACTIVE_ITEMS) return;

    const updatedActive = isActive
      ? activeItems.filter((i) => i.id !== item.id)
      : [...activeItems, item];

    const updatedInactive = isActive
      ? [...inactiveItems, item]
      : inactiveItems.filter((i) => i.id !== item.id);

    setActiveItems(updatedActive);
    setInactiveItems(updatedInactive);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedActive));
  };

  const filteredInactiveItems = inactiveItems.filter((item) =>
    t(`navigation.quickActions.${item.label}`).toLowerCase().includes(searchQuery.toLowerCase()),
  );
  return (
    <Box sx={{ my: 2, mb: 0 }}>
      <Grid container spacing={1} columns={12}>
        {activeItems.map((action: MenuItem) => (
          <Grid item xs={3} key={action.id}>
            <Button
              fullWidth
              onClick={() => handleAction(action.id)}
              sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
            >
              <Box
                sx={{
                  p: 1,
                  borderRadius: 1,
                  color: 'primary.main',
                  backgroundColor: '#F5F5F5',
                }}
              >
                {getIconComponent(action.iconName)}
              </Box>
              <Typography variant='caption' sx={{ mt: 0.5, color: 'text.primary' }}>
                {t(`navigation.quickActions.${action.label}`)}
              </Typography>
            </Button>
          </Grid>
        ))}
        <Grid item xs={3}>
          <Button
            fullWidth
            sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
            onClick={() => refMore.current?.onOpen()}
          >
            <Box sx={{ p: 1, borderRadius: 1, color: 'primary.main', backgroundColor: '#F5F5F5' }}>
              <MoreIcon />
            </Box>
            <Typography variant='caption' sx={{ mt: 0.5, color: 'text.primary' }}>
              {t('navigation.more')}
            </Typography>
          </Button>
        </Grid>
      </Grid>
      <DrawerMore
        refMore={refMore}
        handleToggleAction={handleToggleAction}
        isEditing={isEditing}
        setIsEditing={setIsEditing}
        activeItems={activeItems}
        filteredInactiveItems={filteredInactiveItems}
        getIconComponent={getIconComponent}
        handleAction={handleAction}
      />
      <DrawerInvite refInvite={refInvite} />
      <DrawerEarn ref={refEarn} />
      <DrawerTransfer ref={refTransfer} />
      <DrawerAcademy ref={refAcademy} />
      <DrawerNotification ref={refNoti} />
      <DrawerAirDrop refAirDrop={refAirDrop} />
      <DrawerBotTrade ref={refBotTrade} />
      <DrawerExchange ref={refExchange} />
      <DrawerListing ref={refListing} />
      <DrawerCopyTrade ref={refCopyTrade} />
    </Box>
  );
};

export default NavigationMenu;
