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

    const setFormMode = (task) => {     // Two states of Edit: Editing and afterwards edited
        setEditTask (task);
        setEditedTask (task);
    };

    const handleEdit = () => {
        const updatedList = listToDisplay.map((listDetails) => {
            if (listDetails.task === editTask){
                return { editedTask, task, ...listDetails }
            }
            return listDetails;
    });
    setListToDisplay(updatedList);
    setEditTask(null);
}



    return (
        <div>
            {listToDisplay.map((listDetails, index) => {
                return (
                    <div className="listDisplayed" key={index}>
                        <input 
                            type= "checkbox"
                            checked= {listDetails.completed}
                            onChange={() => handleCheckboxChange(listDetails.completed)}
                            />

                            {editTask === listDetails.task ? (
                                <input
                                type="text"
                                value={editedTask}
                                onChange={(e) => setEditedTask(e.target.value)}
                                />
                            ) : (
                                <p>{listDetails.task}</p>
                            )};
                        
                        {completedTask(listDetails)}

                        {editTask === listDetails.task ? (
                            <button className="editButton" onClick={handleEdit}>Save</button>
                        ) : (
                            <button className="editButton" onClick={() => setFormMode(listDetails.task)}>Edit</button>
                        )}
                        
                        <button className="deleteButton" onClick={() => removeList(listDetails.task)}>Delete</button>
                    </div>

                )
            })}
        </div>
    );
}



export default ListDisplay;

