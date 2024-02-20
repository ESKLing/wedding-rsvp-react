import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [userID, setUserID] = useState("");
  const navigate = useNavigate();
  const handleRouteChange = () => {
    navigate("form", { state: userID });
  };

  const handleChange = (event) => {
    // const name = event.target.name;
    const value = event.target.value;
    // setInputs((values) => ({ ...values, [name]: value }));
    setUserID(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(userID);
  };

  return (
    <div>
      <form onSubmit={handleRouteChange}>
        <label>
          Enter your RSVP ID:
          <input
            type="text"
            name="userID"
            value={userID}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Submit Here</button>
      </form>
    </div>
  );
};

export default Home;
