import React,{ useState } from 'react';
import Time from './Time';
import Qout from './Qout';
import Extend from "./Extend";

import './App.css';

function App() {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="app">
      <Qout />
      <Time setExpanded={setExpanded}/>
      { expanded && <Extend />}
      

    </div>
  );
}

export default App;
