import React from "react";
import "./App.css";
import { useState } from "react";

import TaskList from "./components/TaskList";
import Unsplash from "./components/Unsplash";
import Login2 from "./components/Login";
import Clock from "./components/Clock";

function App() {
  var users = [
    {
      userName: "tom",
      password: "123",
    },
    {
      userName: "peter",
      password: "123",
    },
  ];

  const [user, setUser] = useState({ name: "", password: "" });
  const [error, setError] = useState("");

  const Login = (details) => {
    console.log(details);
    var found = users.some(
      (user) =>
        user.password === details.password && user.userName === details.name
    );
    console.log(found);
    if (found) {
      setUser({ name: details.name });
    } else {
      console.log("wrong password or account name");
      setError("wrong password or account name");
    }
  };

  const logout = () => {
    console.log("logout");
    setUser({ name: "" });
    setError("");
  };
  return (
    <>
      <div className = 'clockinfo'><Clock /></div>
      <div>
        {user.name != "" ? (
          <div>
            hello {user.name} <button onClick={logout}>Logout</button>{" "}
          </div>
        ) : (
          <Login2 Login={Login} error={error} />
        )}
      </div>
      <div className="todo-webapp">
        <TaskList />
      </div>
      <Unsplash />
    </>
  );
}

export default App;
