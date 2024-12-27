import { Typography } from "@mui/material"
import clsx from "clsx"
import { useState } from "react"
import TotalBalance from "./TotalBalance"
import Image from "next/image"
import InProgress from "./InProgress"
import SwipeableViews from "react-swipeable-views"
import Simulation from "./Simulation"

const DATA_FILTER = [
    {
        id: 1,
        title: 'Đang tiến hành (0)'
    },
    {
        id: 2,
        title: 'Đã đóng (0)'
    },
    {
        id: 3,
        title: 'Mô phỏng(0)'
    }
]

export const DATA_COPPY = [{
    id: 1,
    title: 'Tổng số dư ví (USDT)',
    value: '0,0000',
    icon: '/images/img-wallet.png'
},
{
    id: 2,
    title: 'Lợi nhuận dòng(USDT)',
    value: '0,0000',
    icon: '/images/img-profit.png'

}
]
const Coppy = () => {
    const [activeFilter, setActiveFilter] = useState(0)
    const handleChangeIndex = (index: number) => {
        setActiveFilter(index);
    };
    return (
        <div className="flex flex-col gap-6">
            <div className="flex items-center gap-1">
                {
                    DATA_FILTER?.map((item, index) => {
                        return (
                            <div onClick={() => setActiveFilter(index)} key={item?.id}
                                className={clsx(
                                    'py-[2px] px-1 rounded transition-all duration-200',
                                    {
                                        'bg-[#F5F5F5]': index === activeFilter,
                                    },
                                )}
                            >
                                <Typography className="text-xs" color={'#9E9E9E'} fontWeight={500}>
                                    {item?.title}
                                </Typography>
                            </div>
                        )
                    })
                }
            </div>
            <SwipeableViews index={activeFilter} onChangeIndex={handleChangeIndex}>
                <InProgress />
                <InProgress />
                <Simulation />
            </SwipeableViews>

        </div>

    )
}
export default Coppy

export const NoData = () => {
    return (
        <div className="mt-14 flex justify-center items-center flex-col gap-1">
            <Image src={'/images/img-nodata-search.png'} width={85} height={64} alt="" />
            <div className="bg-[#F5F5F5] rounded py-0.5 px-1 flex justify-center items-center">
                <Typography className="text-xs" color={'#212121'} fontWeight={500}>
                    Xem danh mục đầu tư
                </Typography>
            </div>
        </div>
    )
}