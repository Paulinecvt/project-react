import React, {useState} from 'react'
import { Link, useParams } from 'react-router-dom';
import List from "../components/List";

//UNSURE ABOUT THE CODE BC CANNOT DISPLAY IT YET

function ItemDetails({listToDisplay, handleCheckboxChange}) {

   // USEFUL CONST
   const { index } = useParams();
   const [task, setTask] = useState(null);
   setTask(listToDisplay);

   // set an id for each task and use it to display replacing the index ?
   // print the index in the array ?
   const indexNumber = parseInt(index);


   return (
   <div className="listdetails-card">
       
       <div>
         {task.task}
       </div>

      <input
            type="checkbox"
            checked={task.completed}
            onChange={() => handleCheckboxChange(index)}
      />

       <button className='return-btn'>
       <Link to="/">Dashboard</Link>
       </button>
    </div>
   );
}

export default ItemDetails;