import * as React from 'react';
import { styled } from '@mui/material/styles';
import { TransactionCardProps } from './type';

const TransactionCard = ({ icon, title, description, subDesc, onClick }: TransactionCardProps) => {
  return (
    <CardWrapper onClick={onClick}>
      {icon}
      <ContentWrapper>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <CardDescription>{subDesc}</CardDescription>
      </ContentWrapper>
    </CardWrapper>
  );
};

export default TransactionCard;

const CardWrapper = styled('div')(({ theme }) => ({
  alignItems: 'center',
  borderRadius: 8,
  border: `1px solid ${theme.palette.grey[200]}`,
  display: 'flex',
  width: '100%',
  gap: 12,
  justifyContent: 'flex-start',
  padding: 12,
  marginTop: 12,
  '&:first-of-type': {
    marginTop: 0,
  },
}));

const ContentWrapper = styled('div')({
  alignSelf: 'stretch',
  display: 'flex',
  minWidth: 240,
  flexDirection: 'column',
  justifyContent: 'flex-start',
  flex: '1 1 0%',
  margin: 'auto 0',
});

const CardTitle = styled('div')(({ theme }) => ({
  color: theme.palette.grey[900],
  fontSize: 14,
  fontWeight: 600,
}));

const CardDescription = styled('div')(({ theme }) => ({
  color: theme.palette.grey[500],
  fontSize: 12,
  fontWeight: 400,
  lineHeight: '20px',
  marginTop: 4,
}));
