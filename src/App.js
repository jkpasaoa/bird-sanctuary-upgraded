import React, { useState } from "react";
import BirdCart from "./Components/BirdCart.js";
import Birdcard from "./Components/Birdcard.js";
import Checkout from "./Components/Checkout.js";
import birdData from "./data/birds.js";
import bonusItems from "./data/bonusItems.js";

import "./App.css";

function App() {
const [cart, setCart] = useState([]);

  return (
    <div className="main">
      <section>
        <BirdCart 
          cart={cart} 
          bonusItems={bonusItems} 
          setCart={setCart}
        />

        <Checkout 
          id="box2"
          setCart={setCart}
        />
      </section>
      <Birdcard 
        setCart={setCart} 
        cart={cart} 
        birds={birdData}
      />
    </div>
  );
};

export default App;
