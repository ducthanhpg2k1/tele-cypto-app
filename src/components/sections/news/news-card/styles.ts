import { styled } from '@mui/material/styles';
import { Box, Card } from '@mui/material';
import Chip from '@mui/material/Chip';
import CardActions from '@mui/material/CardActions';

export const StyledCard = styled('div')(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

export const TagsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1),
  flexWrap: 'wrap',
  marginTop: theme.spacing(1),
}));

export const StyledChip = styled(Chip)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  backgroundColor:
    theme.palette.mode === 'dark' ? theme.palette.grey[800] : theme.palette.grey[200],
}));

export const StatsContainer = styled(CardActions)(({ theme }) => ({
  justifyContent: 'space-between',
  borderBottom: `1px solid ${theme.palette.divider}`,
  padding: 0,
  paddingBottom: 24,
}));

export const StatItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(0.5),
  color: theme.palette.text.secondary,
  '& .MuiSvgIcon-root': {
    fontSize: '1.25rem',
  },
}));

export const MarkdownContent = styled(Box)(({ theme }) => ({
  '& > *:first-child': {
    marginTop: 0,
  },
  '& > *:last-child': {
    marginBottom: 0,
  },
  '& a': {
    color: theme.palette.primary.main,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  '& p': {
    margin: theme.spacing(1, 0),
  },
}));
