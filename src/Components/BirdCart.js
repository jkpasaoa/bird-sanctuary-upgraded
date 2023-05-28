import {useState, useEffect} from "react";

function BirdCart(props) {
  const { cart, setCart, bonusItems } = props;
  const [total, setTotal] = useState(0);
  // const { birds } = props;

  const areThreePlus = cart.length >= 3;
  const discount = areThreePlus ? 10 : 0;

  useEffect(() => {
    let birdCost = 0;
    cart.forEach((bird) => {
      birdCost += areThreePlus ? bird.amount * 0.9 : bird.amount;
    });
    setTotal(birdCost);
  }, [areThreePlus, cart]);
  

  let bonuses;
  if (total >= 1000) {
    bonuses = (
      <ul>
        <li>{bonusItems[0]}</li>
        <li>{bonusItems[1]}</li>
        <li>{bonusItems[2]}</li>
        <li>{bonusItems[3]}</li>
      </ul>
    );
  } else if (total >= 500 && total < 1000) {
    bonuses = (
      <ul>
        <li>{bonusItems[0]}</li>
        <li>{bonusItems[1]}</li>
        <li>{bonusItems[2]}</li>
      </ul>
    );
  } else if (total >= 300 && total < 500) {
    bonuses = (
      <ul>
        <li>{bonusItems[0]}</li>
        <li>{bonusItems[1]}</li>
      </ul>
    );
  } else if (total >= 100 && total < 300) {
    bonuses = (
      <ul>
        <li>{bonusItems[0]}</li>
      </ul>
    );
  }

  function handleRemoveBird(event, index) {
    event.preventDefault();

    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  }

  return (
    <div className="Cart" id="box1">
      <h2>Cart</h2>
      <h3>Discount: {discount}%</h3>
      <h4>Total: ${total}</h4>
      <ol>
        {cart.map((bird, index) => {
          return (
            <li key={index}>
              {bird.name}: ${bird.amount}
              <button onClick={(event) => handleRemoveBird(event, index)}>Remove</button>
            </li>
          );
        })}
      </ol>
      <p>Your donations have qualified you for the following items</p>
      <div>{bonuses}</div>
    </div>
  );
};

export default BirdCart;
