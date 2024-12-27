import { Collapse, Typography } from "@mui/material"
import clsx from "clsx"
import { useState } from "react"
import IconFilter from "src/assets/icons/IconFilter"
import IconMenu from "src/assets/icons/IconMenu"
import IconSetting from "src/assets/icons/IconSetting"
import ContentFilter from "./ContentFilter"
import CustomCheckbox from "src/components/ui/checkbox"
import CardContentTopRoi from "./CardContentTopRoi"
import IconList from "src/assets/icons/IconList"
import TableTopRoi from "./TableTopRoi"
import SwipeableViews from "react-swipeable-views"


const TopRoi = () => {
    const [valueFilter, setValueFilter] = useState<number>(2)
    const [activeFilter, setActiveFilter] = useState<boolean>(false)
    const [index, setIndex] = useState(0);

    const handleChangeIndex = (index: number) => {

        setIndex(index);
    };
    const handleClickFilter = () => {
        setActiveFilter(!activeFilter)
    }

    return (
        <div className="flex flex-col gap-4 pt-4 h-max">
            <div className="flex justify-between items-center">
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
            <Collapse in={activeFilter} timeout='auto' unmountOnExit>
                <ContentFilter />
            </Collapse>

            <div className="flex items-center gap-3">
                <CustomCheckbox
                    variantLabel='caption'
                    label={'Trailing Up'}
                    classNameLabel='font-normal'
                    classNameWrapper='flex-row items-center text-[#212121] font-normal gap-[4px]'
                />
                <CustomCheckbox
                    variantLabel='caption'
                    label={'Bán tất cả LDO ở điểm dừng'}
                    classNameLabel='font-normal'
                    classNameWrapper='flex-row items-center text-[#212121] font-normal gap-[4px]'
                />
            </div>
            <SwipeableViews index={index} onChangeIndex={handleChangeIndex}>
                <TableTopRoi />
                <div className="flex flex-col gap-4">
                    {Array.from({ length: 3 }).map((_, key) => {
                        return (
                            <CardContentTopRoi
                                key={key + 'card content'}
                            />
                        );
                    })}
                </div>
            </SwipeableViews>

        </div>
    )
}
export default TopRoi


export const FilterAction = ({ value, handleChangeFilter }: { value: number, handleChangeFilter: (id: number) => void }) => {
    const DATA_FILTER = [
        {
            id: 1,
            title: "Lưới Spot"
        },
        {
            id: 2,
            title: "Lưới Hợp đồng tương lai"
        }
    ]
    return (
        <div className="flex items-center gap-1">
            {
                DATA_FILTER?.map((item) => {
                    return (
                        <div onClick={() => handleChangeFilter(item?.id)} key={item?.id}
                            className={clsx(
                                'transition-all duration-100 rounded-md py-0.5 px-1',
                                {
                                    'bg-[#F5F5F5]': item?.id === value,
                                },
                            )}
                        >
                            <Typography className="text-xs leading-5" color={item?.id === value ? '#212121' : '#757575'} fontWeight={item?.id === value ? 500 : 400}>
                                {item?.title}
                            </Typography>
                        </div>
                    )
                })
            }
        </div>
    )
}