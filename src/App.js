import { useState } from 'react';
// import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import {
  BrowserRouter as Router,
  Switch,Routes, Route, Link, BrowserRouter
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) =>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() =>{
        setAlert(null);
      }, 1000);
  }

  const toggleMode = ()=>{
      if(mode === 'dark'){
        setMode('light');
        document.body.style.backgroundColor = 'white';
        showAlert("Light mode is enabled", "success");
        //document.title ='Light Mode activated';
      }
      else{
        setMode('dark');
        document.body.style.backgroundColor = '#051f36';
        showAlert("Dark mode is enabled", "success");
        //document.title = 'Dark Mode activated'
        // setTimeout(() => {
        //   document.title = 'Dark Mode activated'
        // }, 2000);


        // To fluctuate the title use interval
        // setInterval(() => {
        //   document.title = 'Hello'
        // }, 1000);
        // setInterval(() => {
        //   document.title = 'Guys'
        // }, 1500);
      }
  }

  return (
    <>
    <Router>
      <Navbar theme={mode} togglemode = {toggleMode} />
      <Alert alert = {alert}/>
      {/* <div className="container my-3">
        <TextForm heading = "Text Converter" theme={mode} alert = {showAlert} />
      </div> */}
      <div className="container my-3">
        <Routes>
          <Route path= '/' element ={<TextForm heading = "Text Converter" theme={mode} alert = {showAlert} />}/>
          <Route path='/about' element ={<About colors={mode} />} ></Route>
          <Route path='*' element ={<div>Error</div>} ></Route>
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
