import React, { useState } from "react";

//@ts-ignore
import DatePicker from "react-mobile-datepicker";

const CustomPickerWheel = ({ value, handleDateChange }: { value: any, handleDateChange: any }) => {



    const monthMap: any = {
        "1": "Tháng 1",
        "2": "Tháng 2",
        "3": "Tháng 3",
        "4": "Tháng 4",
        "5": "Tháng 5",
        "6": "Tháng 6",
        "7": "Tháng 7",
        "8": "Tháng 8",
        "9": "Tháng 9",
        "10": "Tháng 10",
        "11": "Tháng 11",
        "12": "Tháng 12"
    };

    const dateConfig = {
        date: {
            format: "DD",
            caption: "Day",
            step: 1
        },
        month: {
            format: (value: any) => monthMap[value.getMonth() + 1],
            caption: "Mon",
            step: 1
        },
        year: {
            format: "YYYY",
            caption: "Year",
            step: 1
        }


    };

    return (
        <>

            <DatePicker
                theme="ios"
                isPopup={false}
                value={value}
                showHeader={false}
                dateFormat={["DD", "MM", "YYYY"]}
                dateConfig={dateConfig}
                onChange={handleDateChange}
            // dateFormat={[`${testMonth}/DD`, "MM", "mm"]}
            />

        </>
    );
};
export default CustomPickerWheel;
