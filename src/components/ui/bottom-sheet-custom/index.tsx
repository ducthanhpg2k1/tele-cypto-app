import React, { ReactNode } from 'react';
import { Sheet } from 'react-modal-sheet';

const BottomSheetCustom = ({
  isOpen,
  onClose,
  children,
}: {
  isOpen: boolean;
  onClose: VoidFunction;
  children: ReactNode;
}) => {
  return (
    <Sheet isOpen={isOpen} onClose={onClose}>
      <Sheet.Container>
        <Sheet.Header />
        <Sheet.Content>
            {children} 
        </Sheet.Content>
      </Sheet.Container>
      <Sheet.Backdrop onTap={onClose} />
    </Sheet>
  );
};

export default BottomSheetCustom;
