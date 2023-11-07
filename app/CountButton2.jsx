import{useState, useEffect} from "react"

export default function CountButton2(){
    let[count,setCount]=useState(0)
    function handleClick2(){
    setCount(count+2)
    }
    function rollOverCount(){
        if(count>10){
            setCount(0)
        }
    }
    useEffect(rollOverCount,[count])
return(
    <div>
        <button onClick={handleClick2}>+2</button>
    <div>{count}</div>
    </div>
)
}
