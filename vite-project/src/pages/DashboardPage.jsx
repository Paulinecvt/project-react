import React from 'react'
import { useState } from "react";
import ListDisplay from '../components/List';


function Dashboard ({listToDisplay, setListToDisplay}) {


    return (
        <div className="dashboard-div">
            <h1>Dashboard</h1>
                    <ListDisplay listToDisplay={listToDisplay} setListToDisplay={setListToDisplay} />
                    <p>
                    
                    </p>

        </div>


    )
};

export default Dashboard;