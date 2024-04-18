import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleRouteChange = () => {
    navigate("form", { state: password });
  };

  const handleChange = (event) => {
    const value = event.target.value;
    // setInputs((values) => ({ ...values, [name]: value }));
    setPassword(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(password);
  };

  return (
    <div class="h-screen flex items-center justify-center bg-stone-200">
      <div class="">
        <h1 class="text-center text-4xl text-gray-900 font-serif font-bold mb-2">
          Elaine & Ben
        </h1>
        <h2 class="text-center text-md text-gray-700 font-serif font-medium mb-8">
          January 1, 2026
        </h2>
        <form
          onSubmit={handleRouteChange}
          class="bg-white shadow-md rounded px-8 pt-6 pb-8"
        >
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="password"
            >
              Please enter the password given on your invitation
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="text"
              value={password}
              onChange={handleChange}
            />
          </div>

          <div class="flex items-center">
            <button
              class="bg-stone-400 hover:bg-stone-600 text-white w-full font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              RSVP
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Home;
