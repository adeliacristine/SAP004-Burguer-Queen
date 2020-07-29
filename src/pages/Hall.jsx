import React from 'react'
import Header from './components/header/Header'
import Sector from './components/ sector'
import Footer from '../pages/components/footer/Footer'


const Hall = ()=>{
	return(
<div className='container-fluid p-0'>
<Header />
	<div className=" justify-content-center color d-flex">
	<Sector />
	</div>
	<div>
		<Footer />
	</div>
		</div>
		
	)
}
export default Hall
