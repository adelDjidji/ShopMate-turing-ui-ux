import React from 'react';
import "./styles/button.css"

export default ({label, onClick, white}) => {
  return <button onClick={onClick} className={`btn ${white?"white":""}`}>{label}</button>
}
