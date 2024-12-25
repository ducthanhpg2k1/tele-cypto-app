import { Grid, Typography } from '@mui/material';

const ListTransactions = ({
  data,
  background,
  colorText,
}: {
  data: { value: string; price: string }[];
  background: string;
  colorText: string;
}) => {
  return (
    <>
      {data.map((item, key) => {
        return (
          <Grid
            key={'down' + key}
            container
            style={{ background }}
          >
            <Grid
              item
              xs={6}
            >
              <Typography
                variant="caption"
                color={colorText}
                className="font-normal"
              >
                {item.price}
              </Typography>
            </Grid>
            <Grid
              item
              xs={6}
              className="text-right"
            >
              <Typography
                variant="caption"
                color={'textSecondary'}
                className="font-normal"
              >
                {item.value}
              </Typography>
            </Grid>
          </Grid>
        );
      })}
    </>
  );
};

export default ListTransactions;
