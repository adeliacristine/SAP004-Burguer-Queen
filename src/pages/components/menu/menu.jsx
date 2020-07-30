import React,{useState} from 'react'
import BtnP from '../button/button'

import { Card, Accordion } from 'react-bootstrap'
import './menu.css'
//import Cardapio from './cardapio'



const Menu = (props) => {
  let [request, setRequest] = useState('')


  const customerRequest =(event)=>{
    event.preventDefault()
    setRequest('Pedido1')
  }

  return (
    <>
    <div>
      <Accordion>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={BtnP} variant="secondary" size="lg" eventKey="0">
              Café da Manhã
      </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse className='sectorcard' eventKey="0">
            <Card.Body className='sectorCardBody'>Café americano            R$5,00
      <BtnP type='button' className='btn btn-lg btn-warning btnFood' onClick={customerRequest}>Adicionar</BtnP>
            </Card.Body>
          </Accordion.Collapse>

          <Accordion.Collapse eventKey="0">
            <Card.Body className='sectorCardBody'>Café com leite              R$7,00
      <BtnP type='button' className='btn btn-lg btn-warning btnFood'onClick={customerRequest} >Adicionar</BtnP>
            </Card.Body>
          </Accordion.Collapse>

          <Accordion.Collapse eventKey="0">
            <Card.Body className='sectorCardBody'>Misto Quente          R$10,00
      <BtnP type='button' className='btn btn-lg btn-warning btnFood'onClick={customerRequest} >Adicionar</BtnP>
            </Card.Body>
          </Accordion.Collapse>

          <Accordion.Collapse eventKey="0">
            <Card.Body className='sectorCardBody'>Suco de fruta natural             R$7,00
      <BtnP type='button' className='btn btn-lg btn-warning btnFood'onClick={customerRequest} >Adicionar</BtnP>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
        
        </div>
        <div>
        <Accordion>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={BtnP} variant="secondary" size="lg" eventKey="1">
            Resto do dia
      </Accordion.Toggle>
          </Card.Header>

          <Accordion.Collapse className='sectorcard' eventKey="1">
            <Card.Body className='sectorCardName'>Hambúgueres
            </Card.Body>
          </Accordion.Collapse>

          <Accordion.Collapse eventKey="1">
            <Card.Body className='sectorCardBody'>Hambúguer simples R$10,00
      <BtnP type='button' className='btn btn-lg btn-warning btnFood'onClick={customerRequest} >Adicionar</BtnP>
            </Card.Body>
          </Accordion.Collapse>

          <Accordion.Collapse eventKey="1">
            <Card.Body className='sectorCardBody'>Hambúrguer duplo  R$15,00
      <BtnP type='button' className='btn btn-lg btn-warning btnFood' onClick={customerRequest}>Adicionar</BtnP>
            </Card.Body>
          </Accordion.Collapse>

          <Accordion.Collapse eventKey="1">
            <Card.Body className='sectorCardName'>Acompanhamentos
            </Card.Body>
          </Accordion.Collapse>
        
          <Accordion.Collapse eventKey="1">
            <Card.Body className='sectorCardBody'>Batata frita R$5,00
      <BtnP type='button' className='btn btn-lg btn-warning btnFood' onClick={customerRequest}>Adicionar</BtnP>
            </Card.Body>
          </Accordion.Collapse>

          <Accordion.Collapse eventKey="1">
            <Card.Body className='sectorCardBody'>Anéis de cebola R$5,00
      <BtnP type='button' className='btn btn-lg btn-warning btnFood'onClick={customerRequest}>Adicionar</BtnP>
            </Card.Body>
          </Accordion.Collapse>

          <Accordion.Collapse eventKey="1">
            <Card.Body className='sectorCardName'>Bebidas
            </Card.Body>
          </Accordion.Collapse>

          <Accordion.Collapse eventKey="1">
            <Card.Body className='sectorCardBody'>Água 500ml R$5,00
      <BtnP type='button' className='btn btn-lg btn-warning btnFood'onClick={customerRequest}>Adicionar</BtnP>
            </Card.Body>
          </Accordion.Collapse>

          <Accordion.Collapse eventKey="1">
            <Card.Body className='sectorCardBody'>Água 750ml R$7,00
      <BtnP type='button' className='btn btn-lg btn-warning btnFood'onClick={customerRequest}>Adicionar</BtnP>
            </Card.Body>
          </Accordion.Collapse>

          <Accordion.Collapse eventKey="1">
            <Card.Body className='sectorCardBody'>Refrigerante 500ml R$7,00
      <BtnP type='button' className='btn btn-lg btn-warning btnFood'onClick={customerRequest}>Adicionar</BtnP>
            </Card.Body>
          </Accordion.Collapse>

          <Accordion.Collapse eventKey="1">
            <Card.Body className='sectorCardBody'>Refrigerante 750ml R$10,00
      <BtnP type='button' className='btn btn-lg btn-warning btnFood'onClick={customerRequest}>Adicionar</BtnP>
            </Card.Body>
          </Accordion.Collapse>

        </Card>
        
      </Accordion>
    
<div>
  <p>{request}</p>
</div>
        </div>
    </>
  )
}
export default Menu