import { useState } from "react";
import { Form, Input, Button } from "antd";

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
    <div className="Checkout">
      <section>
        <h1>Checkout</h1>
        <Form onFinish={userEntry}>
          <Form.Item label="First Name">
            <Input
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
              id="first-name"
              name="name"
              type="text"
              placeholder="Your name..."
            />
          </Form.Item>
          <Form.Item label="Last Name">
            <input
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
              id="last-name"
              name="lastname"
              type="text"
              placeholder="Your last name..."
            />
          </Form.Item>
          <Form.Item label="Email">
            <Input
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              id="email"
              name="email"
              type="text"
            />
          </Form.Item>
          <Form.Item label="Zip Code">
            <Input
              value={zipCode}
              onChange={(event) => setZipCode(event.target.value)}
              id="zip"
              name="zip"
              type="number"
            />
          </Form.Item>
          <Button type="primary" htmlType="submit">Submit</Button>
        </Form>
      </section>
    </div>
  );
};

export default Checkout;
