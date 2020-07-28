import React from 'react'
import './button.css'
import {Button } from 'react-bootstrap'


const BtnP = props =>{
	return(
<Button className={props.class} type={props.type} onClick={props.click}>{props.title}</Button>
	)
}
export default BtnP