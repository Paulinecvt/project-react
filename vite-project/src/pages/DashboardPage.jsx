import React from 'react'
import { useState } from "react";
import ListDisplay from '../components/List';


function Dashboard({ listToDisplay, setListToDisplay }) {


    return (
        <div className="dashboard-div">
            
            <ListDisplay listToDisplay={listToDisplay} setListToDisplay={setListToDisplay} />
        </div>
    )
};

export default Dashboard;