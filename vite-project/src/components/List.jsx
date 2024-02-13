// IMPORTS
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import infologo from "../img/details-btn.png";
import List from '../data/list.json'
import ItemDetails from '../pages/ItemDetailsPage'
import '../app.css'


function ListDisplay({ listToDisplay, setListToDisplay }) {

    // USEFUL CONST
    const [editTask, setEditTask] = useState(null);
    const [editedTask, setEditedTask] = useState(''); // ? clue


    // HANDLE THE CHECK OF THE CHECKBOX - MODIFY PARAMS
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



    // REMOVE THE TASK - connected to Remove btn
    const removeList = (listTask) => {
        const newList = listToDisplay.filter((listDetails) => {
            return listDetails.task !== listTask;
        });
        setListToDisplay(newList);
    }

    // TASK EDITION
    const setFormMode = (index) => {
        setEditTask(index); // editing
        setEditedTask(listToDisplay[index].task); // already edited
    };

    // HANDLE THE EDITION OF THE TASK
    const handleEdit = (e, index) => {
        e.preventDefault();
        console.log(index)
        console.log(editedTask)

        // LIST UPDATE
    const updatedList = listToDisplay.map((listDetails, i) => {
            if (i === index) {
                return { ...listDetails, task: editedTask }
            }
            return listDetails;
    });

        console.log(updatedList)
        setEditTask(null);

        // FINAL LIST UPDATE
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

                            
                            <Link to={`/items-details/${index}`}>
                                <img className="info-img" src={infologo} />
                            </Link>
                            

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

