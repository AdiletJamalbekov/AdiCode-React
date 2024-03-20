import React from 'react';
import classes from './Home.module.css'


const Home = ({index}) => {
    return (
        <div>
            <button className={classes.btn}>Click Me</button>
        </div>
    );
};

export default Home;