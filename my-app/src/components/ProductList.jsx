import React, { useContext } from "react";
import { AppContext } from "../AppContext";
import { Container, Grid } from "@mui/material";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const { products } = useContext(AppContext);

  return (
    <Container sx={{ py: 8 }} maxWidth="md">
      <Grid container spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ProductList;
