import { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { Stack } from "@mui/material";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

import ProductInfo from "./ProductInfo";

export default function Product({ title, desc, img, price, rating }) {
  const [state, setState] = useState({
    bottom: false,
  });

  const handleClick = (anchor, open) => {
    setState({ ...state, [anchor]: open });
  };

  return (
    <>
      <Card
        sx={{ maxWidth: 345, mt: 5 }}
        onClick={() => handleClick("bottom", true)}
      >
        <img src={img} alt={"..."} width={"90%"} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{textAlign: "justify"}}>
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{textAlign: "justify"}}>
            {desc}
          </Typography>
        </CardContent>
        <Stack
          direction={"row"}
          alignItems="center"
          justifyContent="space-between"
        >
          <div style={{ display: "flex", marginLeft: 5 }}>
            <AttachMoneyIcon />
            <Typography fontSize={30}>{price}</Typography>
          </div>

          <Button size="large" sx={{ fontSize: 20 }}>
            Add to cart <AddShoppingCartIcon sx={{ml:1}}/>
          </Button>
        </Stack>
      </Card>

      <ProductInfo
        open={state["bottom"]}
        onClose={handleClick}
        img={img}
        desc={desc}
        title={title}
        price={price}
        rating={rating}
      />
    </>
  );
}
