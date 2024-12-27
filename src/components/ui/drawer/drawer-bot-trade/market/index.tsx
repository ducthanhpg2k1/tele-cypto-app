import { Tabs } from "src/components/ui/tabs"
import { TabItem } from "src/components/ui/tabs/types";
import TopRoi from "./TopRoi";
import TradingPair from "./TradingPair";
import Volatility from "./Volatility";

export enum TYPE_TAB {
    TOP_ROI = 0,
    TRANSACTION = 1,
    FLUCTUATIONS = 1,

}

const Market = () => {

    const tabGrids: TabItem[] = [
        {
            label: 'Top ROI',
            key: TYPE_TAB.TOP_ROI,
            content: <TopRoi />,
        },
        {
            label: 'Cặp giao dịch',
            key: TYPE_TAB.TRANSACTION,
            content: <TradingPair />,
        },
        {
            label: 'Biến động',
            key: TYPE_TAB.FLUCTUATIONS,
            content: <Volatility />,
        },
    ];

    return (
        <div className='flex flex-col pb-10'>
            <Tabs tabs={tabGrids} />

        </div>
    )
}
export default Market