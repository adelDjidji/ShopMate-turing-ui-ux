import React, {useState,useEffect} from 'react'
import "./styles/ButtonCheck.css"

export default ({label,name, onChange, checked= false}) => {
    const [selected, setselected] = useState(checked)
    useEffect(() => {
        setselected(checked)
    }, [checked])
    const handleClick=()=>{
        setselected(!selected)
        onChange&&onChange(!selected, name)
    }
    return <button onClick={handleClick} className={`btn-check ${selected?"selected":""}`}>{label}</button>
}
