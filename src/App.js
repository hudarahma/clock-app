import React,{ useState } from 'react';
import Time from './Time';
import Quot from './Quot';
import Extend from "./Extend";
import './App.css';
import { PinDropSharp } from '@material-ui/icons';

function App() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="app">
     
      { !expanded && <Quot />}
      <Time expanded={expanded} setExpanded={setExpanded}  />
      { expanded  && <Extend />}
     
      

    </div>
  );
}

export default App;
