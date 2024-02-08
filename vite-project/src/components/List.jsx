import React, { useState, useEffect } from "react";
import List from '../data/list.json'
import '../app.css'

function ListDisplay(props) {


    const completedTask = (listDetails) => {
        if (listDetails.completed === true) {
            return <p>✓</p>
        } else {
            return <p>𐄂</p>
        }
    };

    const removeList = (listTask) => {
        const newList = props.listToDisplay.filter((listDetails) => {
            return listDetails.task !== listTask;
        });
        props.setListToDisplay(newList);
    }

    return (
        <div>
            {props.listToDisplay.map((listDetails, {index}) => (
                <div className="listDisplayed" key={index}>
                    <p>{listDetails.task}</p>
                    {completedTask(listDetails)}
                    <button className="editButton"onClick={() => editList(listDetails.task)}>Edit</button>
                    <button className="deleteButton" onClick={() => removeList(listDetails.task)}>Delete</button>
                </div>

            ))}
        </div>
    )

}



export default ListDisplay;

