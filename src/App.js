import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from './components/BakeryItem';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import CartItem from './components/CartItem';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  const [cart, setCart] = useState([])
  const [totalPrice, setTotalPrice] = useState(0.0);


  const addItem = (bakeryItem, index) => {
    const item = cart.find((x) => x.props.name == bakeryItem.name)
    console.log(item)
    if (item) {
      const updatedItem = <CartItem 
        key={index}
        name={item.props.name}
        price={item.props.price}
        count={item.props.count + 1}
      />
      const newCart = cart.filter((x) => x.props.name != bakeryItem.name)
      setCart([...newCart, updatedItem])
    } else {
      const item = <CartItem 
        key={bakeryItem.key}
        name={bakeryItem.name}
        price={bakeryItem.price}
        count={1}
    />
      setCart([...cart, item])
    }
    setTotalPrice(totalPrice + bakeryItem.price)
  }

  return (
    <div className="App">
      <Box p={2} m={2}>
        <Typography variant="h2">My Bakery</Typography> 

        <Grid container spacing={2}>
          {bakeryData.map((item, index) => (
            <Box p={2} m={2}>
              <Grid item>
                <BakeryItem
                  key={index}
                  name={item.name}
                  price={item.price}
                  description={item.description}
                  image={item.image}
                  onClick={addItem}
                />
              </Grid>
            </Box>
          ))}
        </Grid>

        <div>
          <Typography variant="h3">Cart</Typography>
          <List>
            {cart.map((item, index) => (
              item
            ))}
          </List>
          <Typography variant="p">Total: {totalPrice}</Typography>
        </div>
      </Box>
    </div>
  );
}

export default App;
