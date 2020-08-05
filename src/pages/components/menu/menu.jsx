import React, { useState } from 'react'
import BtnP from '../button/button'
import Resumo from '../resumo/resumo'
import { Card, Accordion } from 'react-bootstrap'
import './menu.css'
import '../button/button.css'
//import Counter from './count'




const Menu = (props) => {

  const [itens, setNameItens] = useState([])
  // let [request, setRequest] = useState('')
 // let [item, setItem] = useState('')
 // let [price, setPrice] = useState('')
  //const [count, setCount] = useState(1)
 const [quantity, setQuantity]= useState(1)
  //const [prices, setPrices] = useState([])
 // const [active, setActive] = useState(true);
  //const [active2, setActive2] = useState(true)
  const increment = () => setQuantity(quantity + 1)
  const equal = () => setQuantity(quantity)
  const decrement = () => setQuantity(quantity - 1)
 //const reset = () => setQuantity(0)
 const [order, setOrder] = useState([])
 // let [total, setTotal] = useState(price)

  //const somar = () => setTotal(total => total + price);
  /*const somar = useCallback(()  => setTotal(total => total + price),[total]);*/
  // let [mult, setMult] = useState(total)
  //setMult(+total)
  // console.log(mult)
  //const subtrair = useCallback(()  => setTotal(total => total - price),[total]);
  //const counterMult = total * count;

  /*const handleClick = (e) => {
    e.preventDefault()
    increment();*/
    
    // counterMult();
  

 /* const handleClickIn = (e) => {
    e.preventDefault()
    decrement();*/
    // subtrair();
  
  const customerRequest = (event, name, price) => {
    event.preventDefault()
  
    setNameItens([...itens, {
      name,
      price,
      quantity
     
  }])
 /* if (name === 'Café americano'){
    equal()
  }else{
    increment(*/
    } 

 /*const index = itens.map(item =>item.name === name )
 if (setNameItens === name){
  increment()
}else{
 equal()
}
console.log(equal)*/


/*
  const itemIndex = itens.findIndex(item => item === name)
  console.log(itens.find)
    console.log(name)
console.log(itemIndex===-1)
console.log(itemIndex)
    console.log(quantity)
    if (itemIndex === '-1'){
      equal()
  } else { 
    
    increment()
      
  }*/
 // const addOrder = (selectedItem) => {
    //const findItem = order.find(item => item.name === name)
    //console.log(selectedItem)
   // console.log(findItem)
//if(findItem ){
       /* increment()
        setOrder([...order]);
    } else {
        //selectedItem.quantity = 1;
        equal()
        setOrder([...order, name]);
    }*/

  
  console.log(order)
      console.log(quantity)

 

  /*  let activeFilter = event.target;
    activeFilter.classList.add('btnFood');
    setActive(false)
    setActive2(false);*/
  

  return (
    <>
      <div className='center'>
        <div>
          <Accordion>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={BtnP} variant="secondary" size="lg" eventKey="0">
                  Café da Manhã
              </Accordion.Toggle>
              </Card.Header>

              <Accordion.Collapse className='sectorcard' eventKey="0">

                <Card.Body href='/' className='sectorCardBody'>Café americano R$5,00
                  <BtnP type='button' className='btn btn-lg btn-warning btnFood'
                     onClick={(e) => customerRequest(e, 'Café americano', 5)}>Adicionar</BtnP>
                </Card.Body>
              </Accordion.Collapse>

              <Accordion.Collapse eventKey="0">
                <Card.Body className='sectorCardBody'>Café com leite R$7,00
                  <BtnP type='button' className='btn btn-lg btn-warning btnFood'
                     onClick={(e) => customerRequest(e, 'Café com leite', 7)}>Adicionar</BtnP>
                </Card.Body>
              </Accordion.Collapse>

          <Accordion.Collapse eventKey="0">
                <Card.Body className='sectorCardBody'>Misto Quente R$10,00
            <BtnP type='button' className='btn btn-lg btn-warning btnFood'
                    onClick={(e) => customerRequest(e, 'Misto Quente', 10)}>Adicionar</BtnP>
                </Card.Body>
              </Accordion.Collapse>

              <Accordion.Collapse eventKey="0">
                <Card.Body className='sectorCardBody' >Suco de fruta natural R$7,00
            <BtnP type='button' className='btn btn-lg btn-warning btnFood'
                    onClick={(e) => customerRequest(e, 'Suco de fruta natural', 7)} >Adicionar</BtnP>
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

          <Accordion.Collapse className='sectorCardName' eventKey="1">
            <Card.Body  className='sectorCardName'>Hambúrgueres</Card.Body>
          </Accordion.Collapse>

          <Accordion.Collapse eventKey="1">
            <Card.Body className='sectorCardBody'>Hamburguer simples R$10,00
            <BtnP type='button' className='btn btn-lg btn-warning btnFood'
              onClick={ (e) => customerRequest(e, 'Hamburguer simples', 10) }>Adicionar</BtnP>
            </Card.Body>
          </Accordion.Collapse>

          <Accordion.Collapse eventKey="1">
            <Card.Body className='sectorCardBody'>Hamburguer duplo R$15,00
            <BtnP type='button' className='btn btn-lg btn-warning btnFood'
              onClick={ (e) => customerRequest(e, 'Hamburguer duplo', 15) }>Adicionar</BtnP>
            </Card.Body>
          </Accordion.Collapse>

          <Accordion.Collapse className='sectorCardName' eventKey="1">
            <Card.Body className='sectorCardName' >Acompanhamentos</Card.Body>
          </Accordion.Collapse>

          <Accordion.Collapse eventKey="1">
            <Card.Body className='sectorCardBody' >Batata frita R$5,00

            <BtnP type='button' className='btn btn-lg btn-warning btnFood'
              onClick={ (e) => customerRequest(e, 'Batata frita', 5) }>Adicionar</BtnP>
            </Card.Body>
          </Accordion.Collapse>

          <Accordion.Collapse eventKey="1">
            <Card.Body className='sectorCardBody'>Anéis de cebola R$5,00

            <BtnP type='button' className='btn btn-lg btn-warning btnFood'
              onClick={ (e) => customerRequest(e, 'Anéis de cebola', 5) }>Adicionar</BtnP>
            </Card.Body>
          </Accordion.Collapse>

          <Accordion.Collapse className='sectorCardName' eventKey="1">
            <Card.Body className='sectorCardName'>Bebidas</Card.Body>
          </Accordion.Collapse>

          <Accordion.Collapse eventKey="1">
            <Card.Body className='sectorCardBody'>Água 500ml R$5,00
              <BtnP type='button' className='btn btn-lg btn-warning btnFood'
                onClick={ (e) => customerRequest(e, 'Água 500ml', 5) }>Adicionar</BtnP>
            </Card.Body>
          </Accordion.Collapse>

          <Accordion.Collapse eventKey="1">
            <Card.Body className='sectorCardBody'>Água 750ml R$7,00

            <BtnP type='button' className='btn btn-lg btn-warning btnFood'
              onClick={ (e) => customerRequest(e, 'Água 750ml', 7) }>Adicionar</BtnP>
            </Card.Body>
          </Accordion.Collapse>

          <Accordion.Collapse eventKey="1">
            <Card.Body className='sectorCardBody' >Refrigerante 500ml R$7,00

            <BtnP type='button' className='btn btn-lg btn-warning btnFood'
              onClick={ (e) => customerRequest(e, 'Refrigerante 500ml', 7) }>Adicionar</BtnP>
            </Card.Body>
          </Accordion.Collapse>

          <Accordion.Collapse eventKey="1">
            <Card.Body className='sectorCardBody' >Refrigerante 759ml R$10,00

            <BtnP type='button' className='btn btn-lg btn-warning btnFood'
              onClick={ (e) => customerRequest(e, 'Refrigerante 750ml', 10) }>Adicionar</BtnP>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>

  </div>
    </div>
      <div>
        <h2 className='title'>Resumo</h2>
        <div className='resumo bg-dark'>
          <h2>Item</h2>
          <h2>Valor</h2>
          <h2>Quantidade</h2>
        </div>
      <div className='resumo'>
      <div className='count'>
        <ul>
          <li>
          {/*  <p>{item}</p>*/}
          </li>
        </ul>
      <ul>
        {itens.map((item)=>{
          
          return(
            <li kay ={item.name}>
              {item.name}
            </li>
          )
        })}
      </ul>
    </div>
    <div className='count'>
      <ul>
        {itens.map((item)=>{
          return(
            <li kay ={item.price}>
              {item.price}
            </li>
          )
        })}
      </ul>
  </div>
<div className='count'>
<ul>
        {itens.map((item)=>{
         
         
          return(
            <li kay ={item.quantity}>
              {item.quantity}<BtnP className='btn btn-lg btn-warning btnFood' onClick={decrement}>X</BtnP>
            </li>
          )
        })}
      </ul>
 
</div>
</div>
  <div className='count'>
    <h2>Total</h2>
    <h2>valor</h2>
</div>
  <Resumo />
</div>
    </>
  )
}

export default Menu