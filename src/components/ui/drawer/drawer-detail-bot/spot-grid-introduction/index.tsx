import { Typography } from "@mui/material";
import Image from "next/image";
import { useTranslation } from "react-i18next";



const SpotGridIntroduction = () => {
    const { t } = useTranslation();

    const DATA_SPOT_GRID = [
        {
            id: 1,
            tilte: t('bot.titleAutomation'),
            des: t('bot.descriptionAutomation')
        },
        {
            id: 2,
            tilte: t('bot.titleProfit'),
            des: t('bot.descriptionProfit')
        },
        {
            id: 3,
            tilte: t('bot.titleStrategy'),
            des: t('bot.descriptionStrategy')
        }
    ]

    return (
        <div className="flex flex-col gap-4">
            <Typography
                variant="body1"
                color={'#212121'}
                fontWeight={600}
            >
                {t('bot.spot_grid_introduction')}
            </Typography>
            {
                DATA_SPOT_GRID?.map((item) => {
                    return (
                        <div key={item?.id} className="flex gap-3">
                            <Image alt="" width={20} height={20} className="w-5 h-5" src={'/assets/iconly/ic-spot.svg'} />
                            <div className="flex flex-col gap-1">
                                <Typography
                                    className="text-xs"
                                    color={'#212121'}
                                    fontWeight={500}
                                >
                                    {item?.tilte}
                                </Typography>
                                <Typography
                                    className="text-xs"
                                    color={'#9E9E9E'}
                                    fontWeight={400}
                                >
                                    {item?.des}
                                </Typography>
                            </div>
                        </div>
                    )
                })
            }
            <div className="flex flex-col gap-1">
                <Typography
                    color={'#177DFF'}
                    className="text-xs"
                    fontWeight={600}
                >
                    {t('bot.title_video_tutorial')}
                </Typography>
                <Typography
                    color={'#9E9E9E'}
                    className="text-xs"
                    fontWeight={400}
                >
                    {t('bot.description_video_tutorial')}
                </Typography>
            </div>
        </div>
    )
}
export default SpotGridIntroduction