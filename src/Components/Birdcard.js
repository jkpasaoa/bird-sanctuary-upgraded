import Birds from "./Birds"
import "./Birdcard.css"

function Birdcard(props) {
  const { birds, cart, setCart } = props;

  return (
    <div>
      <ul className="birdcard-container">
        {birds.map(({ name, amount, id, img }) => {
          return (
            <li key={id} className="card">
              <Birds
                id={id}
                name={name}
                amount={amount}
                img={img}
                cart={cart}
                setCart={setCart}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Birdcard;
