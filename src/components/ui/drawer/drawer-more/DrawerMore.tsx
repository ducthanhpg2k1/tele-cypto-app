import React from 'react';
import CustomDrawer from '..';
import { Box, Button, Typography } from '@mui/material';
import { PlusIcon, MinusIcon } from '@heroicons/react/24/outline';
import {
  ActionCard,
  ActionIcon,
  ActionLabel,
  ActionsGrid,
  ActiveActionGrid,
  AddButton,
  RemoveButton,
  StyledCard,
} from './styles';
import { useTranslation } from 'react-i18next';
import { IconName, MenuItem } from 'src/components/navigations/home-navagation/types';
import { MAX_ACTIVE_ITEMS } from 'src/components/navigations/home-navagation';

interface IDrawerMoreProps {
  activeItems: MenuItem[];
  filteredInactiveItems: MenuItem[];
  refMore: any;
  isEditing: boolean;
  handleToggleAction: (item: MenuItem, v: boolean) => void;
  handleAction: (item: string) => void;
  getIconComponent: (value: IconName) => JSX.Element;
  setIsEditing: (isEditing: boolean) => void;
}
export default function DrawerMore({
  isEditing,
  refMore,
  activeItems,
  handleToggleAction,
  handleAction,
  getIconComponent,
  setIsEditing,
  filteredInactiveItems,
}: IDrawerMoreProps) {
  const { t } = useTranslation();
  return (
    <CustomDrawer
      anchor='right'
      ref={refMore}
      PaperProps={{
        sx: { width: { xs: '100%', sm: 400 }, pt: 2 },
      }}
      label={t('navigation.drawer.title')}
      showHelpIcon
      showTimeIcon
      showSearch
    >
      <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        <StyledCard>
          <ActiveActionGrid>
            {activeItems.map((item: MenuItem) => {
              return (
                <ActionCard
                  key={item.id}
                  isEditing={isEditing}
                  onClick={() => {
                    if (isEditing) return handleToggleAction(item, true);
                    return handleAction(item.id);
                  }}
                >
                  <ActionIcon>{getIconComponent(item.iconName)}</ActionIcon>
                  {isEditing && (
                    <RemoveButton aria-label={t('navigation.quickActions.removeAction')}>
                      <MinusIcon style={{ width: 8, height: 8 }} />
                    </RemoveButton>
                  )}
                </ActionCard>
              );
            })}
          </ActiveActionGrid>
          <Button
            variant='contained'
            color='primary'
            onClick={() => setIsEditing(!isEditing)}
            aria-label={
              isEditing ? t('navigation.quickActions.done') : t('navigation.quickActions.edit')
            }
          >
            {isEditing ? t('navigation.quickActions.done') : t('navigation.quickActions.edit')}
          </Button>
        </StyledCard>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
          <Typography variant='subtitle1' sx={{ color: 'text.primary' }} className='text-[14px]'>
            {t('navigation.drawer.suggestedActions')}
          </Typography>
        </Box>
        <ActionsGrid>
          {filteredInactiveItems.map((item) => (
            <ActionCard
              key={item.id}
              isEditing={isEditing}
              onClick={() => {
                if (isEditing) return handleToggleAction(item, false);
                console.log('item.id: ', item.id);
                return handleAction(item.id);
              }}
            >
              <ActionIcon>{getIconComponent(item.iconName)}</ActionIcon>
              <ActionLabel variant='caption' className='font-normal'>
                {t(`navigation.quickActions.${item.label}`)}
              </ActionLabel>
              {isEditing && activeItems.length < MAX_ACTIVE_ITEMS && (
                <AddButton aria-label={t('navigation.quickActions.addAction')}>
                  <PlusIcon style={{ width: 8, height: 8 }} />
                </AddButton>
              )}
            </ActionCard>
          ))}
        </ActionsGrid>
      </Box>
    </CustomDrawer>
  );
}
