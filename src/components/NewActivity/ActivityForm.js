import React, { useState } from "react";
import "./ActivityForm.css";

const ActivityForm = (props) => {

const [enteredActivity, setEnteredActivity] =  useState(' ');
const [enteredDate, setEnteredDate] = useState(' ');
const [enteredTime, setEnteredTime] = useState(' ');

const activityChangeHandler = (event) => {
    setEnteredActivity(event.target.value);
}

const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
}

const timeChangeHandler = (event) => {
    setEnteredTime(event.target.value);
}


const submitHandler = (event) => {
    event.preventDefault();

const enteredData = {
    activity: enteredActivity,
    date: new Date (enteredDate),
    time: +enteredTime,
};
    console.log(enteredData)
    props.onSaveActivityData(enteredData)
    setEnteredActivity(' ')
    setEnteredDate(' ')
    setEnteredTime(' ')
}

    return(

<form onSubmit={submitHandler}>
<div className=" new-activity__controls"> 
        <div className="new-activity__control">
            <label>Activity</label>
            <input 
            type='text'
            value={enteredActivity}
            onChange={activityChangeHandler}
            />
        </div>
        <div className="new-activity__control">
            <label>Date</label>
            <input 
            type='date' 
            min="2019-01-01" 
            max="2021-12-31" 
            value={enteredDate}
            onChange={dateChangeHandler}/>
        </div>
        <div className="new-activity__control">
            <label>Time</label>
            <input 
            type='number' 
            min="1" 
            step="1" 
            value={enteredTime}
            onChange={timeChangeHandler}/>
        </div>
    </div>
    <div>
        <button type="button" onClick={props.onCancel}>Cancel</button>
        <button type="submit">Add Activity</button>
    </div>
</form>
    
    );}


export default ActivityForm;