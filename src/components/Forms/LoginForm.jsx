import React, { useState } from "react";

export default function LoginForm() {
  const [authDetails, setAuthDetails] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setAuthDetails({
      ...authDetails,
      [event.target.id]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    alert(`
      Form Submitted 
      Email: ${authDetails.email}
      Password ${authDetails.password}
      `);
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          type="email"
          value={authDetails.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          value={authDetails.password}
          onChange={handleChange}
        />
      </div>
      <input type="submit" value="Submit" />
    </form>
  );
}
