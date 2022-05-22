import React, { useState } from "react";

function Login({ Login, error }) {
  const [details, setDetails] = useState({ name: "", password: "" });
  const submitHandler = (e) => {
    e.preventDefault();
    Login(details);
  };
  return (
    <div className="login-container">
      <form className="login-form" onSubmit={submitHandler}>
        {error != "" ? <div>{error}</div> : ""}
        <div>
          <div>
            <label className="name">Username</label>
          </div>
          <div>
            <input
              type="text"
              name="name"
              onChange={(e) => setDetails({ ...details, name: e.target.value })}
              value={details.name}
            />
          </div>
        </div>

        <div>
          <div>
            <label className="pass">Password</label>
          </div>
          <div>
            <input
              type="password"
              name="password"
              onChange={(e) => setDetails({ ...details, password: e.target.value })}
              value={details.password}
            ></input>
          </div>
        </div>

        <div className="login-button">
          <input type="submit" value="Login" />
        </div>
      </form>
    </div>

  );
}

export default Login;