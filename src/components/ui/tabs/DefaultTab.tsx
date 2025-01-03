import { FC, ReactNode, useRef, useState } from 'react';

interface TabItem {
  id: string;
  label: string;
  disabled?: boolean;
  content?: ReactNode;
}

interface TabsProps {
  items: TabItem[];
  defaultActiveTab?: string;
  onChange?: (tabId: string) => void;
}

const DefaultTab: FC<TabsProps> = ({ items, defaultActiveTab, onChange }) => {
  const [activeTab, setActiveTab] = useState(defaultActiveTab || items[0].id);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
    onChange?.(tabId);
  };

  return (
    <div className='w-full relative'>
      <div className='mb-2  relative'>
        <div
          ref={scrollRef}
          className='flex overflow-x-auto scrollbar-hide -mb-px'
          style={{
            scrollBehavior: 'smooth',
            msOverflowStyle: 'none' /* IE and Edge */,
            scrollbarWidth: 'none' /* Firefox */,
          }}
        >
          {items.map((tab) => (
            <button
              key={tab.id}
              className={`p-1.5 font-medium text-sm border-b-2 whitespace-nowrap ${
                activeTab === tab.id
                  ? 'border-main-color text-main-color'
                  : tab.disabled
                    ? 'border-transparent text-gray-400 cursor-not-allowed'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
              onClick={() => !tab.disabled && handleTabClick(tab.id)}
              disabled={tab.disabled}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
      <div className='tab-content'>{items.find((tab) => tab.id === activeTab)?.content}</div>
    </div>
  );
};

export default DefaultTab;
