import { FC } from 'react';
import { Box, Card, CardContent, CardHeader, Skeleton } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledCard = styled(Card)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  borderRadius: theme.shape.borderRadius * 2,
}));

const ActionContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(0, 2, 2),
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}));

const TagContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1),
  marginTop: theme.spacing(2),
}));

const NewsItemSkeleton = ({ animate = true }) => {
  return (
    <StyledCard>
      <CardHeader
        avatar={
          <Skeleton
            animation={animate ? 'wave' : false}
            variant='circular'
            width={40}
            height={40}
          />
        }
        title={<Skeleton animation={animate ? 'wave' : false} variant='text' width={120} />}
        subheader={<Skeleton animation={animate ? 'wave' : false} variant='text' width={160} />}
      />
      <CardContent>
        {/* Content area */}
        <Box sx={{ mb: 2 }}>
          <Skeleton
            animation={animate ? 'wave' : false}
            variant='text'
            height={20}
            sx={{ mb: 1 }}
          />
          <Skeleton
            animation={animate ? 'wave' : false}
            variant='text'
            height={20}
            sx={{ mb: 1 }}
          />
          <Skeleton animation={animate ? 'wave' : false} variant='text' height={20} width='80%' />
        </Box>
        <Skeleton
          animation={animate ? 'wave' : false}
          variant='rectangular'
          height={200}
          sx={{
            borderRadius: 1,
            mb: 2,
          }}
        />
        <TagContainer>
          {[1, 2, 3].map((i) => (
            <Skeleton
              key={i}
              animation={animate ? 'wave' : false}
              variant='rounded'
              width={60}
              height={24}
            />
          ))}
        </TagContainer>
      </CardContent>
      <ActionContainer>
        {[1, 2, 3, 4, 5].map((i) => (
          <Box key={i} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Skeleton
              animation={animate ? 'wave' : false}
              variant='circular'
              width={32}
              height={32}
            />
            <Skeleton animation={animate ? 'wave' : false} variant='text' width={24} />
          </Box>
        ))}
      </ActionContainer>
    </StyledCard>
  );
};

export default NewsItemSkeleton;
