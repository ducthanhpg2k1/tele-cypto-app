import { useState, useEffect, type FC, type ReactNode } from 'react';
import { ArrowLeftIcon } from '@heroicons/react/24/solid';

interface HeaderAction {
  icon: ReactNode;
  onClick: () => void;
}

interface SlideProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  headerActions?: HeaderAction[];
  children: ReactNode;
}

const Slide: FC<SlideProps> = ({ open, onClose, title = '', headerActions = [], children }) => {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (open) {
      setMounted(true);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setVisible(true);
        });
      });
    } else {
      setVisible(false);
      const timer = setTimeout(() => {
        setMounted(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [open]);

  if (!mounted) return null;

  return (
    <div
      className={`
        fixed inset-0 flex
        transition-transform duration-300 ease-in-out
        ${visible ? 'translate-x-0' : 'translate-x-full'}
      `}
      style={{ zIndex: '9999' }}
    >
      <div
        className={`
          fixed inset-0 bg-black
          transition-opacity duration-300 ease-in-out
          ${visible ? 'opacity-50' : 'opacity-0'}
        `}
        onClick={onClose}
      />

      <div className="relative ml-auto w-full max-w-md h-full bg-white dark:bg-gray-900 shadow-xl">
        <div className="sticky top-0 z-10 px-4 py-3 bg-white dark:bg-gray-900 border-b dark:border-gray-800">
          <div className="flex items-center justify-between">
            <button
              onClick={onClose}
              className="p-2 -ml-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <ArrowLeftIcon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
            </button>

            {title && (
              <h2 className="text-base font-medium text-gray-900 dark:text-gray-100">{title}</h2>
            )}

            {headerActions.length > 0 && (
              <div className="flex space-x-1">
                {headerActions.map((action, index) => (
                  <button
                    key={index}
                    onClick={action.onClick}
                    className="px-0.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
                  >
                    {action.icon}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="h-full overflow-y-auto">{children}</div>
      </div>
    </div>
  );
};

export default Slide;
