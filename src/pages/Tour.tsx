import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import BottomNavigation from "@mui/material/BottomNavigation";
import ImageCollage from "../components/ImageCollage";
import ControlledAccordions from "../components/Accordian";
import BasicModal from "../components/Modal";

const Tour = () => {
  return (
    <Container
      sx={{
        width: 900,
      }}
    >
      <Typography variant="h3" component="h1" marginTop={3}>
        Explore the World in Vegas
      </Typography>
      <Box marginTop={3} sx={{ display: "flex" }}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Welcome_to_Fabulous_Las_Vegas.jpg/788px-Welcome_to_Fabulous_Las_Vegas.jpg"
          alt=""
          height={325}
          width={550}
        />
        <ImageCollage />
      </Box>
      <Box>
        <Typography variant="h6" component="h4" marginTop={3}>
          About this ticket
        </Typography>
        <Typography variant="subtitle1" component="p" marginY={3}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis
          vestibulum augue. Suspendisse mattis euismod arcu in hendrerit.
          Aliquam erat volutpat. Sed libero magna, scelerisque nec congue ut,
          volutpat at turpis. Etiam iaculis vel neque vitae commodo. Vestibulum
          ullamcorper, quam.
        </Typography>
      </Box>
      <Box marginBottom={1}>
        <Typography variant="h6" component="h4" marginTop={3} marginBottom={2}>
          Frequently asked questions
        </Typography>
        <ControlledAccordions />
      </Box>
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation>
          <BasicModal />
        </BottomNavigation>
      </Paper>
    </Container>
  );
};

export default Tour;
