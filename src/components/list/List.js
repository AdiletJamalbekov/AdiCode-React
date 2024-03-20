import React from 'react';
import classes from './List.module.css';

const List = ({lists}) => {
    console.log(lists)
    return (
        <ul className={classes.listItem}>
            {
                lists.map((lists, index) => <li key={index} className={classes.lists}>{lists[index]}</li>)
            }
        </ul>
    );
};

export default List;