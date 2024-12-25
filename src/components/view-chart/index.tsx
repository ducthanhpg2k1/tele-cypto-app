import { Box, Divider, Tab, Tabs } from "@mui/material"
import React from "react";
import ChartLine from "./chart-line";
import ChartPie from "./chart-pie";
import { useTranslation } from "react-i18next";

const enum TYPE_TAB {
    CHART_LINE = 0,
    CHART_PIE = 1,
}

const ViewChart = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    return (
        <div className="flex flex-col pb-4">
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    border: "1px solid #EEEEEE",
                    borderRadius: "8px",
                    width: "max-content",
                    height: 'max-content',
                    backgroundColor: "#fff",
                    padding: "2px",
                }}
            >
                <Tabs
                    value={value}
                    onChange={handleChange}
                    sx={{
                        "& .MuiTabs-indicator": {
                            display: "none",
                        },
                        minHeight: 'max-content !important',
                    }}
                >
                    <Tab
                        icon={<IconChartLine isActive={value === TYPE_TAB.CHART_LINE} />}
                        sx={{
                            borderRadius: "4px",
                            padding: "0 5px",
                            minHeight: '24px !important',
                            backgroundColor: value === TYPE_TAB.CHART_LINE ? "#E8F2FF" : "transparent",
                        }}
                    />
                    <Tab
                        icon={<IconChartPie isActive={value === TYPE_TAB.CHART_PIE} />}
                        sx={{
                            borderRadius: "4px",
                            padding: "0 5px",
                            minHeight: '24px !important',
                            backgroundColor: value === TYPE_TAB.CHART_PIE ? "#e3f2fd" : "transparent",
                        }}
                    />
                </Tabs>
            </Box>
            {
                value === TYPE_TAB.CHART_LINE && (
                    <ChartLine />
                )
            }

            {
                value === TYPE_TAB.CHART_PIE && (

                    <ChartPie />

                )
            }
            <Divider variant="fullWidth" sx={{ mt: 3 }} />
        </div>
    )

}
export default ViewChart

const IconChartLine = ({ isActive }: { isActive: boolean }) => {
    return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M1.25 0.5C1.66421 0.5 2 0.835786 2 1.25V11.15C2 11.7924 2.00058 12.2292 2.02816 12.5667C2.05503 12.8955 2.10372 13.0637 2.16349 13.181C2.3073 13.4632 2.53677 13.6927 2.81902 13.8365C2.93631 13.8963 3.10447 13.945 3.43328 13.9718C3.77085 13.9994 4.20757 14 4.85 14H14.75C15.1642 14 15.5 14.3358 15.5 14.75C15.5 15.1642 15.1642 15.5 14.75 15.5H4.81901C4.21529 15.5 3.71702 15.5 3.31113 15.4669C2.88956 15.4324 2.50203 15.3585 2.13803 15.173C1.57354 14.8854 1.1146 14.4265 0.826981 13.862C0.641513 13.498 0.56759 13.1104 0.533146 12.6889C0.499983 12.283 0.499991 11.7847 0.5 11.181L0.500001 1.25C0.500001 0.835786 0.835787 0.5 1.25 0.5ZM7.24754 3.93265C7.56171 3.8254 7.90258 3.8254 8.21674 3.93265C8.44501 4.01057 8.61685 4.14309 8.75035 4.26463C8.87277 4.37609 9.00606 4.51967 9.14403 4.66828L10.371 5.98966C10.4474 6.07186 10.4908 6.11815 10.5179 6.14478C10.545 6.11815 10.5884 6.07186 10.6647 5.98966C10.6744 5.97925 10.6843 5.96854 10.6944 5.9576C10.7964 5.84714 10.9206 5.7127 11.0604 5.61649C11.5725 5.26411 12.2489 5.26412 12.761 5.61649C12.9008 5.7127 13.025 5.84714 13.1271 5.9576C13.1372 5.96854 13.1471 5.97925 13.1567 5.98966L14.2289 7.14435C14.237 7.15299 14.2452 7.16184 14.2537 7.17091C14.3461 7.26987 14.4624 7.39449 14.5488 7.54417C14.6238 7.67402 14.679 7.81437 14.7124 7.96057C14.7508 8.1291 14.7504 8.29956 14.7501 8.43491C14.75 8.44732 14.75 8.45944 14.75 8.47123L14.75 10.5739C14.75 10.7632 14.75 10.9476 14.7373 11.1037C14.7233 11.2751 14.6902 11.4774 14.5865 11.681C14.4427 11.9632 14.2132 12.1927 13.931 12.3365C13.7274 12.4402 13.5251 12.4733 13.3537 12.4873C13.1975 12.5 13.0132 12.5 12.8239 12.5H5.42609C5.2368 12.5 5.05245 12.5 4.89633 12.4873C4.72488 12.4733 4.52258 12.4402 4.31901 12.3365C4.03677 12.1927 3.8073 11.9632 3.66349 11.681C3.55977 11.4774 3.52672 11.2751 3.51271 11.1037C3.49995 10.9476 3.49998 10.7632 3.5 10.5739L3.5 8.47123C3.5 8.45944 3.49997 8.44733 3.49994 8.43492C3.49959 8.29956 3.49916 8.1291 3.53765 7.96057C3.57103 7.81438 3.62615 7.67402 3.70116 7.54417C3.78764 7.39449 3.90394 7.26987 3.9963 7.17091C4.00477 7.16184 4.01303 7.15299 4.02105 7.14435L6.32026 4.66828C6.45822 4.51967 6.59152 4.37609 6.71394 4.26463C6.84743 4.14309 7.01927 4.01057 7.24754 3.93265Z" fill={isActive ? "#177DFF" : "#BDBDBD"} />
        </svg>

    )
}

const IconChartPie = ({ isActive }: { isActive: boolean }) => {
    return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.25 0.537109C3.46001 0.913403 0.5 4.11107 0.5 8.00008C0.5 9.80103 1.13477 11.4537 2.19279 12.7466L5.14252 9.7969C4.81467 9.27661 4.625 8.66052 4.625 8.00012C4.625 6.39393 5.74701 5.0498 7.25 4.70875V0.537109ZM11.2914 7.25008C11.005 5.98832 10.0118 4.99506 8.75 4.70875V0.537109C12.2933 0.888911 15.1112 3.70677 15.463 7.25008H11.2914ZM6.20317 10.8576C6.72347 11.1854 7.33958 11.3751 8 11.3751C9.60621 11.3751 10.9503 10.2531 11.2914 8.75008H15.463C15.0867 12.5401 11.889 15.5001 8 15.5001C6.19905 15.5001 4.54635 14.8653 3.25345 13.8073L6.20317 10.8576Z" fill={isActive ? "#177DFF" : "#BDBDBD"} />
        </svg>

    )
}