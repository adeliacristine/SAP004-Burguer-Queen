import React from 'react'
import Header from '../components/header/Header'
import Sector from '../components/sector/ sector'
import Footer from '../components/footer/Footer'


const Hall = ()=>{
	return(
<div className='container-fluid p-0'>
<Header />
	<div >
	<Sector />
	</div>
	<div>
		<Footer />
	</div>
		</div>
		
	)
}
export default Hall
