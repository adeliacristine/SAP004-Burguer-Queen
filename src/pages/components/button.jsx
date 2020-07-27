import React from 'react'
import '../login/Login.css'
import './style.css';
import {Button } from 'react-bootstrap'


const BtnP = props =>{
	return(
<Button className={props.class} type={props.type} onClick={props.click}>{props.title}</Button>
/*<Button variant={props.variant} type={props.type} onclick={props.click}>{props.title}</Button>{' '}*/

	)
}
export default BtnP