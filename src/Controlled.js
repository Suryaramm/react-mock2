import { useState } from "react";
import Contro from "./Contro";
import './Style.css'
import PropTypes from 'prop-types';
function Controlled(props){
    const[input,setInput]=useState();
    const changeHandler = e=>{
        setInput(e.target.value);
    }
    return(
      <div>
        <h1 className="s">{props.name}</h1>
         <br />
        name:{input} <br />
        <input type="text" value={input} onChange={changeHandler} ></input>
      <Contro  changeHandler={changeHandler} />

      </div>
    )

}
Controlled.propTypes={
    name:PropTypes.string.isRequired,
};
export default Controlled;
