import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import Button from 'src/components/ui/button';
import IconGroupUser from 'src/assets/icons/IconGroupUser';
import styled from '@emotion/styled';

export const TypographyRegular = styled(Typography)(({ theme }) => ({
    fontSize: '10px',
    lineHeight: '12.1px',
    fontWeight: 400,
    color: '#9E9E9E',
    letterSpacing: 0.2,
}));

const CardContentPublic = ({ onClick, type }: { onClick?: VoidFunction, type?: string }) => {
    const { t } = useTranslation();
    return (
        <div onClick={onClick}>
            <Box
                sx={{
                    padding: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2,
                    border: '1px solid #EEEEEE',
                    borderRadius: '12px',
                }}
            >
                <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-3'>
                        <Image alt='' width={36} height={36} className='rounded-lg' src={'/images/img-avatar.png'} />
                        <div className='flex flex-col gap-[2px]'>
                            <Typography variant='body2' color={'#212121'} fontWeight={600}>
                                Master Chef
                            </Typography>
                            <div className='flex items-center gap-0.5'>
                                <Image alt='' width={16} height={16} src={'/assets/iconly/ic-users.svg'} />
                                <Typography className='text-[10px] leading-3' color={'#177DFF'} fontWeight={400}>
                                    25/100
                                </Typography>
                            </div>
                        </div>

                    </div>

                    <div className='flex flex-col items-end gap-[6px]'>
                        <TypographyRegular className='text-[10px] leading-3' color={'#757575'}>ROI trong 90 ngày</TypographyRegular>
                        <div className='flex items-center w-max justify-center bg-[#06C14914] py-[2px] px-0.5'>
                            <TypographyRegular className='text-[10px] leading-3 text-[#4AAF57] rounded'>+6,83%</TypographyRegular>
                        </div>
                    </div>
                </div>
                <div className='flex justify-between items-center'>
                    <div>
                        <Typography variant='caption' color={'#757575'} fontWeight={400}>
                            PNL (USD)
                        </Typography>
                        <Typography variant='body1' color={'#4AAF57'} fontWeight={600}>
                            + 7,572,8
                        </Typography>
                    </div>
                    <img src={'/images/img-chart-line.png'} width={110} height={76} alt='chart' />
                </div>
                <div className='flex items-center justify-between'>
                    <Information label={'ANUM'} value='333,593' />
                    <Information label={'MMD trong 7 ngày'} value='1,42%' />
                    <Information label={'Hệ số Shape'} value='21,32' />
                </div>
                {
                    type === 'deliveredImmediately' ? (
                        <div className='flex items-center gap-3'>
                            <Button
                                fullWidth
                                variant='blue'
                                className='h-9 font-semibold'
                            >
                                <Typography className='text-[14px]'>Mô phỏng</Typography>
                            </Button>
                            <Button
                                fullWidth
                                variant='pink'
                                className='h-9 font-semibold'
                            >
                                <Typography className='text-[14px]'>Đầy</Typography>
                            </Button>

                        </div>
                    ) : (
                        <div className='flex items-center gap-3'>
                            <Button
                                fullWidth
                                variant='blue'
                                className='h-9 font-semibold'
                            >
                                <Typography className='text-[14px]'>Đặt lại</Typography>
                            </Button>
                            <Button
                                fullWidth
                                className='h-9 font-semibold'
                            >
                                <Typography className='text-[14px]'>Xác nhận</Typography>
                            </Button>

                        </div>
                    )
                }

            </Box>
        </div>
    );
};
export default CardContentPublic;

const Information = ({ label, value }: { label: string; value: string }) => {
    return (
        <div className='flex flex-col gap-[2px]'>
            <TypographyRegular className='underline' style={{ color: '#757575' }}>{label}</TypographyRegular>
            <Typography className='text-end' variant='caption' color={'#212121'}>
                {value}
            </Typography>
        </div>
    );
};
