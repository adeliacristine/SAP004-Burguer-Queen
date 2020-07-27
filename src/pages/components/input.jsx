import React from 'react'

const Input = props =>{
	return(
<input type={props.type} name={props.name} placeholder={props.text}  onChange={props.change}></input>
	)
}
export default Input