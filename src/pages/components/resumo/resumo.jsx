import React, {useState} from 'react'
import { firebaseConfig } from '../../../plugins/firebaseConfig'
import 'firebase/firestore'

import BtnP from '../button/button'
import '../input/input.css'
import '../label/label.css'
import { Form } from 'react-bootstrap'
import './resumo.css'

const Resumo = ({order, clearItens, total}) => {
  
  const [name, setName] = useState ('')
  const [table, setTable] = useState('')

  const sendOrder = (event) => {
    event.preventDefault()
    if (!name || !table) {
      alert('Preencha os campos')
    } else {
    const clientOrder = firebaseConfig.firestore().collection('orders')
      clientOrder
        .doc()
        .set({
          name,
          table,
          order
        })
        setName('')
        setTable('')
        clearItens()
        alert('Pedido salvo com sucesso')
    }
  }

  console.log(order);
  console.log(total)

  const [menu, setMenu] = useState('')
  //console.log('pedido enviado')
  console.log(menu)

 
  
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
        <Form.Control className='input' type="text" value={name} onChange={e => setName(e.target.value)} />
      </Form.Group>
      <Form.Group >
        <Form.Label className='label'>Mesa</Form.Label>
        <Form.Control className='input' type="number" value={table} onChange={e => setTable(e.target.value)} />
      </Form.Group>
      <BtnP variant="warning btnLogCad" type="submit" onClick={sendOrder}>
      Confirmar R${total},00
  </BtnP>
    </Form>
</>
  )
}

export default Resumo