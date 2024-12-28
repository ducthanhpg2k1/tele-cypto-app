import { useRef, useState } from "react"
import { TagAction } from "../../transaction/TransactionAI/Popular"
import ModalSurfSpot from "./ModalSurfSpot"
import { Divider, Typography } from "@mui/material"


const Running = ({ handleClickMarketBot }: { handleClickMarketBot: VoidFunction }) => {


    return (
        <div className="flex flex-col gap-4 pt-4">
            <CardRunning handleClickMarketBot={handleClickMarketBot} />
        </div>
    )
}
export default Running

const CardRunning = ({ handleClickMarketBot }: { handleClickMarketBot: VoidFunction }) => {
    return (
        <div className="border border-[#EEEEEE] p-4 flex flex-col gap-5 rounded-2xl">

            <div className="flex flex-col gap-4">
                {[...Array(4)].map((item, index) => {
                    return (
                        <div key={index} className="flex flex-col gap-3">
                            <Typography variant='body2' color={'#212121'} fontWeight={500}>
                                UTK/USDT
                            </Typography>
                            <div className="flex justify-between items-center">
                                <div className="flex flex-col gap-[2px]">
                                    <Typography className="text-xs" color={'#757575'} fontWeight={400}>
                                        ROI
                                    </Typography>
                                    <Typography className="text-xs" color={'#4AAF57'} fontWeight={500}>
                                        42,66%
                                    </Typography>
                                </div>
                                <div className="flex flex-col gap-[2px]">
                                    <Typography className="text-xs" color={'#757575'} fontWeight={400}>
                                        Thời gian hoạt động
                                    </Typography>
                                    <Typography className="text-xs" color={'#212121'} fontWeight={500}>
                                        3 ngày 17 giờ 56ph
                                    </Typography>
                                </div>
                            </div>
                        </div>

                    )
                })}
            </div>

            <Divider variant='fullWidth' />
            <div onClick={handleClickMarketBot}>
                <Typography className="text-xs text-center" color={'#177DFF'} fontWeight={500}>
                    Tìm hiểu thị trường Bot
                </Typography>
            </div>

        </div>
    )
}