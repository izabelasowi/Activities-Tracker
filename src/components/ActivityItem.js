import React, {useState} from 'react';
import ActivityDate from './ActivityDate';
import './ActivityItem.css';

const ActivityItem = (props) => {


    return (
        <div className='activity-item'>
            <ActivityDate date = {props.date}/>
            <div className='activity-item__description'><h2> {props.activity} </h2></div>
            <div className='activity-item__time'> {props.time} Min</div>
        </div>
    );
    }


export default ActivityItem;