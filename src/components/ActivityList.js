import React from "react";
import "./ActivityList.css";
import ActivityItem from "./ActivityItem" 

const ActivityList = (props) => {

    if (props.items.length === 0) {
        return (
            <h2 className="activities-list__fallback">No activity found.</h2>
        )}

  return (
    <ul className="activities-list">
    {props.items.map((activity) => (
        <ActivityItem 
          key = {activity.id}
          activity = {activity.activity}
          date = {activity.date}
          time = {activity.time}
          />))}
    </ul>
  )
};


export default ActivityList;