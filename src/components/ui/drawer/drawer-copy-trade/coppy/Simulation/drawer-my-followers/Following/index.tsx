import { Typography } from "@mui/material"
import Image from "next/image"
import { useTranslation } from "react-i18next"
import Button from "src/components/ui/button"

const DATA_FOLLOWING = [{
    id: 1,
    name: 'Master Chef',
    username: '@abcbaby'
},
{
    id: 2,
    name: 'Master Chef',
    username: '@abcbaby'
},
{
    id: 3,
    name: 'Master Chef',
    username: '@abcbaby'
},
{
    id: 4,
    name: 'Master Chef',
    username: '@abcbaby'
},
{
    id: 5,
    name: 'Master Chef',
    username: '@abcbaby'
},
{
    id: 6,
    name: 'Master Chef',
    username: '@abcbaby'
}
]
const Following = () => {
  const { t } = useTranslation()

    return (
        <div className="flex flex-col gap-6 mt-6">
            {DATA_FOLLOWING?.map((item) => {
                return (
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-3">
                            <Image alt='' width={40} height={40} className='rounded-lg' src={'/images/img-avatar.png'} />
                            <div className="flex flex-col gap-0.5">
                                <Typography
                                    color={'#212121'}
                                    className="text-xs"
                                    fontWeight={600}
                                >
                                    {item?.name}
                                </Typography>
                                <Typography
                                    color={'#757575'}
                                    className="text-[10px] leading-3"
                                    fontWeight={400}
                                >
                                    {item?.username}
                                </Typography>
                            </div>
                        </div>
                        <Button

                            className='max-h-7 flex justify-center items-center font-semibold'
                        >
                            <Typography className='text-[14px]'>{t('copyTrade.monitor')}</Typography>
                        </Button>
                    </div>
                )
            })}
        </div>
    )
}
export default Following