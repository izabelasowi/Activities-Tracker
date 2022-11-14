import React, {useState} from 'react';
import Activity from './components/Activity';
import NewActivity from './components/NewActivity/NewActivity';

const activities_hm = [
  {
    id: 1,
    activity: 'Playing Football',
    time: 120,
    date: new Date(2022, 6, 12),
 
  },
  {
    id: 2,
    activity: 'Running',
    time: 45,
    date: new Date(2022, 6, 16),
    },
  {
    id: 3,
    activity: 'Swimming',
    time: 90,
    date: new Date(2021, 7, 13),
 
  },
  {
    id: 4,
    activity: 'Climbing',
    time: 180,
    date: new Date(2021, 5, 10),
    },
    {
      id: 5,
      activity: 'Swimming Football',
      time: 120,
      date: new Date(2021, 4, 11),
   
    },
    {
      id: 6,
      activity: 'Running',
      time: 45,
      date: new Date(2022, 6, 30),
      },
  
    
];

const App = () => {


const[activities, setActivities] = useState(activities_hm)


const addActivityHandler = (activity) => {
  setActivities((prevActivities) => {
    return[activity, ...prevActivities];
  });
}

  return (
<div>
  <NewActivity onAddActivity = {addActivityHandler}/>
  <Activity items = {activities} />
</div>
  );}

export default App;
