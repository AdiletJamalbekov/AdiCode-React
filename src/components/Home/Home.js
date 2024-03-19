import React from 'react';
import classes from './Home.module.css'


const Home = ({index}) => {
    return (
        <div>
            <button className={classes.btn}>
                {index}
            </button>
        </div>
    );
};

export default Home;