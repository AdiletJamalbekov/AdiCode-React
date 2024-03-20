import React, {useState} from 'react';
import Buttons from "../../components/Buttons/Buttons";
import User from "../user/User";
import Example from "../../components/Example/Example";
import Header from "../../components/header/Header";
import Modal from "../../components/modal/Modal";
import Input from '../../components/input/Input';
import List from '../../components/list/List';

const MainPage = () => {
    const navBar = ['About', 'Contacts', 'FAQ', 'Documents']

    const lists = [
        {
            id: 1,
            title: 'coding',
            completed: false
        },
        {
            id: 2,
            title: 'eat',
            completed: false
        },
        {
            id: 3,
            title: 'sleep',
            completed: false
        }
    ]

    const [show, setShow] = useState(false)
    console.log(show, 'showshow')
    const handleShow = () => {
        setShow(!show)
    }

    const [inputValue, setInputValue] = useState('')

    const handleChange = (event) => {
        setInputValue(event.target.value)
    }

    return (
        <>
            { show &&
                <Modal handleShow={handleShow} onChange={handleChange} inputValue={inputValue}>
                    <List lists={lists}/>
                </Modal>
            }


            <Buttons/>
            <button onClick={handleShow}>Show</button>
            <Header navBar={navBar}/>
            <User name={'Adilet'} age={21}/>
            <User name={'Bakyt'} age={17}/>
            <User name={'Ermek'} age={35}/>
            <Input/>
            <Example>
                <p style={{color: 'red', fontSize: '20px'}}>User</p>
                <p>Age</p>
            </Example>
            <input/>

        </>
    );
};

export default MainPage;