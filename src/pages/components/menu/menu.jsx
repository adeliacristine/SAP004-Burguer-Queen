import React,{useState} from 'react'
import BtnP from '../button/button'
import Resumo from '../resumo/resumo'
import { Card, Accordion } from 'react-bootstrap'
import './menu.css'
//import Counter from './count'




const Menu = (props) => {
 // let [request, setRequest] = useState('')
  let [item, setItem] = useState ('')
  let [ price, setPrice] = useState('')
  const [count, setCount] = useState(0)

  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)
  const reset = () => setCount(0)
  let [total, setTotal] = useState(price)

  const somar = ()  => setTotal(total => total + price);
  /*const somar = useCallback(()  => setTotal(total => total + price),[total]);*/
 // let [mult, setMult] = useState(total)
 //setMult(+total)
// console.log(mult)
  //const subtrair = useCallback(()  => setTotal(total => total - price),[total]);
//const counterMult = total * count;



const handleClick = (e) =>{
  e.preventDefault()
  increment();
  somar();
 // counterMult();
}

const handleClickIn =(e) =>{
  e.preventDefault()
  decrement();
 // subtrair();
}
  const customerRequest =(event)=>{
    event.preventDefault()
    
    let target = event.target;
     //setRequest(target.textContent)
 setItem(target.firstChild.textContent)
 setPrice(target.children[1].textContent)
 setTotal(target.children[1].textContent)
   
     //console.log(target.textContent)
     console.log(target.firstChild.textContent)
     console.log(target.children[1].textContent)
    // console.log(target.innerText)
  
  }

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
            <a href='/' className='sectorCardBody' onClick={customerRequest}><p>Café americano</p><p>5,00</p>{/*<p className='btn btn-lg btn-warning btnFood'>Adicionar</p>*/}
            </a>
          </Accordion.Collapse>

          <Accordion.Collapse eventKey="0">
            <a href='/' className='sectorCardBody' onClick={customerRequest}><p>Café com leite</p><p>R$7,00</p>          
     {/* <BtnP type='button' className='btn btn-lg btn-warning btnFood'onClick={customerRequest} >Adicionar</BtnP>*/}
            </a>
          </Accordion.Collapse>

          <Accordion.Collapse eventKey="0">
            <a href='/' className='sectorCardBody'onClick={customerRequest} ><p>Misto Quente</p><p> R$10,00</p>    
     {/* <BtnP type='button' className='btn btn-lg btn-warning btnFood'onClick={customerRequest} >Adicionar</BtnP>*/}
            </a>
          </Accordion.Collapse>

          <Accordion.Collapse eventKey="0">
            <a href='/' className='sectorCardBody'onClick={customerRequest}><p>Suco de fruta natural</p><p>R$7,00</p> 
{/*      <BtnP type='button' className='btn btn-lg btn-warning btnFood'onClick={customerRequest} >Adicionar</BtnP>*/}
            </a>
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
            <a href='/' className='sectorCardName'>Hambúgueres
            </a>
          </Accordion.Collapse>

          <Accordion.Collapse eventKey="1">
            <a href='/' className='sectorCardBody'onClick={customerRequest}><p>Hambúguer simples</p><p>R$10,00</p>
{/*      <BtnP type='button' className='btn btn-lg btn-warning btnFood'  onClick={customerRequest}>Adicionar</BtnP>*/}
            </a>
          </Accordion.Collapse>

          <Accordion.Collapse eventKey="1">
            <a href='/' className='sectorCardBody'onClick={customerRequest}><p>Hambúrguer duplo</p><p> R$15,00</p>
     {/* <BtnP type='button' className='btn btn-lg btn-warning btnFood' onClick={customerRequest}>Adicionar</BtnP>*/}
            </a>
          </Accordion.Collapse>

          <Accordion.Collapse className='sectorCardName' eventKey="1">
            <a href='/'className='sectorCardName' >Acompanhamentos
            </a>
          </Accordion.Collapse>
        
          <Accordion.Collapse eventKey="1">
            <a href='/' className='sectorCardBody'onClick={customerRequest}><p>Batata frita</p><p>R$5,00</p>
     {/* <BtnP type='button' className='btn btn-lg btn-warning btnFood' onClick={customerRequest}>Adicionar</BtnP>
           */} </a>
          </Accordion.Collapse>

          <Accordion.Collapse eventKey="1">
            <a href='/' className='sectorCardBody'onClick={customerRequest}><p>Anéis de cebola</p><p>R$5,00</p>
      {/*<BtnP type='button' className='btn btn-lg btn-warning btnFood'onClick={customerRequest}>Adicionar</BtnP>*/}
            </a>
          </Accordion.Collapse>

          <Accordion.Collapse className='sectorCardName' eventKey="1">
            <a href='/' className='sectorCardName'>Bebidas
            </a>
          </Accordion.Collapse>

          <Accordion.Collapse eventKey="1">
            <a href='/' className='sectorCardBody'onClick={customerRequest}><p>Água 500ml</p><p> R$5,00</p>
{/*      <BtnP type='button' className='btn btn-lg btn-warning btnFood'onClick={customerRequest}>Adicionar</BtnP>*/}
            </a>
          </Accordion.Collapse>

          <Accordion.Collapse eventKey="1">
            <a href='/' className='sectorCardBody'onClick={customerRequest}><p>Água 750ml</p><p> R$7,00</p>
{/*      <BtnP type='button' className='btn btn-lg btn-warning btnFood'onClick={customerRequest}>Adicionar</BtnP>*/}
            </a>
          </Accordion.Collapse>

          <Accordion.Collapse eventKey="1">
            <a href='/' className='sectorCardBody'onClick={customerRequest}><p>Refrigerante 500ml</p><p> R$7,00</p>
    {/*  <BtnP type='button' className='btn btn-lg btn-warning btnFood'onClick={customerRequest}>Adicionar</BtnP>*/}
            </a>
          </Accordion.Collapse>

          <Accordion.Collapse eventKey="1">
            <a href='/' className='sectorCardBody'onClick={customerRequest}><p>Refrigerante 750ml</p> <p>R$10,00</p>
{/*      <BtnP type='button' className='btn btn-lg btn-warning btnFood'onClick={customerRequest}>Adicionar</BtnP>*/}
            </a>
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
   <p>{item}</p>
   </li>
 </ul>
   
     {/*<ul>
      {item.array((item)=>{
        return(
          <li kay ={item}>
            {item}
          </li>
        )
      })}
    </ul>*/}

   </div>

 <div className='count'>
 <ul>
   <li>
   <p>R${price}</p>
   </li>
 </ul>
 </div>
 <div className='count'>

<BtnP className='btnCount btn btn-warning' onClick={handleClickIn}>-1</BtnP>
<p className=''>{count}</p>
<BtnP className='btnCount btn btn-warning' onClick={handleClick}>+1</BtnP>
<BtnP className='btnCount btn btn-warning' onClick={reset}>X</BtnP>
</div>
 
 </div>
 <div className='count'>
   <h2>Total</h2><h2 >R${total}</h2>
 </div>

  <Resumo />
</div>
    </>
  )
}
export default Menu