import { useRef, useState } from "react"
import { TagAction } from "../../transaction/TransactionAI/Popular"
import ModalSurfSpot from "../Running/ModalSurfSpot"
import ModalTradingPair from "../../transaction/TransactionAI/ModalTradingPair"
import ModalStatus from "../ModalStatus"
import ModalTrailingUp from "../ModalTrailingUp"
import Image from "next/image"
import { Typography } from "@mui/material"

const History = () => {
    const [valueTop, setValueTop] = useState<string>('Lưới Spot')
    const [valueStatus, setValueStatus] = useState<string>('')
    const [valueTrailingUp, setValueTrailingUp] = useState<string>('')


    const [valueTradingPair, setValueTopTradingPair] = useState<any>({
        title: '',
        id: 0
    })
    const refModalSurfSpot: any = useRef()
    const refModalTradingPair: any = useRef()
    const refModalStatus: any = useRef()
    const refModalTrailingUp: any = useRef()



    return (
        <div className="pt-4 flex flex-col">
            <div className="flex items-center flex-wrap gap-1">
                <TagAction handleClick={() => refModalSurfSpot.current.onOpen()} label={valueTop} />
                <TagAction handleClick={() => refModalTradingPair.current.onOpen()} label={valueTradingPair?.title ? valueTradingPair?.title : 'Cặp'} />
                <TagAction handleClick={() => refModalStatus.current.onOpen()} label={valueStatus ? valueStatus : 'Trạng thái'} />
                <TagAction handleClick={() => refModalTrailingUp.current.onOpen()} label={valueTrailingUp ? refModalTrailingUp : "Trailing Up"} />

            </div>

            <NoData />
            <ModalSurfSpot value={valueTop} handleClickSurf={(value: string) => setValueTop(value)} ref={refModalSurfSpot} />
            <ModalTradingPair value={valueTradingPair?.id} handleClickTop={(title: string, id: number) => setValueTopTradingPair({
                title,
                id

            })} ref={refModalTradingPair} />
            <ModalStatus value={valueStatus} handleClick={(value: string) => setValueStatus(value)} ref={refModalStatus} />
            <ModalTrailingUp value={valueTrailingUp} handleClick={(value: string) => setValueTrailingUp(value)} ref={refModalTrailingUp} />


        </div>
    )
}
export default History

const NoData = () => {
    return (
        <div className="pt-16 flex flex-col gap-1 justify-center items-center">
            <Image src={'/images/img-noData.png'} width={85} height={65} alt="" />
            <Typography className="text-xs" color={'#424242'} fontWeight={400}>
                Không tìm thấy bản ghi nào
            </Typography>
        </div>
    )
}