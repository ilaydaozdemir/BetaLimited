import "./App.css";
import * as React from "react";

import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";

import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import ProductCard from "./components/ProductCard";
import SearchBar from "./components/SearchBar";

const cards = [1, 2, 3];

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();
const useStyle = {
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
function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <AppBar position="relative" sx={useStyle.AppBar}>
        <Toolbar sx={useStyle.Toolbar}>
          <SearchBar />
        </Toolbar>
      </AppBar>
      <main>
        <div style={{ backgroundColor: "#f6f9fc" }}>
          <Container sx={{ py: 8 }} maxWidth="md">
            {/* End hero unit */}
            <Grid container spacing={4}>
              {cards.map((card) => (
                <Grid item key={card} xs={12} sm={6} md={4}>
                  <ProductCard />
                </Grid>
              ))}
            </Grid>
          </Container>
        </div>
        <Box
          sx={{
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Stack sx={{}} direction="row" spacing={2} justifyContent="center">
              <Button variant="contained" sx={useStyle.Button}>
                Load More...{" "}
              </Button>
            </Stack>
          </Container>
        </Box>
      </main>
    </ThemeProvider>
  );
}

export default App;
