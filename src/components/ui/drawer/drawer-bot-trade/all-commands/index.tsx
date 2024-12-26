import { Tabs } from "src/components/ui/tabs"
import { TabItem } from "src/components/ui/tabs/types";
import Running from "./Running";
import History from "./History";

export enum TYPE_TAB {
    RUNNING = 0,
    HISTORY = 1,
}


const AllCommands = () => {
    const tabGrids: TabItem[] = [
        {
            label: 'Đang chạy',
            key: TYPE_TAB.RUNNING,
            content: <Running />,
        },
        {
            label: 'Lịch sử',
            key: TYPE_TAB.HISTORY,
            content: <History />,
        },

    ];

    return (
        <div className='flex flex-col'>
            <Tabs tabs={tabGrids} />
        </div>
    )
}
export default AllCommands