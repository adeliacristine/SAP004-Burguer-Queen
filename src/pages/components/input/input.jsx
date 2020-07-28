import React from 'react'
import './input.css'

const Input = props =>{
	return(
<input className={props.class} type={props.type} name={props.name} placeholder={props.text}  onChange={props.onchange}></input>
	)
}
export default Input