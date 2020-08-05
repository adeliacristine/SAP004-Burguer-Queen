import React,{useState} from 'react'
import BtnP from '../button/button'
import Resumo from '../resumo/resumo'
import { Card, Accordion } from 'react-bootstrap'
import './menu.css'
import '../button/button.css'
//import Counter from './count'




const Menu = (props) => {
 // let [request, setRequest] = useState('')
  let [item, setItem] = useState ('')
  let [ price, setPrice] = useState('')
  const [count, setCount] = useState(1)

  const [itens, setNameItens] = useState([])
  const [prices, setPrices] = useState([])
  const [active, setActive] = useState(true);
  const [active2, setActive2] = useState(true)

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
  const customerRequest = (event, name, price) => {
    event.preventDefault()
    event.stopPropagation()
    console.log(name, price)

    let result = itens.findIndex(item => item.name === name)
    console.log(result)
    if (result >= 0) {
      let list = itens
      list[result].count ++
      setNameItens([...list])
    } else {
      setNameItens([...itens, {
        name,
        price, 
        count
      }])
    }

    console.log(itens)

    
    
    let activeFilter = event.target;
    activeFilter.classList.add('btnFood');
    setActive(false)
    setActive2(false);
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
            <a href='/' className='sectorCardBody' onClick={ (e) => customerRequest(e, 'Café Americano', 5)}>
              <p>Café americano</p>
              <p>R$5,00</p>
            <BtnP type='button' className= {active ? `btn btn-lg btn-warning btnFood` : `btn btn-lg btn-warning remove`}
              onClick={ (e) => customerRequest(e, 'Café americano', 5)}>Adicionar</BtnP>
            </a>
          </Accordion.Collapse>

          <Accordion.Collapse eventKey="0">
            <a href='/' className='sectorCardBody' onClick={ (e) => customerRequest(e, 'Café com leite', 7) }>
              <p>Café com leite</p>
              <p>R$7,00</p>          
            <BtnP type='button' className={active2 ? `btn btn-lg btn-warning btnFood` : `btn btn-lg btn-warning remove`}
              onClick={ (e) => customerRequest(e, 'Café com leite', 7)}>Adicionar</BtnP>
            </a>
          </Accordion.Collapse>

          <Accordion.Collapse eventKey="0">
            <a href='/' className='sectorCardBody' onClick={ (e) => customerRequest(e, 'Misto Quente', 10) }>
              <p>Misto Quente</p>
              <p> R$10,00</p>    
            <BtnP type='button' className={active ? `btn btn-lg btn-warning btnFood` : `btn btn-lg btn-warning remove`}
              disabled={!active} onClick={ (e) => customerRequest(e, 'Misto Quente', 10) }>Adicionar</BtnP>
            </a>
          </Accordion.Collapse>

          <Accordion.Collapse eventKey="0">
            <a href='/' className='sectorCardBody' onClick={ (e) => customerRequest(e, 'Suco de fruta natural', 7) }>
              <p>Suco de fruta natural</p>
              <p>R$7,00</p> 
            <BtnP type='button' className={active ? `btn btn-lg btn-warning btnFood` : `btn btn-lg btn-warning remove`}
              disabled={!active} onClick={ (e) => customerRequest(e, 'Suco de fruta natural', 7) } >Adicionar</BtnP>
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
            <a href='/' className='sectorCardName'>Hambúrgueres</a>
          </Accordion.Collapse>

          <Accordion.Collapse eventKey="1">
            <a href='/' className='sectorCardBody' onClick={ (e) => customerRequest(e, 'Hamburguer simples', 10) }>
              <p>Hambúrguer simples</p>
              <p>R$10,00</p>
            <BtnP type='button' className={active ? `btn btn-lg btn-warning btnFood` : `btn btn-lg btn-warning remove`}
              disabled={!active} onClick={ (e) => customerRequest(e, 'Hamburguer simples', 10) }>Adicionar</BtnP>
            </a>
          </Accordion.Collapse>

          <Accordion.Collapse eventKey="1">
            <a href='/' className='sectorCardBody' onClick={ (e) => customerRequest(e, 'Hamburguer duplo', 15) }>
              <p>Hambúrguer duplo</p>
              <p>R$15,00</p>
            <BtnP type='button' className={active ? `btn btn-lg btn-warning btnFood` : `btn btn-lg btn-warning remove`}
              disabled={!active} onClick={ (e) => customerRequest(e, 'Hamburguer duplo', 15) }>Adicionar</BtnP>
            </a>
          </Accordion.Collapse>

          <Accordion.Collapse className='sectorCardName' eventKey="1">
            <a href='/'className='sectorCardName' >Acompanhamentos</a>
          </Accordion.Collapse>
        
          <Accordion.Collapse eventKey="1">
            <a href='/' className='sectorCardBody' onClick={ (e) => customerRequest(e, 'Batata frita', 5) }>
              <p>Batata frita</p>
              <p>R$5,00</p>
            <BtnP type='button' className={active ? `btn btn-lg btn-warning btnFood` : `btn btn-lg btn-warning remove`}
              disabled={!active} onClick={ (e) => customerRequest(e, 'Batata frita', 5) }>Adicionar</BtnP>
            </a>
          </Accordion.Collapse>

          <Accordion.Collapse eventKey="1">
            <a href='/' className='sectorCardBody' onClick={ (e) => customerRequest(e, 'Anéis de cebola', 5) }>
              <p>Anéis de cebola</p>
              <p>R$5,00</p>
            <BtnP type='button' className={active ? `btn btn-lg btn-warning btnFood` : `btn btn-lg btn-warning remove`}
              disabled={!active} onClick={ (e) => customerRequest(e, 'Anéis de cebola', 5) }>Adicionar</BtnP>
            </a>
          </Accordion.Collapse>

          <Accordion.Collapse className='sectorCardName' eventKey="1">
            <a href='/' className='sectorCardName'>Bebidas</a>
          </Accordion.Collapse>

          <Accordion.Collapse eventKey="1">
            <a href='/' className='sectorCardBody' onClick={ (e) => customerRequest(e, 'Água 500ml', 5) }>
              <p>Água 500ml</p>
              <p>R$5,00</p>
              <BtnP type='button' className={active ? `btn btn-lg btn-warning btnFood` : `btn btn-lg btn-warning remove`}
                disabled={!active} onClick={ (e) => customerRequest(e, 'Água 500ml', 5) }>Adicionar</BtnP>
            </a>
          </Accordion.Collapse>

          <Accordion.Collapse eventKey="1">
            <a href='/' className='sectorCardBody' onClick={ (e) => customerRequest(e, 'Água 750ml', 7) }>
              <p>Água 750ml</p>
              <p> R$7,00</p>
            <BtnP type='button' className={active ? `btn btn-lg btn-warning btnFood` : `btn btn-lg btn-warning remove`}
              disabled={!active} onClick={ (e) => customerRequest(e, 'Água 750ml', 7) }>Adicionar</BtnP>
            </a>
          </Accordion.Collapse>

          <Accordion.Collapse eventKey="1">
            <a href='/' className='sectorCardBody' onClick={ (e) => customerRequest(e, 'Refrigerante 500ml', 7) }>
              <p>Refrigerante 500ml</p>
              <p>R$7,00</p>
            <BtnP type='button' className={active ? `btn btn-lg btn-warning btnFood` : `btn btn-lg btn-warning remove`}
              disabled={!active} onClick={ (e) => customerRequest(e, 'Refrigerante 500ml', 7) }>Adicionar</BtnP>
            </a>
          </Accordion.Collapse>

          <Accordion.Collapse eventKey="1">
            <a href='/' className='sectorCardBody' onClick={ (e) => customerRequest(e, 'Refrigerante 750ml', 10) }>
              <p>Refrigerante 750ml</p>
              <p>R$10,00</p>
            <BtnP type='button' className={active ? `btn btn-lg btn-warning btnFood` : `btn btn-lg btn-warning remove`}
              disabled={!active} onClick={ (e) => customerRequest(e, 'Refrigerante 750ml', 10) }>Adicionar</BtnP>
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
      <ul>
        {itens.map((item, index)=>{
          return(
            <li key = {index}>
              {item.name}
            </li>
          )
        })}
      </ul>
    </div>
    <div className='count'>
      <ul>
        {itens.map((item, index)=>{
          return(
            <li key = {index}>
              {item.price}
            </li>
          )
        })}
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
    <h2>Total</h2>
    <h2>R${total}</h2>
</div>
  <Resumo />
</div>
    </>
  )
}

export default Menu