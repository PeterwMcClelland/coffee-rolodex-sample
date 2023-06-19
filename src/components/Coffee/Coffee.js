import { Button } from '@mui/material';
import React from 'react';
import "./Coffee.css";
import { Link } from 'react-router-dom';

const Coffee = (props) => {
    const { _id, name, brand, espresso_gs, output, time, tds, percent, country, image} = props.coffee;

    return (
        <div className='card'>
            <div className='column'>
                <h1 className='brand-txt'>{brand}</h1>
                <h2 className='name-txt'>{name}</h2>
                <img src={image} alt={name} width={500} />
            </div>
            
            <div className='column'>
                <ul >
                    <li>Notes: {country}</li>
                    <li>Input: {espresso_gs}g</li>
                    <li>Output: {output}g</li>
                    <li>Time: {time}s</li>
                    <li>TDS: {tds}</li>
                    <li>Percent: {percent}%</li>
                    
                </ul>
            </div>
            
            <Button component={Link} to={`/coffees/${_id}`}>Update</Button>
            <Button className='delete-button'  onClick={props.deleteHandler}>Delete</Button>
        </div>
    );
};

export default Coffee;
