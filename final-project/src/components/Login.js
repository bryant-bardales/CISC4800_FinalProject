import React, { useState } from "react";

function Login({ Login, error }) {
  const [details, setDetails] = useState({ name: "", password: "" });
  const submitHandler = (e) => {
    e.preventDefault();
    Login(details);
  };
  return (
    <form onSubmit={submitHandler}>
      {error != "" ? <div>{error}</div> : ""}
      <label htmlFor="name">Username</label>
      <input
        type="text"
        name="name"
        onChange={(e) => setDetails({ ...details, name: e.target.value })}
        value={details.name}
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        onChange={(e) => setDetails({ ...details, password: e.target.value })}
        value={details.password}
      ></input>
      <input type="submit" value="login" />
    </form>
  );
}

export default Login;