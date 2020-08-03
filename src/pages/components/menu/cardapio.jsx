import React from 'react'
import { Card, Accordion } from 'react-bootstrap'
import './menu.css'

const Cardapio = props =>{
	return(
		<div>
<Accordion>
        <Card>
          <Card.Header>
        <Accordion.Toggle className='sectorcard'{...props}/>
          </Card.Header>
          <Accordion.Collapse {...props}>
        <Card.Body className='sectorCardBody' {...props} />
          </Accordion.Collapse>
		  </Card>
      </Accordion>
		</div>
		
	)
}
export default Cardapio