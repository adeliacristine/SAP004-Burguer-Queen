import React from 'react';
import { Card, Accordion } from 'react-bootstrap';
import BtnP from '../../button/button';
import '../menu.css';

const AccHeader = (props) => {
  return (
    <Card.Header>
			<Accordion.Toggle 
				as={BtnP} variant='secondary' size='lg' className='sectorcard' {...props}
      />
    </Card.Header>
  );
};

export default AccHeader;
