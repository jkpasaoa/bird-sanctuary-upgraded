import { useState } from "react";

function Checkout(props) {
  const { setCart } = props;
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [zipCode, setZipCode] = useState("");

  function userEntry(event) {
    event.preventDefault();
    if (!firstName || !lastName || !email || !zipCode) {
      alert("Please complete the form");
    } else {
      alert("You have adopted birds. Thank you!");
      setCart([]);
      setEmail("");
      setFirstName("");
      setLastName("");
      setZipCode("");
    }
  };

  return (
    <div className="Checkout" id="box2">
      <section>
        <h1>Checkout</h1>
        <form onSubmit={userEntry}>
          <label>
            First Name
            <br />
            <input
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
              id="first-name"
              name="name"
              type="text"
              placeholder="Your name..."
            />
          </label>
          <label>
            Last Name
            <br />
            <input
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
              id="last-name"
              name="lastname"
              type="text"
              placeholder="Your last name..."
            />
          </label>
          <label>
            Email
            <br />
            <input
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              id="email"
              name="email"
              type="text"
            />
          </label>
          <label>
            Zip Code
            <br />
            <input
              value={zipCode}
              onChange={(event) => setZipCode(event.target.value)}
              id="zip"
              name="zip"
              type="number"
            />
          </label>
          <br />
          <input type="submit" text="Submit" />
        </form>
      </section>
    </div>
  );
};

export default Checkout;
