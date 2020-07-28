import React from'react'
import './label.css'

const Label = props=>{
	return(
<label className={props.class}>{props.title}</label>
	)
}
export default Label