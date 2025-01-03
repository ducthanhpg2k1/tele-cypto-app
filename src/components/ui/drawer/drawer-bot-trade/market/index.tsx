import { Tabs } from "src/components/ui/tabs"
import { TabItem } from "src/components/ui/tabs/types";
import TopRoi, { FilterAction } from "./TopRoi";
import TradingPair from "./TradingPair";
import Volatility from "./Volatility";
import { useState } from "react";
import IconSetting from "src/assets/icons/IconSetting";
import IconFilter from "src/assets/icons/IconFilter";
import IconList from "src/assets/icons/IconList";
import IconMenu from "src/assets/icons/IconMenu";
import { useTranslation } from "react-i18next";

export enum TYPE_TAB {
    TOP_ROI = 0,
    TRANSACTION = 1,
    FLUCTUATIONS = 2,

}

const Market = () => {
    const [activeTab, setActiveTab] = useState<TYPE_TAB>(0)
    const [valueFilter, setValueFilter] = useState<number>(2)
    const [valueFilterTransaction, setValueTransaction] = useState<number>(1)
    const { t } = useTranslation();


    const [activeFilter, setActiveFilter] = useState<boolean>(false)
    const [index, setIndex] = useState(0);

    const handleClickFilter = () => {
        setActiveFilter(!activeFilter)
    }

    const handleChangeIndex = (index: number) => {
        setIndex(index);
    };
    const onChaneTab = (tab: any) => {
        setActiveTab(tab)
    }
    const tabGrids: TabItem[] = [
        {
            label: t('bot.topToi'),
            key: TYPE_TAB.TOP_ROI,
            content: <TopRoi index={index} activeFilter={activeFilter} handleChangeIndex={handleChangeIndex} />,
        },
        {
            label: t('bot.trading_pair'),
            key: TYPE_TAB.TRANSACTION,
            content: <TradingPair valueFilterTransaction={valueFilterTransaction} />,
        },
        {
            label: t('bot.fluctuation'),
            key: TYPE_TAB.FLUCTUATIONS,
            content: <Volatility />,
        },
    ];

    const renderContentHeaderTab = () => {
        if (activeTab === TYPE_TAB.TOP_ROI) {
            return (
                <div className="flex justify-between items-center mt-4">
                    <FilterAction value={valueFilter} handleChangeFilter={(value) => setValueFilter(value)} />
                    <div className="flex items-center gap-1">
                        <IconSetting />
                        <IconFilter color={activeFilter ? '#177DFF' : '#9E9E9E'} onClick={handleClickFilter} />
                        {
                            index === 0 ? (
                                <IconList onClick={() => setIndex(1)} />
                            ) : (
                                <IconMenu onClick={() => setIndex(0)} />
                            )
                        }

                    </div>
                </div>
            )
        }

        if (activeTab === TYPE_TAB.TRANSACTION) {
            return (
                <div className="mt-4">
                    <FilterAction value={valueFilterTransaction} handleChangeFilter={(value) => setValueTransaction(value)} />

                </div>
            )
        }

        if (activeTab === TYPE_TAB.FLUCTUATIONS) {
            return (
                <div className="mt-4">
                    <FilterAction value={valueFilter} handleChangeFilter={(value) => setValueFilter(value)} />
                </div>
            )
        }
    }

    return (
        <div className='flex flex-col pb-10'>
            <Tabs
                onChaneTab={onChaneTab}
                contentHeaderTab={renderContentHeaderTab()} isFixedTab tabs={tabGrids} />
        </div>
    )

}
export default Market