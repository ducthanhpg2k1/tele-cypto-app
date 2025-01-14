import { Box, Drawer, DrawerProps, IconButton, PaperProps, Typography } from '@mui/material';
import React, { useState, useImperativeHandle, forwardRef, ReactNode } from 'react';
import { DrawerHeader, DrawerWrapperContent } from './style';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import HelpInfoIcon from 'src/assets/icons/HelpInfoIcon';
import HeaderTimeIcon from 'src/assets/icons/HeaderTimeIcon';
import InputSearch from '../input-search/InputSearch';
import EllipseCircleIcon from 'src/assets/icons/EllipseCircleIcon';
import HeaderIconSearch from 'src/assets/icons/HeaderIconSearch';
import HeaderIconNote from 'src/assets/icons/HeaderIconNote';
import CustomTab from '../custom-tab';
import HeaderIconShare from 'src/assets/icons/HeaderIconShare';
import HeaderIconProfile from 'src/assets/icons/HeaderIconProfile';
import HeaderIconFilter from 'src/assets/icons/HeaderIconFilter';
import IconFilterNew from 'src/assets/icons/IconFilterNew';
import IconNotification from 'src/assets/icons/IconNotification';
import { t } from 'i18next';
import IconDot from 'src/assets/icons/IconDot';
import IconShareNew from 'src/assets/icons/IconShareNew';
import IconMenuChart from 'src/assets/icons/IconMenuChart';

export type DrawerHandle = {
  onOpen: () => void;
  onClose: () => void;
};

type Props = Omit<DrawerProps, 'open'> & {
  children: React.ReactNode;
  anchor: 'right' | 'left' | 'top' | 'bottom';
  paperClassName?: Partial<PaperProps> | undefined;
  label?: string;
  showSearch?: boolean;
  showHelpIcon?: boolean;
  showTimeIcon?: boolean;
  isCustomHeader?: boolean;
  showEllipseCircle?: boolean;
  isCopyTrade?: boolean;
  contentCenter?: ReactNode;
  isProfile?: boolean;
  handleClickIconProfile?: VoidFunction;
  isMyProfile?: boolean;
  onScrollContent?: any;
  isFilter?: boolean;
  handleClickFilter?: VoidFunction;
  showFilterNew?: boolean;
  showNotification?: boolean;
  showIconDot?: boolean;
  isViewShowChart?: boolean;
};

