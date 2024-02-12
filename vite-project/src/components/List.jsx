import React, { useState, useEffect } from "react";
import List from '../data/list.json'
import '../app.css'

function ListDisplay({ listToDisplay, setListToDisplay }) {
    const [editTask, setEditTask] = useState(null);
    const [editedTask, setEditedTask] = useState('');
  

    const completedTask = (listDetails) => {
        if (listDetails.completed === true) {
            return <p>✓</p>
        } else {
            return <p>𐄂</p>
        }
    };

    const handleCheckboxChange = (index) => {
        const updatedList = listToDisplay.map((listDetails, i) => {
          if (i === index) {
            return { ...listDetails, completed: !listDetails.completed };
          }
          return listDetails;
        });
        console.log("changing status");
        setListToDisplay(updatedList);
      };

    
    

    const removeList = (listTask) => {
        const newList = listToDisplay.filter((listDetails) => {
            return listDetails.task !== listTask;
        });
        setListToDisplay(newList);
    }

    const setFormMode = () => {     // Two states of Edit: Editing and afterwards edited
        setEditTask (task);
        setEditedTask (task);
    };

    const handleEdit = (index) => {
        const updatedList = listToDisplay.map((listDetails, i) => {
            if (i === index){
                return { ...listDetails, task: editedTask }
            }
            return listDetails;
    });
    setListToDisplay(updatedList);
    setEditTask(null);
    setEditedTask('');
}



    return (
        <div>
            {listToDisplay.map((listDetails, index) => {
                return (
                    <div className="listDisplayed" key={index}>
                        <input 
                            type= "checkbox"
                            checked= {listDetails.completed}
                            onChange={() => handleCheckboxChange(index)}
                            />

                            {editTask === index ? (
                                <input
                                type="text"
                                value={editedTask}
                                onChange={(e) => setEditedTask(e.target.value)}
                                placeholder={listDetails.task}
                                />
                            ) : (
                                <p>{listDetails.task}</p>
                            )};
                        {completedTask(listDetails)}
                        {editTask === index ? (
                            <button className="editButton" onClick={() => handleEdit(index)}>Save</button>
                        ) : (
                            <button className="editButton" onClick={() => setEditTask(index)}>Edit</button>
                        )}
                        <button className="deleteButton" onClick={() => removeList(listDetails.task)}>Delete</button> 
                       </div>

                )
            })}
        </div>
    );
}



export default ListDisplay;

