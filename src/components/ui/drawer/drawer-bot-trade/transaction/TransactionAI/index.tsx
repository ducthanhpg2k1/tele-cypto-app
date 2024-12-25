import { IconButton, Typography } from "@mui/material"
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ChartCandlestick from "./ChartCandlestick";
import ListCardShortTerm from "./ListCardShortTerm";

const TransactionAI = () => {
    return (
        <div className="flex flex-col gap-4">
            <div>
                <div className="flex items-center gap-[2px] mt-1">
                    <Typography
                        variant="body1"
                        color={'#212121'}
                        fontWeight={600}
                    >
                        ADA/ BNB
                    </Typography>
                    <IconButton
                        size="small"
                    >
                        <ArrowDropDownIcon />
                    </IconButton>

                </div>
                <div className="flex items-center gap-[2px]">
                    <Typography
                        className="text-xs font-normal"
                        color={'#9E9E9E'}
                        fontWeight={600}
                    >
                        -3,8%
                    </Typography>
                    <Typography
                        className="text-xs font-normal"
                        color={'#F54336'}
                        fontWeight={600}
                    >
                        -3,8%
                    </Typography>

                </div>
            </div>
            <ChartCandlestick />
            <ListCardShortTerm />

        </div>
    )
}
export default TransactionAI