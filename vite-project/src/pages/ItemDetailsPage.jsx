import React from 'react'
import { Link } from 'react-router-dom';
import List from "../components/List";


function ItemDetails() {
   return (
   <div>
       <p>"Hello"</p>
       <button className='return-btn'>
       <Link to="/">Dashboard</Link>
       </button>
    </div>
   );
}

export default ItemDetails;