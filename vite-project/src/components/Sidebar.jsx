import React from "react"
import { Link } from "react-router-dom";

function Sidebar() {
    return (
        <div className="Sidebar">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
        </div>
    )
}

export default Sidebar;