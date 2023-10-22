import './App.css';
import React, { useState } from 'react';
import ToDo from './ToDo.js';

const App = () => {
const [input, setInput]=useState("")
const [list, setList]=useState([])

function changeValue(e){
      setInput(e.target.value); 
}
function add(){
       setList((preval)=>{
           return[...preval,input];
       })
       setInput(' ');    
}
function deleteItems(id){
    console.log('deleted ')

    setList((olditems)=>{
        return olditems.filter((arrElem, index)=>{
            return index!== id;
        })
    })
     
}

return(
<>
<div className="main_div">
   <div className="center_div">
    <br/>
    <h1>TO-DO List</h1>
    <br/>
    <input type="text"  value={input} placeholder="Add Items" onChange={changeValue}/>
    <button onClick={add}> + </button>
    <ol>
    {/*<li> {input}</li>*/}
   {list.map((i,index)=> {
       return <ToDo 
       key={index} 
       id={index} 
       text={i}
       onSelect={deleteItems} />

      
})}

    </ol>
    </div>
</div>

</>);

} ;

export default App;
