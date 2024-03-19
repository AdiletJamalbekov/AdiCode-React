import React from 'react';
import Buttons from "../../components/Buttons/Buttons";
import User from "../user/User";
import Input from "../Input/Input";
import Example from "../../components/Example/Example";

const MainPage = () => {
    return (
        <React.Fragment>
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
        </React.Fragment>
    );
};

export default MainPage;