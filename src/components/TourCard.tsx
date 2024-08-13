import { FC } from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import AccessTime from "@mui/icons-material/AccessTime";
import Rating from "@mui/material/Rating";
import { createTheme, ThemeProvider } from "@mui/material";
import { Link } from "react-router-dom";

const theme = createTheme({
  components: {
    MuiTypography: {
      variants: [
        {
          props: {
            variant: "body2",
          },
          style: {
            fontSize: 11,
          },
        },
        {
          props: {
            variant: "body3",
          },
          style: {
            fontSize: 9,
          },
        },
      ],
    },
  },
});

const TourCard: FC<{ tour: Tour }> = ({ tour }) => {
  return (
    <Grid item xs={3}>
      <Link
        to={`/${tour.id}`}
        style={{
          textDecoration: "none",

          width: "25%",
        }}
      >
        <ThemeProvider theme={theme}>
          <Paper elevation={3}>
            <img src={tour.image} alt={tour.name} className="img" />
            <Box paddingX={1}>
              <Typography variant="subtitle1" component="h2">
                {tour.name}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <AccessTime
                  sx={{
                    width: 12.5,
                  }}
                />
                <Typography variant="body2" component="p" marginLeft={0.5}>
                  {tour.duration} Hours
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
                marginTop={3}
              >
                <Rating
                  name="read-only"
                  readOnly
                  value={4.5}
                  precision={0.25}
                  size="small"
                />
                <Typography variant="body2" component="p" marginLeft={0.5}>
                  {tour.rating}
                </Typography>

                <Typography variant="body3" component="p" marginLeft={1.5}>
                  ({tour.numberOfReviews} reviews)
                </Typography>
              </Box>

              <Box>
                <Typography variant="h6" component="h3" marginTop={0}>
                  From $ {tour.price}
                </Typography>
              </Box>
            </Box>
          </Paper>
        </ThemeProvider>
      </Link>
    </Grid>
  );
};

export default TourCard;
