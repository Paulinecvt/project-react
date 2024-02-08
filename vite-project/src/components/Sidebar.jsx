import React, { useState } from "react";
import { Link } from "react-router-dom";
import List from '../data/list.json'

function Sidebar(props) {

    const handleSubmit = (e) => {
        e.preventDefault();
    
        const newTask = {
          task: task
        };
    
        const newList = [newTask, ...listToDisplay];
    
        setListToDisplay(newList);
        setTask("");
    
      };

    return (
        <div className="Sidebar">
            <div className="newTask">
                <form onSubmit={handleSubmit}>
                    <input type="text"
                        name="task"
                        placeholder="Add a new task"
                        value={props.task}
                        onChange={(e) => {setTask(e.target.value)}}
                    />
                    <button>Add task</button>
                </form>
            </div>

            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
        </div>

    )
}

export default Sidebar;