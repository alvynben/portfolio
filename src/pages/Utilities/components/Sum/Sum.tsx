import React, { useState } from "react";
import { Col } from "react-bootstrap";

function Sum() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [sum, setSum] = useState(null);

  const handleChange = (event: any) => {
    const name = event.target.name;
    const value = event.target.value;
    switch (name) {
      case "a":
        setA(value);
        break;
      case "b":
        setB(value);
        break;
      default:
        break;
    }
  };

  const fetchSum = async () => {
    fetch("http://localhost:5000/add", {
      method: "POST",
      body: new URLSearchParams({
        a,
        b,
      }),
    })
      .then((res) => res.json())
      .then((data) => setSum(data.answer));
  };

  return (
    <Col sm={12}>
      <h1>Testing API</h1>
      <div>
        <div>
          <label>
            <p>First Number:</p>
            <input type="text" name="a" value={a} onChange={handleChange} />
          </label>
          <label>
            <p>Second Number:</p>
            <input type="text" name="b" value={b} onChange={handleChange} />
          </label>
        </div>

        <button onClick={fetchSum}>Get the sum!</button>
      </div>
      <div>
        <p>Sum = {sum}</p>
      </div>
    </Col>
  );
}

export default Sum;
