import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../AppContext";
import { Container, Grid, Typography } from "@mui/material";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const { products, searchResults } = useContext(AppContext);
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (searchResults) setItems(searchResults);
    else setItems(products);
  }, [products, JSON.stringify(searchResults)]);

  if (items && items.length) {
    return (
      <Container sx={{ py: 8 }} maxWidth="md">
        <Grid container spacing={4}>
          {items.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      </Container>
    );
  } else {
    return (
      <Container sx={{ py: 8 }} maxWidth="md">
        <Typography>Product not found!</Typography>
      </Container>
    );
  }
};

export default ProductList;
