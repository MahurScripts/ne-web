import React  from 'react';

function ToDo(props){
   
    return(
    <>
     <div className="todo_style">

     <i 
     className="fa-solid fa-square-xmark"
     onClick={()=>{
        props.onSelect(props.id);
     }}
     />

     <li> {props.text} </li>
     </div>
     </>
     
     
    
  );};
  export default ToDo;
  <i class="fa-regular fa-circle-xmark"></i>
   