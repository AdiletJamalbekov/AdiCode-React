import React from 'react';
import Button from "../button/Button";
import classes from './Buttons.module.css'

const Buttons = () => {
    return (
        <div className={classes.btns}>
            <Button title={'Edit'}></Button>
            <Button title={'Save'}></Button>
            <Button title={'Delete'}></Button>
        </div>
    );
};

export default Buttons;