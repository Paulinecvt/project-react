import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import List from '../data/list.json'
import ItemDetails from '../pages/ItemDetailsPage'
import '../app.css'

function ListDisplay({ listToDisplay, setListToDisplay }) {
    const [editTask, setEditTask] = useState(null);
    const [editedTask, setEditedTask] = useState(''); // ? clue


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

    const setFormMode = (index) => {     // Two states of Edit: Editing and afterwards edited
        setEditTask(index); // editing
        setEditedTask(listToDisplay[index].task); // already edited
    };

    const handleEdit = (e, index) => {
        e.preventDefault();
        //setEditedTask
        //setEditTask
        console.log(index)
        console.log(editedTask)


        const updatedList = listToDisplay.map((listDetails, i) => {
            if (i === index) {
                return { ...listDetails, task: editedTask }
            }
            return listDetails;
        });

        console.log(updatedList)
        setEditTask(null)
        //setEditedTask(listToDisplay[index].task);

        //setEditTask(index); // needs the index
        setListToDisplay(updatedList);
    }



    return (
        <div>
            {listToDisplay.map((listDetails, index) => {
                return (
                    <div className="listDisplayed" key={index}>

                        <input
                            type="checkbox"
                            checked={listDetails.completed}
                            onChange={() => handleCheckboxChange(index)}
                        />



                        {editTask === index ? (
                            <form onSubmit={(e) => { handleEdit(e, index) }}><input
                                type="text"
                                value={editedTask}
                                onChange={(e) => setEditedTask(e.target.value)}
                                placeholder={listDetails.task}
                            />
                                <button type="submit" className="editButton">Save</button> </form>
                        ) : (
                            <p>{listDetails.task}</p>
                        )}


                        <div className="btns">
                            <Link to="/item-details/:itemId">See more Details</Link>
                            {editTask !== index && (
                                <button className="editButton" onClick={() => setFormMode(index)}>Edit</button>
                            )}
                            <button className="deleteButton" onClick={() => removeList(listDetails.task)}>Delete</button>
                        </div>

                    </div>

                )
            })}
        </div>
    );
}



export default ListDisplay;

