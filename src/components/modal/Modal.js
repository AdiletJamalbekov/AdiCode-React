import React from 'react';
import classes from './Modal.module.css';
import Input from "../input/Input";
const Modal = ({children, handleShow, onChange, inputValue}) => {
    return (
        <>
            <div className={classes.modalWrapper}></div>
            <div className={classes.modalContent}>
                <h1>Modal</h1>
                <button onClick={handleShow}>closed</button>
                <p>{inputValue}</p>
                <Input
                    type={'password'}
                    placeholder={'Enter data'}
                    onChange={onChange}
                    value={inputValue}
                />

                {children}
            </div>
        </>
    );
};

export default Modal;