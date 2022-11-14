import React, {useState} from "react";
import "./NewActivity.css";
import ActivityForm from "./ActivityForm";

const NewActivity = (props) => {

const saveActivityHandler = (enteredActivityData) => {

    const enteredData = {
    ...enteredActivityData,
    id: Math.random().toString()
    } 
    console.log(enteredData);
    props.onAddActivity(enteredData);
    cancelEditingHandler();

}


const [isEditing, setIsEditing] = useState(false);

const startEditingHandler = () => {
    setIsEditing(true);
}

const cancelEditingHandler = () => {
    setIsEditing(false);
}
    return(
        <div className="new-activity">
           {!isEditing && <button onClick={startEditingHandler}>Add Activity</button>}
           {isEditing &&  
           <ActivityForm 
           onSaveActivityData = {saveActivityHandler} 
           onCancel = {cancelEditingHandler}
           />}
        </div>
    );}

export default NewActivity;