const CustomDrawer = forwardRef<DrawerHandle, Props>(
  (
    {
      children,
      anchor,
      paperClassName,
      label,
      showSearch,
      showHelpIcon,
      showTimeIcon,
      isCustomHeader,
      showEllipseCircle,
      isCopyTrade,
      contentCenter,
      isProfile,
      isMyProfile,
      onScrollContent,
      showFilterNew,
      handleClickIconProfile,
      handleClickFilter,
      showNotification,
      isFilter,
      isViewShowChart,
      showIconDot,
      ...rest
    },
    ref,
  ) => {
    const [isOpen, setIsOpen] = useState(false);

    useImperativeHandle(ref, () => ({
      onOpen: () => setIsOpen(true),
      onClose: () => setIsOpen(false),
    }));

    return (
      <Drawer
        anchor={anchor}
        open={isOpen}
        onClose={() => setIsOpen(false)}
        PaperProps={paperClassName}
        BackdropProps={{
          style: {
            height: '100vh',
          },
        }}
        SlideProps={{
          easing: {
            enter: 'cubic-bezier(0.4, 0, 0.2, 1)',
            exit: 'cubic-bezier(0.4, 0, 0.2, 1)',
          },
          timeout: 500,
          style: { overflow: 'hidden', zIndex: 999, height: '100vh' },
        }}
        {...rest}
      >
        {!isCustomHeader && (
          <DrawerHeader>
            <Box
              sx={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: isViewShowChart? 'space-between' : 'center',
                width: '100%',
                px: 1,
              }}
            >
              <div className='flex items-center gap-3'>
                <IconButton
                  onClick={() => {
                    if (ref && typeof ref !== 'function' && ref.current) {
                      ref.current.onClose();
                    }
                  }}
                  className='absolute left-[4px]'
                >
                  <ArrowBackIcon />
                </IconButton>
                {isViewShowChart && (
                  <div className='flex items-center gap-[2px] pl-10'>
                    <Typography variant='body1' color='#212121' fontWeight={600}>
                      BTC/USDT
                    </Typography>
                    <div className='bg-[#F5F5F5] py-0.5 px-1 rounded'>
                      <Typography
                        className='text-[10px] leading-3'
                        color='#9E9E9E'
                        fontWeight={400}
                      >
                        {t('trade.ageless')}
                      </Typography>
                    </div>
                    <IconCaretDown />
                  </div>
                )}
              </div>

              {isCopyTrade || (contentCenter && <>{contentCenter}</>)}
              {!isCopyTrade && label && (
                <Typography variant='body2' fontWeight={700} color={'#212121'}>
                  {label}
                </Typography>
              )}

              <div className='flex items-center gap-1 absolute right-[12px]'>
                {isViewShowChart && (
                  <div className='flex items-center gap-3'>
                    <div
                      onClick={() => {
                        //  to do prop action
                        console.log('Help clicked');
                      }}
                    >
                      <IconMenuChart />
                    </div>
                    <div
                      onClick={() => {
                        //  to do prop action
                        console.log('Help clicked');
                      }}
                    >
                      <IconShareNew />
                    </div>
                  </div>
                )}
                {showIconDot && (
                  <div
                    onClick={() => {
                      //  to do prop action
                      console.log('Help clicked');
                    }}
                  >
                    <IconDot />
                  </div>
                )}
                {showFilterNew && (
                  <div
                    onClick={() => {
                      //  to do prop action
                      console.log('Help clicked');
                    }}
                  >
                    <IconFilterNew />
                  </div>
                )}
                {showNotification && (
                  <div
                    onClick={() => {
                      //  to do prop action
                      console.log('Help clicked');
                    }}
                  >
                    <IconNotification />
                  </div>
                )}
                {showHelpIcon && (
                  <div
                    onClick={() => {
                      //  to do prop action
                      console.log('Help clicked');
                    }}
                  >
                    <HelpInfoIcon />
                  </div>
                )}
                {showTimeIcon && (
                  <div
                    onClick={() => {
                      //  to do prop action
                      console.log('clock clicked');
                    }}
                  >
                    <HeaderTimeIcon />
                  </div>
                )}
                {isMyProfile && (
                  <div className='flex items-center gap-1'>
                    <HeaderIconSearch />
                    <HeaderIconShare />
                  </div>
                )}
                {isProfile && (
                  <div className='flex items-center gap-1'>
                    <HeaderIconShare />
                    <div onClick={handleClickIconProfile}>
                      <HeaderIconProfile />
                    </div>
                  </div>
                )}
                {isFilter && (
                  <div onClick={handleClickFilter}>
                    <HeaderIconFilter />
                  </div>
                )}
                {isCopyTrade && (
                  <div className='flex items-center gap-1'>
                    <HeaderIconSearch />
                    <HeaderIconNote />
                  </div>
                )}
                {showEllipseCircle && (
                  <div
                    onClick={() => {
                      //  to do prop action
                      console.log('ellipse circle clicked');
                    }}
                  >
                    <EllipseCircleIcon />
                  </div>
                )}
              </div>
            </Box>
            {showSearch && (
              <Box
                sx={{
                  width: '100%',
                  backgroundColor: '#FFF',
                  py: 1,
                  px: 2,
                }}
              >
                <InputSearch placeholder='Search' />
              </Box>
            )}
          </DrawerHeader>
        )}
        <DrawerWrapperContent onScroll={onScrollContent} showSearch={showSearch || false}>
          {children}
        </DrawerWrapperContent>
      </Drawer>
    );
  },
);

export default CustomDrawer;

const IconCaretDown = () => {
  return (
    <svg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M4.67465 6.2696C4.40081 6.50348 4.25549 6.85432 4.28375 7.21333C4.30905 7.5348 4.49408 7.76688 4.58634 7.87709C4.68976 8.00062 4.83072 8.14154 4.97414 8.28491L8.05762 11.3684C8.12076 11.4316 8.19618 11.5071 8.26807 11.5681C8.35138 11.6388 8.47783 11.733 8.65231 11.7897C8.87825 11.8631 9.12164 11.8631 9.34759 11.7897C9.52207 11.733 9.64852 11.6388 9.73182 11.5681C9.80371 11.5071 9.87913 11.4316 9.94227 11.3684L13.0258 8.28488C13.1692 8.14152 13.3101 8.00061 13.4136 7.87709C13.5058 7.76688 13.6909 7.5348 13.7162 7.21332C13.7444 6.85432 13.5991 6.50348 13.3252 6.2696C13.08 6.06017 12.7851 6.0269 12.6419 6.01422C12.4815 6 12.2821 6.00003 12.0793 6.00006H5.92055C5.71777 6.00003 5.51845 6 5.35797 6.01422C5.2148 6.0269 4.91986 6.06017 4.67465 6.2696Z'
        fill='#616161'
      />
    </svg>
  );
};
