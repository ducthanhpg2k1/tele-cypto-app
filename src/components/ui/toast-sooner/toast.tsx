import { toast as t } from 'sonner';
import React from 'react';
export const toast = {
  success: (message: string) => {
    t.custom(
      () => (
        <div className="w-full justify-center flex items-center">
          <div
            className="flex items-center gap-3 justify-center w-fit p-1 rounded-[12px] border-1 border-gray-700 mt-6"
            style={{
              backgroundColor: '#4AAF57',
              padding: '8px',
              borderRadius: '12px',
            }}
          >
            <p className="text-sm text-white">{message}</p>
          </div>
        </div>
      ),
      { duration: 1000 }
    );
  },

  error: (message: string) => {
    t.custom(
      () => (
        <div className="w-full justify-center flex items-center">
          <div
            style={{ backgroundColor: '#F54336', padding: '8px', borderRadius: '12px' }}
            className="flex items-center gap-3 justify-center w-fit px-3 py-2 rounded-[12px] border-1 border-gray-700 mt-6"
          >
            <p className="text-sm text-white">{message}</p>
          </div>
        </div>
      ),
      { duration: 1000 }
    );
  },
};
