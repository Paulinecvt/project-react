import React from 'react'
import { Link, useParams } from 'react-router-dom';
import List from "../components/List";

//UNSURE ABOUT THE CODE BC CANNOT DISPLAY IT YET

function ItemDetails() {

   // USEFUL CONST
   const { index } = useParams();
   const taskDetails = listToDisplay[index];

   return (
   <div className="listdetails-card">
       
       <div>
         {taskDetails.task}
       </div>

      <input
            type="checkbox"
            checked={taskDetails.completed}
            onChange={() => handleCheckboxChange(index)}
      />

       <button className='return-btn'>
       <Link to="/">Dashboard</Link>
       </button>
    </div>
   );
}

export default ItemDetails;