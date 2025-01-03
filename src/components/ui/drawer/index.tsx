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
  isCopyTrade?: boolean
  contentCenter?: ReactNode
  isProfile?: boolean
  handleClickIconProfile?: VoidFunction,
  isMyProfile?: boolean,
  onScrollContent?: any,
  isFilter?:boolean,
  handleClickFilter?:VoidFunction

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
      handleClickIconProfile,
      handleClickFilter,
      isFilter,
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
                justifyContent: 'center',
                width: '100%',
                px: 1,
              }}
            >
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
              {
                isCopyTrade && (
                  <>{contentCenter}</>
                )
              }
              {
                !isCopyTrade && (
                  <Typography variant='body2' fontWeight={700} color={'#212121'}>
                    {label}
                  </Typography>
                )
              }

              <div className='flex items-center gap-1 absolute right-[12px]'>
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
                  <div
                    className='flex items-center gap-1'
                  >
                    <HeaderIconSearch />
                    <HeaderIconShare />
                  </div>
                )}
                {isProfile && (
                  <div
                    className='flex items-center gap-1'
                  >
                    <HeaderIconShare />
                    <div onClick={handleClickIconProfile}>
                      <HeaderIconProfile />

                    </div>

                  </div>
                )}
                {isFilter && (
                  <div
                  onClick={handleClickFilter}
                  >
                    <HeaderIconFilter />

                  </div>
                )}
                {isCopyTrade && (
                  <div
                    className='flex items-center gap-1'
                  >
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
        <DrawerWrapperContent onScroll={onScrollContent} showSearch={showSearch || false}>{children}</DrawerWrapperContent>
      </Drawer>
    );
  },
);

export default CustomDrawer;
