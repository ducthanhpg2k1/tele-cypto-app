import { Tabs } from "src/components/ui/tabs"
import { TabItem } from "src/components/ui/tabs/types";
import Running from "./Running";
import History from "./History";
import { TagAction } from "../transaction/TransactionAI/Popular";
import ModalSurfSpot from "./Running/ModalSurfSpot";
import { useRef, useState } from "react";
import ModalTradingPair from "../transaction/TransactionAI/ModalTradingPair";
import ModalStatus from "./ModalStatus";
import ModalTrailingUp from "./ModalTrailingUp";
import { useTranslation } from "react-i18next";

export enum TYPE_TAB {
    RUNNING = 0,
    HISTORY = 1,
}

const AllCommands = ({ handleClickMarketBot }: { handleClickMarketBot: VoidFunction }) => {
    const [valueTop, setValueTop] = useState<string>('Lưới Spot')
    const [activeTab, setActiveTab] = useState<TYPE_TAB>(0)
    const [valueStatus, setValueStatus] = useState<string>('');
    const [valueTrailingUp, setValueTrailingUp] = useState<string>('');
    const { t } = useTranslation();

    const [valueTradingPair, setValueTopTradingPair] = useState<any>({
        title: '',
        id: 0,
    });
    const refModalTradingPair: any = useRef();
    const refModalStatus: any = useRef();
    const refModalTrailingUp: any = useRef();
    const refModalSurfSpot: any = useRef()
    const tabGrids: TabItem[] = [
        {
            label: t('bot.running'),
            key: TYPE_TAB.RUNNING,
            content: <Running handleClickMarketBot={handleClickMarketBot} />,
        },
        {
            label: t('bot.history'),
            key: TYPE_TAB.HISTORY,
            content: <History />,
        },

    ];

    const onChaneTab = (tab: any) => {
        setActiveTab(tab)
    }

    return (
        <div className='flex flex-col pb-20'>
            <Tabs
                onChaneTab={onChaneTab}
                contentHeaderTab={
                    <>
                        {
                            activeTab === TYPE_TAB.RUNNING ? (
                                <div className="mt-4">
                                    <TagAction handleClick={() => refModalSurfSpot.current.onOpen()} label={valueTop} />

                                </div>
                            ) : (
                                <div className='flex items-center flex-wrap gap-1 mt-4'>
                                    <TagAction handleClick={() => refModalSurfSpot.current.onOpen()} label={valueTop} />
                                    <TagAction
                                        handleClick={() => refModalTradingPair.current.onOpen()}
                                        label={valueTradingPair?.title || t('bot.bag')}
                                    />
                                    <TagAction
                                        handleClick={() => refModalStatus.current.onOpen()}
                                        label={valueStatus || t('bot.status')}
                                    />
                                    <TagAction
                                        handleClick={() => refModalTrailingUp.current.onOpen()}
                                        label={valueTrailingUp || t('bot.trailing_up')}
                                    />
                                </div>
                            )
                        }
                    </>

                } isFixedTab tabs={tabGrids} />
            <ModalSurfSpot value={valueTop} handleClickSurf={(value: string) => setValueTop(value)} ref={refModalSurfSpot} />

            <ModalTradingPair
                value={valueTradingPair?.id}
                handleClickTop={(title: string, id: number) =>
                    setValueTopTradingPair({
                        title,
                        id,
                    })
                }
                ref={refModalTradingPair}
            />
            <ModalStatus
                value={valueStatus}
                handleClick={(value: string) => setValueStatus(value)}
                ref={refModalStatus}
            />
            <ModalTrailingUp
                value={valueTrailingUp}
                handleClick={(value: string) => setValueTrailingUp(value)}
                ref={refModalTrailingUp}
            />
        </div>
    )
}
export default AllCommands