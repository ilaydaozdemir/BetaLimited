import React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";
import { Grid } from "@mui/material";
const useStyle = {
  IconButton: {
    backgroundColor: "#C24B5A !important",

    borderRadius: "0",
    borderTopRightRadius: "20px",
    borderBottomRightRadius: "20px",
    width: "160px",
    "&:hover": {
      backgroundColor: "#C24B5A !important",
      boxShadow: "none !important",
    },
  },
};
const SearchBar = () => {
  return (
    <Grid
      container
      spacing={0}
      sx={{
        borderRadius: "20px",
        border: "1px solid #dfdfdf",
        display: "flex",
        alignItems: "center",
        width: 540,
      }}
    >
      <Grid item xs={1}>
        <IconButton
          sx={{
            p: "10px",
          }}
        >
          <SearchIcon />
        </IconButton>
      </Grid>
      <Grid item xs>
        <InputBase sx={{ flex: 1 }} placeholder="Searching for ..." />
      </Grid>

      <Grid item>
        <IconButton type="button" sx={useStyle.IconButton} aria-label="search">
          {" "}
          <span style={{ fontSize: "16px", color: "white", padding: "8px" }}>
            Search
          </span>
        </IconButton>
      </Grid>
    </Grid>
  );
};
export default SearchBar;
