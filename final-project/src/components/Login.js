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
      <p className="name" style={{backgroundColor: "lightgrey"}}>Username: </p>
      <input
        type="text"
        name="name"
        onChange={(e) => setDetails({ ...details, name: e.target.value })}
        value={details.name}
      />
      <p className="pass" style={{backgroundColor: "lightgrey"}}>Password: </p>
      <input
        type="password"
        name="password"
        onChange={(e) => setDetails({ ...details, password: e.target.value })}
        value={details.password}
      ></input>
      <input type="submit" value="Login" />
    </form>
  );
}

export default Login;