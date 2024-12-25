import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import MinimaLayout from "src/layouts/MinimaLayout";
import ArrowIcon from "src/assets/icons/ArrowIcon";
import SwitchVertical from "src/assets/icons/SwitchVertical";
import CoinIcon from "src/assets/icons/CoinIcon";

// Styled Components
const Container = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
  padding: theme.spacing(2),
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
}));

const SectionWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.grey[100],
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(1.5),
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1.5),
  justifyContent: 'space-between',
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
  '& svg': {
    fontSize: theme.typography.pxToRem(16),
    color: theme.palette.text.secondary,
  },
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  backgroundColor: theme.palette.grey[100],
  borderRadius: theme.shape.borderRadius,
  fontSize: theme.typography.pxToRem(14),
  '& input': {
    padding: '4px 12px',
    height: '40px',
  },
}));

const StyledButton = styled(Box)(({ theme }) => ({
  position: 'absolute',
  right: theme.spacing(1.5),
  display: 'flex',
  alignItems: 'center',
}));

const Label = styled(Typography)(({ theme }) => ({
  fontSize: '12px',
  color: theme.palette.text.secondary,
  fontWeight: 400,
  lineHeight: '20px',
  width: '32px',
}));

const Value = styled(Typography)(({ theme }) => ({
  fontSize: '14px',
  color: theme.palette.text.primary,
  fontWeight: 600,
  lineHeight: '21px',
}));

// Reusable Components
interface InfoSectionProps {
  label: string;
  value: string;
  order?: string | number;
}

const InfoSection: React.FC<InfoSectionProps> = ({ label, value, order = 'unset' }) => (
  <Box
    display="flex"
    justifyContent="space-between"
    alignItems="center"
    gap={2}
    order={order}
  >
    <Box
      display="flex"
      alignItems="center"
      gap={1}
    >
      <Label>{label}</Label>
      <Value>{value}</Value>
    </Box>
    <IconWrapper>
      <ArrowIcon
        width={16}
        height={16}
        fill="#9E9E9E"
        isFilled={false}
        transform={90}
      />
    </IconWrapper>
  </Box>
);

const CoinInfo: React.FC = () => (
  <SectionWrapper>
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: '4px',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
        }}
      >
        <CoinIcon />
        <Typography
          fontWeight="bold"
          fontSize={14}
          sx={{
            fontSize: '14px',
            fontWeight: 500,
            lineHeight: '21px',
            color: 'text.primary',
          }}
        >
          USDT
        </Typography>
      </Box>
      <Typography
        sx={{
          fontSize: '12px',
          fontWeight: 400,
          lineHeight: '20px',
          color: 'text.secondary',
        }}
      >
        USDT
      </Typography>
    </Box>
    <IconWrapper>
      <ArrowIcon
        width={20}
        height={20}
        fill="#212121"
        isFilled={false}
      />
    </IconWrapper>
  </SectionWrapper>
);

const TransferPage = () => {
  const [switchTransfer, setSwitchTransfer] = useState<number>(0);

  return (
    <Container>
      {/* From/To Section */}
      <SectionWrapper>
        <Box
          display="flex"
          flexDirection="column"
          gap={1.5}
          flexGrow={1}
        >
          <InfoSection
            label="Từ"
            value="Funding"
            order={switchTransfer}
          />
          <InfoSection
            label="Đến"
            value="Ví giao ngay"
          />
        </Box>
        <SwitchVertical handleClick={() => setSwitchTransfer(!!switchTransfer ? 0 : 1)} />
      </SectionWrapper>

      {/* Coin Section */}
      <Box>
        <Typography
          variant="caption"
          color="text.secondary"
          gutterBottom
        >
          Coin
        </Typography>
        <CoinInfo />
        <Typography
          color="error"
          variant="caption"
          mt={1}
        >
          Không có sẵn tiền để chuyển, vui lòng chọn đồng coin khác
        </Typography>
      </Box>

      {/* Amount Section */}
      <Box>
        <Typography
          variant="caption"
          color="text.secondary"
        >
          Số lượng
        </Typography>
        <Box
          position="relative"
          display="flex"
          alignItems="center"
          mt={1}
        >
          <StyledTextField
            fullWidth
            type="number"
            placeholder="0"
          />

          <StyledButton>
            <Box
              display="flex"
              alignItems="center"
              gap={1}
            >
              {/* USDT Text */}
              <Typography
                fontWeight="600"
                fontSize="14px"
                lineHeight="21px"
                color="text.primary"
              >
                USDT
              </Typography>

              {/* MAX Button */}
              <Button
                sx={{
                  fontWeight: '600',
                  fontSize: '14px',
                  lineHeight: '21px',
                  textTransform: 'uppercase',
                  color: '#007bff',
                  padding: 0,
                  minWidth: 'unset',
                  '&:hover': {
                    background: 'transparent',
                  },
                }}
              >
                Tối đa
              </Button>
            </Box>
          </StyledButton>
        </Box>
        <Typography
          variant="caption"
          color="text.secondary"
          mt={1}
        >
          Khả dụng 0 USDT
        </Typography>
      </Box>
    </Container>
  );
};

TransferPage.getLayout = (page: React.ReactElement) => (
  <MinimaLayout title="Transfer">{page}</MinimaLayout>
);

export default TransferPage;
