import React, { useState } from "react";
import BtnP from "../button/button";
import Resumo from "../resumo/resumo";
import { Card, Accordion, Modal, Form } from "react-bootstrap";
import "./menu.css";
import "../button/button.css";
import AccHeader from './componentes.jsx/CardHeader';
import CardBody from './componentes.jsx/CardBody';
import Collapse from './componentes.jsx/AccCollpse';

const Menu = () => {
  const [itens, setNameItens] = useState([]);
  const [count, setCount] = useState(1);
  const [show, setShow] = useState(false);
  const [checked, setChecked] = useState("");
  const [request, setRequest] = useState([]);

  const handleClose = () => setShow(false);

  const handleAdd = (event) => {
    event.preventDefault();
    let result = itens.findIndex(
      (item) => item.name === request.name && item.add === request.add);
    
    if (result >= 0) {
      let list = itens;
      list[result].count++;
      setNameItens([...list]);

    } else {
      setNameItens([
        ...itens,
        {
          name: request.name,
          price: request.price,
          add: checked,
          count: count,
        },
      ]);
    }

    setShow(false);
  };

  const handleShow = (event, name, price) => {
    event.preventDefault();
    setRequest({ name, price });
    setShow(true);
  };

  const customerRequest = (event, name, price) => {
    event.preventDefault();
    let result = itens.findIndex((item) => item.name === name);
    
    if (result >= 0) {
      let list = itens;
      list[result].count++;
      setNameItens([...list]);
    } else {
      setNameItens([
        ...itens,
        {
          name,
          price,
          count,
        },
      ]);
    }
  };

  const deleteItem = (event, name) => {
    event.preventDefault();
    let result = itens.findIndex((item) => item.name === name);
    console.log(result);
    if (itens[result].count > 1) {
      itens[result].count--;
      setNameItens([...itens]);
    } else {
      const newItens = itens.filter((item, index) => index !== result);
      setNameItens(newItens);
    }
  };
  
  const clearItens = () => {
    setNameItens([])
  }

  let totalPrice = itens.reduce(
    (total, item) => total + item.price * item.count,0);
  return (
    <>
          <Accordion>
            <Card>
              <AccHeader eventKey="0">Café da Manhã</AccHeader>

              <Collapse eventKey="0">
                <CardBody> Café americano R$5,00
              <BtnP type="button" className="btn btn-lg btn-warning btnFood" onClick={(e) => customerRequest(e, "Café americano", 5)}>Adicionar </BtnP>
                </CardBody>
              </Collapse>

              <Collapse eventKey="0">
                <CardBody> Café com leite R$7,00
              <BtnP type="button" className="btn btn-lg btn-warning btnFood"  onClick={(e) => customerRequest(e, "Café com leite", 7)}>Adicionar </BtnP>
                </CardBody>
              </Collapse>

              <Collapse eventKey="0">
                <CardBody>   Misto Quente R$10,00
              <BtnP type="button" className="btn btn-lg btn-warning btnFood"  onClick={(e) => customerRequest(e, "Misto Quente", 10)}>Adicionar </BtnP>
                </CardBody>
              </Collapse>

              <Collapse eventKey="0">
                <CardBody>    Suco de fruta natural R$7,00
              <BtnP type="button" className="btn btn-lg btn-warning btnFood"  onClick={(e) => customerRequest(e, "Suco de fruta natural", 7)}>Adicionar </BtnP>
                </CardBody>
              </Collapse>

            </Card>
          </Accordion>
        
          <Accordion>
            <Card>
              <AccHeader eventKey="1">Resto do dia</AccHeader>

              <Collapse className="sectorCardName" eventKey="1">
                <CardBody className="sectorCardName">Hambúrgueres</CardBody>
              </Collapse>

              <Collapse eventKey="1">
                <CardBody>  Hamburguer simples R$10,00
                <BtnP type="button" className="btn btn-lg btn-warning btnFood" onClick={(e) => handleShow(e, "Hamburguer simples", 10)}> Adicionar </BtnP>
                </CardBody>
              </Collapse>

              <Collapse eventKey="1">
                <CardBody>Hamburguer duplo R$15,00
                <BtnP type="button" className="btn btn-lg btn-warning btnFood" onClick={(e) => handleShow(e, 'Hamburguer duplo', 15)}> Adicionar </BtnP>
                </CardBody>
              </Collapse>

              <Collapse className="sectorCardName" eventKey="1">
                <CardBody className="sectorCardName"> Acompanhamentos</CardBody>
              </Collapse>

              <Collapse eventKey="1">
                <CardBody>  Batata frita R$5,00
                <BtnP type="button" className="btn btn-lg btn-warning btnFood"   onClick={(e) => customerRequest(e, "Batata frita", 5)}> Adicionar </BtnP>
                </CardBody>
              </Collapse>
              
              <Collapse eventKey="1">
                <CardBody> Anéis de cebola R$5,00
                <BtnP type="button" className="btn btn-lg btn-warning btnFood"   onClick={(e) => customerRequest(e, "Anéis de cebola", 5)}> Adicionar </BtnP>
                </CardBody>
              </Collapse>

              <Collapse className="sectorCardName" eventKey="1">
                <CardBody className="sectorCardName"> Bebidas</CardBody>
              </Collapse>

              <Collapse eventKey="1">
                <CardBody> Água 500ml R$5,00
                <BtnP type="button" className="btn btn-lg btn-warning btnFood"   onClick={(e) => customerRequest(e, "Água 500ml", 5)}> Adicionar </BtnP>
                </CardBody>
              </Collapse>

              <Collapse eventKey="1">
                <CardBody>   Água 750ml R$7,00
                <BtnP type="button" className="btn btn-lg btn-warning btnFood"   onClick={(e) => customerRequest(e, "Água 750ml", 7)}> Adicionar </BtnP>
                </CardBody>
              </Collapse>

              <Collapse eventKey="1">
                <CardBody>  Refrigerante 500ml R$7,00
                <BtnP type="button" className="btn btn-lg btn-warning btnFood"   onClick={(e) => customerRequest(e, "Refrigerante 500ml", 7)}> Adicionar </BtnP>
                </CardBody>
              </Collapse>

              <Collapse eventKey="1">
                <CardBody>   Refrigerante 750ml R$10,00
                <BtnP type="button" className="btn btn-lg btn-warning btnFood"   onClick={(e) => customerRequest(e, "Refrigerante 750ml", 10)}> Adicionar </BtnP>
                </CardBody>
              </Collapse>

              <Collapse className="sectorCardName" eventKey="1">
                <CardBody className="sectorCardName">  Adicionais</CardBody>
              </Collapse>

              <Collapse eventKey="1">
                <CardBody> Ovo R$1,00
                <BtnP type="button" className="btn btn-lg btn-warning btnFood" onClick={(e) => customerRequest(e, "Ovo", 1)}> Adicionar </BtnP>
                </CardBody>
              </Collapse>

              <Collapse eventKey="1">
                <CardBody> Queijo R$1,00
                <BtnP type="button" className="btn btn-lg btn-warning btnFood"   onClick={(e) => customerRequest(e, "Queijo", 1)}> Adicionar </BtnP>
                </CardBody>
              </Collapse>
            </Card>
          </Accordion>

        <h2 className="title">Resumo</h2>

      <div className="resumo bg-dark">
        <h2>Item</h2>
        <h2>Valor</h2>
        <h2>Quantidade</h2>
      </div>

      <div>
        <div className="resumo">
          <div className="count">
            <ul>
              {itens.map((item, index) => {
                return (
                  <div>
                    <li key={index}>
                      {item.name} {` `}
                      {item.add}
                    </li>
                  </div>
                );
              })}
            </ul>
          </div>
          <div className="count">
            <ul>
              {itens.map((item, index) => {
                return <li key={index}>R${item.price},00</li>;
              })}
            </ul>
          </div>
          <div className="count">
            <ul>
              {itens.map((item, index) => {
                return (
                  <li key={index}>
                    {item.count}
                    <BtnP className="btn btn-lg btn-warning btnFood"onClick={(e) => deleteItem(e, item.name)}>X</BtnP>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div>
          <div className="count">
            <h2>Total</h2>
            <h2>R${totalPrice},00</h2>
          </div>
          <div>
            <Resumo order={itens} total={totalPrice} clearItens={clearItens}  />
          </div>
        </div>
      </div>

      <Modal show={show}>
        <Modal.Header >
          <Modal.Title>Adicionais</Modal.Title>
        </Modal.Header>
        <Modal.Body>Escolha seu sabor.</Modal.Body>
        <Modal.Body>
          <Form>
            <Form.Check type="switch" id="frango" label="Frango" onChange={() => setChecked("Frango")}/>
            <Form.Check type="switch"id="carne "label="Carne bovina"onChange={() => setChecked("Carne bovina")}/>
            <Form.Check type="switch"id="Vegetariano"label="Vegetariano"onChange={() => setChecked("Vegetariano")}/>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <BtnP variant="secondary sizeModal" onClick={handleClose}>Cancelar</BtnP>
          <BtnP variant="warning sizeModal" onClick={handleAdd}>Adicionar</BtnP>
        </Modal.Footer>
      </Modal>
    </>
  );
};


export default Menu