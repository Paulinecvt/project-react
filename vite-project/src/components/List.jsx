import React from "react";
import { useState } from "react";
import JSON from "../data/list.json";

function ListDisplay({ list }) {

    const [listToDisplay, setListToDisplay] = useState(list);
    const completedTask = (completed) => {
        if (completed === true) {
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


    {
        listToDisplay.map((listDetails) => {
            return (
                <div className="listDisplayed">
                    <p>{listDetails.task}</p>
                    < isCompleted completed={listDetails.completed} />
                    <button onClick={() => removeList(list.listTask)}>Delete</button>
                </div>
            )
        })
    }
}

export default ListDisplay;

