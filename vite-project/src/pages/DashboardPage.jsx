import { useState } from "react";
// import { Link } from 'react-router-dom';
import ListDisplay from "../components/List";
import ListData from "../data/list.json";

function Dashboard () {


    return (
        <div className="dashboard-div">
            <h1>Dashboard</h1>
                    <ListDisplay />
        </div>


    )
};

export default Dashboard;