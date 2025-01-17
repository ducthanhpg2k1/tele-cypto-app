import clsx from 'clsx';
import React, { ReactNode } from 'react';
import { Sheet } from 'react-modal-sheet';

const BottomSheetCustom = ({
  isOpen,
  onClose,
  children,
  className = '',
}: {
  isOpen: boolean;
  onClose: VoidFunction;
  children: ReactNode;
  className?: string;
}) => {
  
  return (
    <Sheet
      detent='content-height'
      isOpen={isOpen}
      onClose={onClose}
    >
      <Sheet.Container
        className={clsx('h-max', {
          [className]: className,
        })}
      >
        <Sheet.Header />
        <Sheet.Content>{children}</Sheet.Content>
      </Sheet.Container>
      <Sheet.Backdrop onTap={onClose} />
    </Sheet>
  );
};

export default BottomSheetCustom;
