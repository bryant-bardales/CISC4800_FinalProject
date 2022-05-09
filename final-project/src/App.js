import React from 'react';
import './App.css';

import TaskList from "./components/TaskList"
import Unsplash from "./components/Unsplash"

function App() {
  return (
    //Imports the application to the App() function
    <>
      <div className='todo-webapp'>
        <TaskList />
        <Unsplash />
      </div>
    </>
  );
}

export default App;
