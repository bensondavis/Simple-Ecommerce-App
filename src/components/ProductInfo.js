import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import { Stack } from '@mui/material';
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import Button from "@mui/material/Button";
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

export default function ProductInfo({open, img, desc, onClose, title, price, rating}) {

  const handleClose = ()=> {
    onClose("bottom", false);
  }

  const list = () => (
    <Box
      sx={{ width: 'auto',p:3 }}
      role="presentation"
      // onClick={handleClose}
      // onKeyDown={handleClose}
    >
      <div style={{float: "right"}} >
        <IconButton size="large" onClick={handleClose}>
        <CloseIcon/>
        </IconButton>
        
      </div>
      <br/>
      <img src={img} alt={"..."} width={"90%"} />
      <Typography gutterBottom variant="h5" component="div">{title}</Typography>
      <Typography>{desc}</Typography>
      <Divider />
      <br/>
      <Rating name="read-only" value={rating} readOnly size="large" sx={{float: "right" }} precision={0.5} />
      <br/> 
      <br/>     
          <Stack
            direction={"row"}
            alignItems="center"
            justifyContent="space-between"
            sx={{ width: "100%" }}
          >
            <div style={{ display: "flex", marginLeft: 5 }}>
              <AttachMoneyIcon />
              <Typography fontSize={30}>{price}</Typography>
            </div>

            <Button variant="contained" size="medium" sx={{ fontSize: 25, width: 150 }}>
              BUY <ShoppingBagIcon sx={{ml:1}}/>
            </Button>
          </Stack>
    </Box>
  );

  return (
    <div>
          <Drawer
            anchor={"bottom"}
            open={open}
            onClose={handleClose}
          >
            {list()}
          </Drawer>
    </div>
  );
}