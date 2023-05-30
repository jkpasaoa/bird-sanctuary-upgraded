import Birds from "./Birds"
import "./Birdcard.css"
import { Card } from "antd";

function Birdcard(props) {
  const { birds, cart, setCart } = props;

  return (
    <div>
      <ul className="birdcard-container">
        {birds.map(({ name, amount, id, img }) => {
          return (
            <Card key={id} className="card">
              <Birds
                id={id}
                name={name}
                amount={amount}
                img={img}
                cart={cart}
                setCart={setCart}
              />
            </Card>
          );
        })}
      </ul>
    </div>
  );
}

export default Birdcard;
