import React from 'react'
import "./styles/InputRadio.css"

export default ({theme= "blue", onChange, checked= false, name}) => {
// const handleChange= (e)=>{
//     e.preventDefault()
//     onChange&&onChange(e.target.checked)
// }
  return <input checked={checked} name={name} value={name} onChange={onChange} className={`custom-radio ${theme}`} type="radio"/>
}
