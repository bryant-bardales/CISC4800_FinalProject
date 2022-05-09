import React from 'react';
import './App.css';

import TaskList from "./components/TaskList"
import Unsplash from "./components/Unsplash"

function App() {
  return (
    <>
      <div className='todo-webapp'>
        <TaskList />
      </div>
      <Unsplash />
    </>
  );
}

export default App;
