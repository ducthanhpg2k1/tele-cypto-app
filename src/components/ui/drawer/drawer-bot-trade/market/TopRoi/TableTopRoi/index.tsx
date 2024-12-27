import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { styled } from '@mui/material/styles';
import Image from 'next/image';

// Styled components
const StyledTableContainer = styled(TableContainer)({
  height: '100%',
  maxWidth: 500,
  '& .MuiTableCell-root': {
    whiteSpace: 'nowrap',
    border: 'none',
  },
});

const StyledTable = styled(Table)({
  backgroundColor: '#ffffff',
  height: '100%',
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

// const FixedHeaderTableCell = styled(TableCell)({
//   position: 'sticky',
//   left: 0,
//   backgroundColor: '#ffffff !important',
//   zIndex: 3,
//   fontSize: '10px !important',
//   color: '#757575 !important',
//   fontWeight: '400 !important',
//   padding: '8px 0 0 0 !important',
//   textTransform: 'unset !important',
// });

const TableTopRoi = () => {
  const trades = Array(15).fill({
    pair: 'BTC/USDT',
    price: '10923',
    amount: '0.000202USDT',
    volume24h: '1,234,567',
    change24h: '+2.45%',
    high24h: '11,234',
    low24h: '10,789',
    marketCap: '450B',
    roi: '5.05%',
    crossCopied: '1',
    operatingTime: '1 ngày',
  });

  return (
    <StyledTableContainer>
      <StyledTable stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell component='th' scope='row' sx={sx.tableCell}>
              Thị trường
            </TableCell>
            <TableHeaderCellCustom align='left'>PNL(USD)</TableHeaderCellCustom>
            <TableHeaderCellCustom align='left'>Mức đầu tư tối thiểu</TableHeaderCellCustom>
            <TableHeaderCellCustom align='left'>Thời gian hoạt động</TableHeaderCellCustom>
            <TableHeaderCellCustom align='left'>ROI</TableHeaderCellCustom>
            <TableHeaderCellCustom align='left'>Đã sao chép</TableHeaderCellCustom>
          </TableRow>
        </TableHead>
        <TableBody>
          {trades.map((trade, index) => (
            <TableRow key={index} hover sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <FixedTableCell component='th' scope='row'>
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
                    {index < 3 ? (
                      <Image
                        alt=''
                        width={24}
                        height={24}
                        src={`/images/img-rank${index + 1}.png`}
                      />
                    ) : (
                      '#4'
                    )}
                  </div>
                  {trade.pair}
                </div>
              </FixedTableCell>
              <TableBodyCell align='left'>{trade.price}</TableBodyCell>
              <TableBodyCell align='left'>{trade.amount}</TableBodyCell>
              <TableBodyCell align='left'>{trade.operatingTime}</TableBodyCell>
              <TableBodyCell
                align='left'
                sx={{
                  color: '#4AAF57 !important',
                }}
              >
                {trade.roi}
              </TableBodyCell>
              <TableBodyCell align='left'>{trade.crossCopied}</TableBodyCell>
            </TableRow>
          ))}
        </TableBody>
      </StyledTable>
    </StyledTableContainer>
  );
};

const sx = {
  tableCell: {
    position: 'sticky',
    left: 0,
    backgroundColor: '#ffffff !important',
    zIndex: 3,
    fontSize: '10px !important',
    color: '#757575 !important',
    fontWeight: '400 !important',
    padding: '8px 0 0 0 !important',
    textTransform: 'unset !important',
  },
};

export default TableTopRoi;
