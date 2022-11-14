import React, {useState} from "react";
import ActivityFilter from "./ActivityFilter";
import ActivityList from "./ActivityList";
import ActivityChart from "./ActivityChart";
import "./Activity.css";

const Activity = (props) => {

const [filteredYear, setfilteredYear] = useState('2020');
const filterYearHandler = selectedYear => {
    setfilteredYear(selectedYear);
};

const filteredActivity = props.items.filter(activity => {
  return activity.date.getFullYear().toString() === filteredYear;
})

return (  

<div className='activities'>
  <ActivityFilter 
  selected={filteredYear} 
  onChangeFilter={filterYearHandler}
  />

  <ActivityChart activities={filteredActivity} />
  <ActivityList items = {filteredActivity} />

  {/* <ActivityItem
  activity = {props.items[0].activity}
  time = {props.items[0].time}
  date = {props.items[0].date}
  ></ActivityItem>
  <ActivityItem
  activity = {props.items[1].activity}
  time = {props.items[1].time}
  date = {props.items[1].date}
  krolik = {props.krolik}
  ></ActivityItem> */}
</div>

);} 

export default Activity; 