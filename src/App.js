//import logo from './logo.svg';
//deploy my react app in the git hub
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import Alert from './components/Alert';
import React, { useState } from 'react';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  
  const showAlert = (message, type)=>{
    setAlert(
      {
        msg:message,
        type:type
      }
    )

    setTimeout(() => {
      setAlert(null);
    }, 2000);

  }

  const toggleMode = ()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = '#1b3153';
      showAlert('Dark mode has been enabled.','success');
      document.title = 'React App - Dark Mode';
      // setInterval(() => {
      //   document.title = 'React App is amazing';
      // }, 2000);

      // setInterval(() => {
      //   document.title = 'Use React App';
      // }, 1500);

    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has been enabled.','success');
      document.title = 'React App - Light Mode';
    }
     
  }

  return (
    <>
    {/* <Router> */}
    <Navbar title="MyReact" aboutText="About Us" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container">
        {/* <Routes>
              <Route exact path="/about" element={<About/>} />
              <Route exact path="/" element={<TextForm mode={mode} showAlert={showAlert}/>} />
        </Routes> */}
        <TextForm mode={mode} showAlert={showAlert}/>
    </div>
    {/* </Router> */}
    </>
  );
}

export default App;
