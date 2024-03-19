import './App.css';
import User from './pages/user/User'
import Home from "./components/Home/Home";
import Input from './pages/Input/Input'
import Button from "./components/button/Button";
import Example from "./components/Example/Example";
import Buttons from "./components/Buttons/Buttons";
import MainPage from "./pages/mainPage/MainPage";
import React from "react";


function App() {

  return (
    <div className="App">
        <Buttons/>
        <User name={'Adilet'} age={21}/>
        <User name={'Bakyt'} age={17}/>
        <User name={'Ermek'} age={35}/>
        <Input/>
        <Example>
            <p style={{color: 'red', fontSize: '20px'}}>User</p>
            <p>Age</p>
        </Example>

        <input/>
    </div>
  );
}

export default App;
