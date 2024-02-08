import React, { useState, useEffect } from "react";
import List from '../data/list.json'
import '../app.css'

function ListDisplay({ listToDisplay, setListToDisplay }) {


    const completedTask = (listDetails) => {
        if (listDetails.completed === true) {
            return <p>✓</p>
        } else {
            return <p>𐄂</p>
        }
    };

    const removeList = (listTask) => {
        const newList = listToDisplay.filter((listDetails) => {
            return listDetails.task !== listTask;
        });
        setListToDisplay(newList);
    }


    return (
        <div>
            {listToDisplay.map((listDetails, index) => {
                return (
                    <div className="listDisplayed" key={index}>
                        <p>{listDetails.task}</p>
                        {completedTask(listDetails)}
                        <button className="editButton" onClick={() => editList(listDetails.task)}>Edit</button>
                        <button className="deleteButton" onClick={() => removeList(listDetails.task)}>Delete</button>
                    </div>

                )
            })}
        </div>
    );
}



export default ListDisplay;

