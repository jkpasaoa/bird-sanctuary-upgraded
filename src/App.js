import React, { useState } from "react";
import BirdCart from "./Components/BirdCart.js";
import Birdcard from "./Components/Birdcard.js";
import Checkout from "./Components/Checkout.js";
import skylayout from "./Components/skylayout.js"
import birdData from "./data/birds.js";
import bonusItems from "./data/bonusItems.js";
import 'antd/dist/reset.css';
import { Layout } from "antd";

import "./App.css";
import "./index.css";

const { Content } = Layout;

function App() {
  const [cart, setCart] = useState([]);

  return (
    <Layout>
      <skylayout />
      <Content className="main">
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
      </Content>
    </Layout>
  );
};

export default App;
