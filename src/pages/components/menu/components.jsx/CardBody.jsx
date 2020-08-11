import React from 'react';
import { Card } from 'react-bootstrap';
import '../menu.css';

const CardBody = (props) => {
  return <Card.Body className='sectorCardBody' {...props} />;
};

export default CardBody;
