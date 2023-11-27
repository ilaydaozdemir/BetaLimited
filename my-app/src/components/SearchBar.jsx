import React, { useContext, useState } from "react";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { Grid } from "@mui/material";
import { AppContext } from "../AppContext";

const SearchBar = () => {
  const [name, setName] = useState("");
  const { searchProduct } = useContext(AppContext);

  const search = () => {
    searchProduct(name);
  };

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
        <InputBase
          sx={{ flex: 1 }}
          placeholder="Searching for ..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Grid>

      <Grid item>
        <IconButton
          type="button"
          sx={useStyle.IconButton}
          aria-label="search"
          onClick={search}
        >
          <span style={{ fontSize: "16px", color: "white", padding: "8px" }}>
            Search
          </span>
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default SearchBar;

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
