import { useRef, useState } from "react"
import { TagAction } from "../../../drawer-bot-trade/transaction/TransactionAI/Popular"
import ModalDate from "./ModalDate"
import { Typography } from "@mui/material"
import clsx from "clsx"
import CardContentPublic from "./CardContentPublic"

const DATA_CONTRACT = ['PnL', 'ROI', 'MMD', 'AUM', 'Copy Trader']

const PublicContract = ({ type }: { type?: string }) => {
    const refModalDate: any = useRef()
    const [valueDate, setValueDate] = useState<string>('90 ngày')
    const [activeFilter, setActiveFilter] = useState<string>('ROI')

    const handleActiveFilter = (value: string) => {
        setActiveFilter(value)
    }

    return (
        <div className="flex flex-col gap-1 mt-5 pb-5">
            <div className="flex items-center gap-1 justify-center pb-2 h-max relative">
                <div className="sticky left-0">
                    <TagAction handleClick={() => refModalDate.current.onOpen()} label={valueDate} />
                </div>
                <div className="w-full gap-3 flex items-center pl-[12px] hiddenScroll overflow-auto">
                    {
                        DATA_CONTRACT?.map((item) => {
                            return (
                                <div
                                    onClick={() => handleActiveFilter(item)}
                                    className={clsx(
                                        'py-[2px] px-1 rounded',
                                        {
                                            'bg-[#F5F5F5]': item === activeFilter,
                                        },
                                    )}
                                >
                                    <Typography
                                        color={'#212121'}
                                        className="text-xs w-max"
                                        fontWeight={500}
                                    >
                                        {item}
                                    </Typography>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            {Array.from({ length: 5 }).map((_, key) => {
                return (
                    <CardContentPublic
                        type={type}
                        key={key + 'card content'}
                    />
                );
            })}
            <ModalDate
                value={valueDate}
                handleClick={(value: string) => setValueDate(value)}
                ref={refModalDate} />
        </div>
    )
}
export default PublicContract