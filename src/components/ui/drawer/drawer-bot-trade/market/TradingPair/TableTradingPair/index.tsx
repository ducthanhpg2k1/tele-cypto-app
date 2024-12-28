import React from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import Image from 'next/image';

// Styled components
const StyledTableContainer = styled(TableContainer)({
    maxWidth: 500,
    '& .MuiTableCell-root': {
        whiteSpace: 'nowrap',
        border: 'none',
    },
});

const StyledTable = styled(Table)({
    backgroundColor: '#ffffff',
});

const FixedTableCell = styled(TableCell)({
    position: 'sticky',
    left: 0,
    backgroundColor: '#ffffff !important',
    zIndex: 1,
    fontSize: '14px !important',
    color: '#212121 !important',
    fontWeight: '500 !important',
    padding: '8px 16px 8px 0 !important',
});

const FixedHeaderTableCell = styled(TableCell)(({ theme }) => ({
    position: 'sticky',
    left: 0,
    backgroundColor: '#ffffff !important',
    zIndex: 3,
    fontSize: '10px !important',
    color: '#757575 !important',
    fontWeight: '400 !important',
    padding: '8px 0 0 0 !important',
}));

const TableHeaderCellCustom = styled(TableCell)({
    backgroundColor: '#ffffff !important',
    fontSize: '10px !important',
    color: '#757575 !important',
    fontWeight: '400 !important',
    paddingBottom: '8px !important',
    paddingLeft: '12px !important',
    paddingRight: '12px !important',
});
const TableBodyCell = styled(TableCell)({
    backgroundColor: '#ffffff !important',
    fontSize: '14px !important',
    color: '#212121 !important',
    fontWeight: '500 !important',
    padding: '12px !important',

});


const TableTradingPair = ({ valueFilter }: { valueFilter: number }) => {
    const trades = Array(15).fill({
        pair: 'BTC/USDT',
        crossCopied: '10923',
        long_short: '10923'
    });

    return (
        <StyledTableContainer>
            <StyledTable stickyHeader>
                <TableHead>
                    <TableRow>
                        <FixedHeaderTableCell  className='normal-case'>Thị trường</FixedHeaderTableCell>

                        <TableHeaderCellCustom  className='normal-case' align={valueFilter === 2 ? 'left' : "right"}>Đang chạy</TableHeaderCellCustom>
                        {
                            valueFilter === 2 && (

                                <TableHeaderCellCustom  className='normal-case' align="right">Tỷ lệ bình thường Long/ Short</TableHeaderCellCustom>
                            )
                        }

                    </TableRow>
                </TableHead>
                <TableBody>
                    {trades.map((trade, index) => (
                        <TableRow
                            key={index}
                            hover
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <FixedTableCell component="th" scope="row">
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <div
                                        style={{
                                            width: 24,
                                            height: 24,
                                            borderRadius: '50%',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            marginRight: 8,
                                        }}
                                    >

                                        {index < 3 ? <Image alt='' width={24} height={24} src={`/images/img-rank${index + 1}.png`} /> : '#4'}
                                    </div>
                                    {trade.pair}
                                </div>
                            </FixedTableCell>

                            <TableBodyCell align={valueFilter === 2 ? 'left' : "right"}>{trade.crossCopied}</TableBodyCell>
                            {
                                valueFilter === 2 && (
                                    <TableBodyCell align="right">{trade.long_short}</TableBodyCell>

                                )
                            }

                        </TableRow>
                    ))}
                </TableBody>
            </StyledTable>
        </StyledTableContainer>
    );
};

export default TableTradingPair;