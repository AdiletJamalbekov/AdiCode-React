import React from 'react';
import classes from "./Header.module.css";

const Header = ({navBar}) => {
    console.log(navBar)
    return (
        <ul className={classes.lists}>
            {
                navBar.map((items, index) => <li key={index} className={classes.items}>{items}</li>)
            }
        </ul>
    );
};

export default Header;