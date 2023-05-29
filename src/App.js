import React, { useState } from "react";
import BirdCart from "./Components/BirdCart.js";
import Birdcard from "./Components/Birdcard.js";
import Checkout from "./Components/Checkout.js";
import birdData from "./data/birds.js";
import bonusItems from "./data/bonusItems.js";
import skylayout from "./Components/skylayout.js";

import "./App.css";

function App() {
  const [cart, setCart] = useState([]);

  return (
    <div className="app">
      <skylayout /> {/* Add the SkyLayout component as the first child */}

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
    </div>
  );
};

export default App;
