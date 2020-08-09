import React from 'react'
import { Card, Accordion } from 'react-bootstrap'
import '../menu.css'
import BtnP from '../../button/button'

const AccHeader = props => {
	return (
		<Card.Header>
			<Accordion.Toggle as={BtnP}
				variant="secondary"
				size="lg"
				className='sectorcard'{...props} />
		</Card.Header>

	)
}
export default AccHeader