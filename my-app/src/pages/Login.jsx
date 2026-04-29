import React, { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");  

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      console.log("Please fill all fields");
      return;
    }

    // Example check (replace with API call) ///chatgpt 
    // if (email === "test@example.com" && password === "123456") {
    //   console.log("Login successful");
    // } else {
    //   console.log("Invalid email or password");
    // }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
 