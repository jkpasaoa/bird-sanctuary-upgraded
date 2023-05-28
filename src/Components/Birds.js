import "../index.css"

function Birds(props) {
  const { name, amount, img, id, cart, setCart } = props;
  return (
    <div className="birds">
      <h4>{name}</h4>
      <p>${amount}</p>
      <img
        src={img}
        alt={name}
        width="125"
        height="100"
      />
      <br />
      <button className="button" value={id} onClick={() => setCart([...cart, { name, amount }])}>
        <span>🪺 Adopt</span>
      </button>

    </div>
  );
};

export default Birds;
