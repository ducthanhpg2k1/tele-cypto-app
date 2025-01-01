import React, { useState } from "react";
import DatePicker from "react-mobile-datepicker";

const CustomPickerWheel = () => {
    const [time, setTime] = useState(new Date());
    const [isOpen, setIsOpen] = useState(false);

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

    //   const handleCancel = () => {
    //     setIsOpen(false);
    //   };

    //   const handleSelect = (time: Date) => {
    //     setTime(time);
    //     setIsOpen(false);
    //     console.log(time);
    //   };


    return (
        <>

            <DatePicker
                value={time}
                isOpen={isOpen}
                theme="ios"
                isPopup={false}
                showHeader={false}
                dateFormat={["DD", "MM", "YYYY"]}
                dateConfig={dateConfig}
            // dateFormat={[`${testMonth}/DD`, "MM", "mm"]}
            />
            {/* <div className='absolute bottom-0 w-full h-[50px] bg-gradient-to-t from-white to-transparent pointer-events-none z-10'></div> */}

        </>
    );
};
export default CustomPickerWheel;
