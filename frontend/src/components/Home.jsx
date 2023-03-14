import React, { useState } from "react";
import Box from "@mui/material/Box";
import Sidebar from "../components/Sidebar";
import { Typography, Grid, Button } from "@mui/material";
import SearchBar from "./SearchBar";
import BasicCard from "./BasicCard";
import DownloadIcon from "@mui/icons-material/Download";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const Home = () => {
  const [open, setOpen] = useState(false);

  const getSearchBar = () => {
    const handelchange = (value) => {
      console.log(value);
    };

    return (
      <Grid container>
        <Grid item>
          <SearchBar
            placeholder="Search"
            onchange={(event) => handelchange(event.target.value)}
          />
        </Grid>
        <Grid item>
          <Button variant="outlined" onClick={() => setOpen(!open)}>
            Column
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </Button>
          <Button variant="outlined" startIcon={<DownloadIcon />}>
            Export
          </Button>
        </Grid>
      </Grid>
    );
  };
  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        <Grid item xs={8}>
          <BasicCard header={getSearchBar()} />
        </Grid>
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
          dolor purus non enim praesent elementum facilisis leo vel. Risus at
          ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum
          quisque non tellus. Convallis convallis tellus id interdum velit
          laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed
          adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies
          integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate
          eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo
          quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat
          vivamus at augue. At augue eget arcu dictum varius duis at consectetur
          lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien
          faucibus et molestie ac.
        </Typography>
      </Box>
    </Box>
  );
};

export default Home;
