import { useState } from 'react';
import './App.css';
//import About from './components/About';

import Text from './components/Text';
import Alert from './components/Alert';
import Navbar from './components/Navbar';


function App() {
  const[mode,setmode]=useState('light');
  const[alert,setalert]=useState(null);
  const toggle=()=>{
    if(mode=='dark'){
      setmode('light')
      document.body.style.backgroundColor='white'
      showalert("Light Mode Activated","success");
      
    }else{
      setmode('dark')
      document.body.style.backgroundColor='#14213d'
      showalert("Dark Mode Activated","success");
    }
  }
  
  
  const showalert=(Message,type)=>{
    setalert({
      msg:Message,
      type:type
    })
    setTimeout(() => {
      setalert(null);
    }, 2000)
  }
  return (
    <>  
    
    <Navbar title="Text" about="About" mode={mode}   toggle={toggle}/>
    <Alert alert={alert}/>
    <div className='container'>
     <Text showalert={showalert} heading="Enter the text Here" mode={mode}/>
    </div>
    </>
  );
}

export default App;

