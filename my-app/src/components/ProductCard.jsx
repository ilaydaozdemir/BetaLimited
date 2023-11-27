import React, { useContext, useEffect, useState } from "react";
import Rating from "@mui/material/Rating";
import { BsPlusSquare } from "react-icons/bs";
import { BsDashSquare } from "react-icons/bs";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/material";

import { AppContext } from "../AppContext";

const ProductCard = ({ product }) => {
  const [quantity, setQuantity] = useState(0);
  const { cartItems, addToCart, subtractFromCart } = useContext(AppContext);

  useEffect(() => {
    function isProduct(item) {
      return item.productId === product.id;
    }
    const cartItem = cartItems.find(isProduct);

    if (cartItem) {
      setQuantity(cartItem.quantity);
    }
  }, [JSON.stringify(cartItems), product]);

  const incrementProduct = async () => {
    addToCart(product.id);
  };

  const decrementProduct = async () => {
    subtractFromCart(product.id);
  };

  return (
    <div>
      <Card
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <CardMedia
          component="div"
          sx={{
            // 16:9
            pt: "90.25%",
          }}
          image={product.image}
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "16px",
              }}
            >
              <div>
                <Typography
                  sx={{
                    fontWeight: "bold",
                    color: "#6c6f79",
                  }}
                >
                  {product.name}
                </Typography>

                <div>
                  <div
                    style={{
                      display: "flex",
                      marginTop: "8px",
                      alignItems: "center",
                      color: "#a9adb5",
                    }}
                  >
                    <Stack
                      spacing={1}
                      sx={{ marginRight: "8px", color: "#6c6f79" }}
                    >
                      <Rating
                        name="simple-controlled"
                        size="small"
                        value={product.rating}
                      />
                    </Stack>
                    <div>
                      {product.rating ? <span>({product.rating})</span> : <></>}
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                  }}
                >
                  <Typography
                    className="price"
                    sx={{ color: "#ba6269", marginRight: "8px" }}
                  >
                    ${product.price}
                  </Typography>
                  <Typography
                    className="originalPrice"
                    sx={{
                      color: "#a9adb5",
                      textDecorationLine: "line-through",
                    }}
                  >
                    ${product.originalPrice}
                  </Typography>
                </div>
              </div>
              <div
                style={{
                  width: "60px",
                  display: "flex",
                  height: "80px",
                  alignItems: "center",
                  flexDirection: "column-reverse",
                }}
              >
                <div>
                  <BsPlusSquare
                    size={24}
                    color="#bb656c"
                    onClick={incrementProduct}
                  />
                </div>
                {quantity ? (
                  <div>
                    <Typography>{quantity}</Typography>
                  </div>
                ) : null}
                {quantity ? (
                  <div>
                    <BsDashSquare
                      size={24}
                      color="#bb656c"
                      onClick={decrementProduct}
                    />
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
export default ProductCard;
