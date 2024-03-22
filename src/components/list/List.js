import React from 'react';
import classes from './List.module.css';

const List = ({list}) => {
    console.log(list)
    return (
        <ul>
            {
                list.map(item => <p>{item.title}</p>)
            }
        </ul>
    );
};

export default List;