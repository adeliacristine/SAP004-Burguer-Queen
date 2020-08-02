import React, {useState} from 'react'
import BtnP from '../button/button'
import '../input/input.css'
import '../label/label.css'
import { Form } from 'react-bootstrap'
import './resumo.css'



const Resumo = props => {
  const [menu, setMenu] = useState('')
  //console.log('pedido enviado')
  //console.log({menu})

  const RequestMenu = (element) => {
    setMenu(element)
   /* props.saveMenu(element)*/
  }
  return (
    <>
    
    <Form className='form' >  {/* onSubmit={function handleSubmit(event){
      event.preventDefault();
      console.log('testando o form')
      setMenu([
        ...menu
      ]);
    }} */}
      <Form.Group >
        <Form.Label className='label'>Nome </Form.Label>
        <Form.Control className='input' type="text"  onChange={e => RequestMenu(e.target.value)} />

      </Form.Group>

      <Form.Group >
        <Form.Label className='label'>Mesa</Form.Label>
        <Form.Control className='input' type="text"  onChange={e => RequestMenu(e.target.value)} />
      </Form.Group>

      <BtnP variant="warning btnLogCad" type="submit" onClick={Resumo}>
        Enviar
  </BtnP>
    </Form>
  

</>


  )
}
export default Resumo