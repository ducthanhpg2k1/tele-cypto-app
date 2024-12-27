import { Typography } from "@mui/material"
import { DATA_COPPY, NoData } from ".."
import TotalBalance from "../TotalBalance"
import Image from "next/image"
import clsx from "clsx"

const InProgress = () => {
    return (
        <div className="flex flex-col gap-6">

            <TotalBalance />
            <div className="grid grid-cols-2 gap-8">
                {
                    DATA_COPPY?.map((item, index) => {
                        return (
                            <div key={item?.id} className="flex items-center gap-[6px] ">
                                <div className="w-8 h-8 flex justify-center items-center bg-[#EEEEEE] rounded">
                                    <Image src={item?.icon} alt="" width={20} height={20} />
                                </div>
                                <div className="flex flex-col gap-[2px]">
                                    <Typography
                                        className={clsx(
                                            'text-[10px] leading-3',
                                            {
                                                'underline': index === 1,
                                            },
                                        )}
                                        color={'#9E9E9E'} fontWeight={400}>
                                        {item?.title}
                                    </Typography>
                                    <Typography className="text-xs" color={'#212121'} fontWeight={500}>
                                        {item?.value}
                                    </Typography>
                                </div>
                            </div>
                        )
                    })
                }

            </div>

            <NoData />
        </div>
    )
}
export default InProgress