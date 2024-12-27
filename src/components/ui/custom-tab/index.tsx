import { Tab, Tabs, Box } from "@mui/material"

const CustomTab = ({ handleChange, value, options }: any) => {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                border: '1px solid #EEEEEE',
                borderRadius: '8px',
                width: 'max-content',
                height: 'max-content',
                backgroundColor: '#fff',
                padding: '2px',
            }}
        >
            <Tabs
                value={value}
                onChange={(event, newValue) => {
                    handleChange(newValue)
                }}
                sx={{
                    '& .MuiTabs-indicator': {
                        display: 'none',
                    },
                    minHeight: 'max-content !important',
                }}
            >
                {
                    options?.map((item: any, index: number) => {
                        return (
                            <Tab
                                key={item?.key}
                                label={item?.label}
                                sx={{
                                    width: 'max-content',
                                    borderRadius: '4px',
                                    padding: '0 5px',
                                    color: '#9E9E9E',
                                    fontSize: '12px',
                                    fontWeight: 500,
                                    minHeight: '26px !important',
                                    backgroundColor: value === index ? '#E8F2FF' : 'transparent',
                                }}
                            />
                        )
                    })
                }







            </Tabs>
        </Box>
    )
}

export default CustomTab