import React from 'react'
import { Link } from 'react-router-dom';
import List from "../components/List";


function ItemDetails(props) {

   // USEFUL CONST
   const {id} = useParams();
   const taskId = props.listToDisplay.find((index) => {
      return index === id;
  });

   return (
   <div className="listdetails-card">
       
       <div>
         {props.task}
       </div>

      <input
            type="checkbox"
            checked={props.completed}
            onChange={() => handleCheckboxChange(index)}
      />

       <button className='return-btn'>
       <Link to="/">Dashboard</Link>
       </button>
    </div>
   );
}

export default ItemDetails;