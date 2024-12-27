import { Typography } from "@mui/material"
import clsx from "clsx"
import { useState } from "react"

const DATA_RUNNING_TIME = [
    {
        id: 1,
        title: 'Tất cả'
    },
    {
        id: 2,
        title: '< 1 ngày'
    },
    {
        id: 3,
        title: '1-7 ngày'
    },
    {
        id: 4,
        title: '7 -30 ngày'
    },
    {
        id: 5,
        title: '>30 ngày'
    },

]
const DATA_DIRECTION = [
    {
        id: 1,
        title: 'Tất cả'
    },
    {
        id: 2,
        title: '>100'
    },
    {
        id: 3,
        title: '< 1 ngày'
    },
    {
        id: 4,
        title: '7 -30 ngày'
    },
    {
        id: 5,
        title: '>30 ngày'
    },
]
const DATA_LEVER = [
    {
        id: 1,
        title: 'Tất cả'
    },
    {
        id: 2,
        title: 'Bình thường'
    },
    {
        id: 3,
        title: 'Long'
    },
    {
        id: 4,
        title: 'Short'
    },

]
const ContentFilter = () => {
    const [valueFilterRunningTime, setValueFilterRunningTime] = useState(2)
    const [valueFilterDirection, setValueFilterDirection] = useState(1)
    const [valueFilterLever1, setValueFilterLever1] = useState(1)

    const [valueFilterLever2, setValueFilterLever2] = useState(1)


    const handleChangeRunningTime = (value: number) => {
        setValueFilterRunningTime(value)
    }

    const handleChangeDirection = (value: number) => {
        setValueFilterDirection(value)
    }
    const handleChangeLever1 = (value: number) => {
        setValueFilterLever1(value)
    }
    const handleChangeLever2 = (value: number) => {
        setValueFilterLever2(value)
    }

    return (
        <div className="flex flex-col gap-4">
            <div className="flex items-center gap-1 overflow-x-hidden overflow-y-auto">
                <Typography className='text-[10px] leading-3' color={'#757575'} fontWeight={400}>
                    Thời gian chạy:
                </Typography>
                <div className="flex items-center gap-3">
                    {
                        DATA_RUNNING_TIME?.map((item) => {
                            return (
                                <ItemFilter key={item?.id} item={item} value={valueFilterRunningTime} handleChange={handleChangeRunningTime} />

                            )
                        })
                    }
                </div>
            </div>
            <div className="flex items-center gap-5">
                <Typography className='text-[10px] leading-3' color={'#757575'} fontWeight={400}>
                    Hướng:
                </Typography>
                <div className="flex items-center gap-3">
                    {
                        DATA_DIRECTION?.map((item) => {
                            return (
                                <ItemFilter key={item?.id} item={item} value={valueFilterDirection} handleChange={handleChangeDirection} />
                            )
                        })
                    }
                </div>
            </div>
            <div className="flex items-center gap-5">
                <Typography className='text-[10px] leading-3' color={'#757575'} fontWeight={400}>
                    Đòn bẩy:
                </Typography>
                <div className="flex items-center gap-3">
                    {
                        DATA_LEVER?.map((item) => {
                            return (
                                <ItemFilter key={item?.id} item={item} value={valueFilterLever1} handleChange={handleChangeLever1} />
                            )
                        })
                    }
                </div>
            </div>
            <div className="flex items-center gap-5">
                <Typography className='text-[10px] leading-3' color={'#757575'} fontWeight={400}>
                    Đòn bẩy:
                </Typography>
                <div className="flex items-center gap-3">
                    {
                        DATA_LEVER?.map((item) => {
                            return (
                                <ItemFilter key={item?.id} item={item} value={valueFilterLever2} handleChange={handleChangeLever2} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
export default ContentFilter


const ItemFilter = ({ item, handleChange, value }: { value: number, item: any, handleChange: (id: number) => void }) => {
    return (
        <div onClick={() => handleChange(item?.id)} key={item?.id}
            style={{
                maxHeight: '20px'
            }}
            className={clsx(
                'transition-all flex justify-center items-center duration-100 rounded-md py-0.5 px-0.5',
                {
                    'bg-[#F5F5F5]': item?.id === value,
                },
            )}
        >
            <Typography className="text-[10px] leading-3" color={item?.id === value ? '#212121' : '#757575'} fontWeight={item?.id === value ? 500 : 400}>
                {item?.title}
            </Typography>
        </div>
    )
}