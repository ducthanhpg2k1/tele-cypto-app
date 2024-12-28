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
    padding: '8px 24px 8px 0 !important',
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


const TableVolatility = () => {
    const trades = Array(15).fill({
        pair: 'BTC/USDT',
        price: '10923',
        amount: '0.000202USDT',
        volume24h: '1,234,567',
        change24h: '+8,31%',
        high24h: '11,234',
        low24h: '10,789',
        marketCap: '450B',
        roi: '5.05%',
        crossCopied: '1',
        operatingTime: '1 ngày'
    });

    return (
        <StyledTableContainer>
            <StyledTable stickyHeader>
                <TableHead>
                    <TableRow>
                        <FixedHeaderTableCell  className='normal-case'>Thị trường</FixedHeaderTableCell>
                        <TableHeaderCellCustom  className='normal-case' align="left">Biến động</TableHeaderCellCustom>
                        <TableHeaderCellCustom   className='normal-case' align="left">Giá gần nhất</TableHeaderCellCustom>
                        <TableHeaderCellCustom  className='normal-case' align="left">24H %</TableHeaderCellCustom>
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
                            <TableBodyCell align="left">{trade.price}</TableBodyCell>
                            <TableBodyCell align="left">{trade.amount}</TableBodyCell>
                            <TableBodyCell align="left" sx={{
                                color: '#4AAF57 !important'
                            }}>
                                {trade.change24h}
                            </TableBodyCell>

                        </TableRow>
                    ))}
                </TableBody>
            </StyledTable>
        </StyledTableContainer>
    );
};

export default TableVolatility;