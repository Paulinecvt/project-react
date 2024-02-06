import React, { useState } from "react";
import List from '../data/list.json'

function ListDisplay() {

    const [listToDisplay, setListToDisplay] = useState([]);
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
        {listToDisplay.map((listDetails) => {
            
                <div className="listDisplayed">
                    <p>{listDetails.task}</p>
                    {completedTask(listDetails)}
                    <button onClick={() => removeList(listDetails.task)}>Delete</button>
                </div>

        })};
        </div>
     )

     } 



export default ListDisplay;

