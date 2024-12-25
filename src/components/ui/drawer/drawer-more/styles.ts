import { styled } from '@mui/material/styles';
import { Card, Box, Typography, IconButton } from '@mui/material';

interface ActionCardProps {
  isEditing: boolean;
}

export const StyledCard = styled(Card)(({ theme }) => ({
  borderRadius: '8px',
  display: 'flex',
  padding: theme.spacing(2),
  border: `1px solid ${theme.palette.divider}`,
  backgroundColor: theme.palette.background.paper,
  marginBottom: theme.spacing(4),
  overflowY: 'auto',
  justifyContent: 'space-between',
  alignItems: 'center',
}));

export const ActionsGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gap: theme.spacing(2),
}));

export const ActiveActionGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  alignItems: 'center',
  gap: '12px',
  justifyContent: 'flex-start',
  gridTemplateColumns: 'repeat(4, 1fr)',
  margin: 'auto 0',
}));

export const ActionCard = styled(Box)<ActionCardProps>(({ theme, isEditing }) => ({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  cursor: isEditing ? 'pointer' : 'default',
  gap: '10px',
  '&:hover': {
    opacity: isEditing ? 0.8 : 1,
  },
}));

export const ActionIcon = styled(Box)(({ theme }) => ({
  padding: theme.spacing(0.5),
  borderRadius: '8px',
}));

export const ActionLabel = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  color: theme.palette.text.primary,
}));

export const RemoveButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  top: '-8px',
  right: '-8px',
  backgroundColor: theme.palette.error.main,
  color: theme.palette.common.white,
  '&:hover': {
    backgroundColor: theme.palette.error.dark,
  },
  width: '12px',
  height: '12px',
  padding: 0,
}));

export const AddButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  right: '5px',
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
  width: '12px',
  height: '12px',
  padding: 0,
}));

export const DrawerHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  position: 'relative',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: theme.spacing(2),
}));

export const BackButton = styled(IconButton)(({ theme }) => ({
  marginRight: theme.spacing(1),
}));
