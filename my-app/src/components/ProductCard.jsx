import React, { useState } from "react";
import Rating from "@mui/material/Rating";
import { BsPlusSquare } from "react-icons/bs";
import { BsDashSquare } from "react-icons/bs";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/material";
const ProductCard = () => {
  const [value, setValue] = useState("");

  const incrementProduct = () => {};

  const decrementProduct = () => {};
  return (
    <div>
      {" "}
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
          image="https://source.unsplash.com/random?wallpapers"
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
                  Offer fruits
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
                        value={value}
                        onChange={(event, newValue) => {
                          setValue(newValue);
                        }}
                      />
                    </Stack>
                    <div> {value ? <span>({value})</span> : <></>}</div>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                  }}
                >
                  <Typography sx={{ color: "#ba6269", marginRight: "8px" }}>
                    1223
                  </Typography>
                  <Typography
                    sx={{
                      color: "#a9adb5",
                      textDecorationLine: "line-through",
                    }}
                  >
                    1223
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
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
export default ProductCard;
