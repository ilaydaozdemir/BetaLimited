import "./App.css";
import * as React from "react";

import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";

import CssBaseline from "@mui/material/CssBaseline";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";

import SearchBar from "./components/SearchBar";
import ProductList from "./components/ProductList";

function App() {
  return (
    <>
      <CssBaseline />
      <AppBar position="relative" sx={styles.AppBar}>
        <Toolbar sx={styles.Toolbar}>
          <SearchBar />
        </Toolbar>
      </AppBar>
      <main>
        <div style={{ backgroundColor: "#f6f9fc" }}>
          <ProductList />
        </div>
        <Box
          sx={{
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Stack sx={{}} direction="row" spacing={2} justifyContent="center">
              <Button variant="contained" sx={styles.Button}>
                Load More...{" "}
              </Button>
            </Stack>
          </Container>
        </Box>
      </main>
    </>
  );
}

export default App;

const styles = {
  Button: {
    backgroundColor: "#C24B5A !important",
    "&:hover": {
      backgroundColor: "#C24B5A !important",
      boxShadow: "none !important",
    },
  },
  AppBar: { boxShadow: "none !important" },

  Toolbar: {
    backgroundColor: "#ffff !important",
    justifyContent: "center",
  },
};
