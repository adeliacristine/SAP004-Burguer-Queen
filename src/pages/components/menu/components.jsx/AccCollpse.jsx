import React from 'react';
import { AccordionCollapse } from 'react-bootstrap';
import '../menu.css';

const Collapse = (props) => {
  return (
    <AccordionCollapse className='sectorcard' {...props}></AccordionCollapse>
  );
};

export default Collapse;
