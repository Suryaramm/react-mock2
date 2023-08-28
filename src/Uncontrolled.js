import { useEffect, useRef } from "react";

function Uncontrolled(){
    const inputRef=useRef();
    const submitHandler=(e)=>{
        e.preventDefault();
        alert(inputRef.current.value);
    }

    useEffect(()=>{
        inputRef.current.focus();
    },[])
    return (
        <div>
            <form onSubmit={submitHandler}>
                <input type="text" ref={inputRef} />
                <input type="submit" value="submit" />
            </form>
        </div>
    )
}
export default Uncontrolled;