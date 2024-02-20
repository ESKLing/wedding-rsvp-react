import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const Form = () => {
  const [inputs, setInputs] = useState({});
  const { state } = useLocation();

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  };

  return (
    <div>
      <p>{state}</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={inputs.name}
          onChange={handleChange}
        />

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={inputs.message}
          onChange={handleChange}
        />
        <button type="submit">Submit Form Info</button>
      </form>
    </div>
  );
};

export default Form;
