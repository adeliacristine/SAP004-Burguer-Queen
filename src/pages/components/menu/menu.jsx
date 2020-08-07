import React, { useState } from "react";
import BtnP from "../button/button";
import Resumo from "../resumo/resumo";
import { Card, Accordion, Modal, Form } from "react-bootstrap";
import "./menu.css";
import "../button/button.css";
//import Counter from './count'

const Menu = () => {
  const [itens, setNameItens] = useState([]);
  const [count, setCount] = useState(1);
  const [show, setShow] = useState(false);
  // const [carne, setCarne]=useState('')
  const [checked, setChecked] = useState("");
  const [check, setCheck] = useState([]);
  const [teste, setTeste] = useState([]);
  // setCarne()
  // console.log(checked)
  // console.log(check)
  console.log(itens);

  const handleClose = () => setShow(false);

  const handleAdd = (event) => {
    event.preventDefault();
    console.log(event.target);
    console.log(teste);
    let result = itens.findIndex((item) => item.name === teste.name);

    if (result >= 0) {
      let list = itens;
      list[result].count++;
      setNameItens([...list]);
      console.log([...list]);
    } else {
      console.log("else");
      console.log(teste);
      console.log(checked);
      console.log(count);
      console.log(check);
      setNameItens([
        ...itens,
        {
          name: teste.name,
          price: teste.price,
          add: checked,
          extra: check.name,
          valor:check.valor,
          count: count,
        },
      ]);

      console.log(totalPrice);
    }

    setShow(false);
  };
  const handleShow = (event, name, price) => {
    event.preventDefault();
    setTeste({ name, price });
    setShow(true);
  };

  const customerRequest = (event, name, price) => {
    event.preventDefault();
    let result = itens.findIndex((item) => item.name === name);
    console.log(result);
    if (result >= 0) {
      let list = itens;
      list[result].count++;
      setNameItens([...list]);
      console.log([...list]);
    } else {
      setNameItens([
        ...itens,
        {
          name,
          price,
          count,
        },
      ]);

      console.log(totalPrice);
    }
  };

  const deleteItem = (event, name) => {
    event.preventDefault();
    let result = itens.findIndex((item) => item.name === name);
    console.log(result);
    if (itens[result].count > 1) {
      itens[result].count--;
      setNameItens([...itens]);
      console.log([...itens]);
    } else {
      const newItens = itens.filter((item, index) => index !== result);
      setNameItens(newItens);
    }
  };
  
  const clearItens = () => {
    setNameItens([])
  }

  let totalPrice = itens.reduce(
    (total, item) => total + item.price * item.count,
    0
  );

  return (
    <>
      <div className="center">
        <div>
          <Accordion>
            <Card>
              <Card.Header>
                <Accordion.Toggle
                  as={BtnP}
                  variant="secondary"
                  size="lg"
                  eventKey="0"
                >
                  Café da Manhã
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse className="sectorcard" eventKey="0">
                <Card.Body className="sectorCardBody">
                  Café americano R$5,00
                  <BtnP
                    type="button"
                    className="btn btn-lg btn-warning btnFood"
                    onClick={(e) => customerRequest(e, "Café americano", 5)}
                  >
                    Adicionar
                  </BtnP>
                </Card.Body>
              </Accordion.Collapse>

              <Accordion.Collapse eventKey="0">
                <Card.Body className="sectorCardBody">
                  Café com leite R$7,00
                  <BtnP
                    type="button"
                    className="btn btn-lg btn-warning btnFood"
                    onClick={(e) => customerRequest(e, "Café com leite", 7)}
                  >
                    Adicionar
                  </BtnP>
                </Card.Body>
              </Accordion.Collapse>

              <Accordion.Collapse eventKey="0">
                <Card.Body className="sectorCardBody">
                  Misto Quente R$10,00
                  <BtnP
                    type="button"
                    className="btn btn-lg btn-warning btnFood"
                    onClick={(e) => customerRequest(e, "Misto Quente", 10)}
                  >
                    Adicionar
                  </BtnP>
                </Card.Body>
              </Accordion.Collapse>

              <Accordion.Collapse eventKey="0">
                <Card.Body className="sectorCardBody">
                  Suco de fruta natural R$7,00
                  <BtnP
                    type="button"
                    className="btn btn-lg btn-warning btnFood"
                    onClick={(e) =>
                      customerRequest(e, "Suco de fruta natural", 7)
                    }
                  >
                    Adicionar
                  </BtnP>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </div>
        <div>
          <Accordion>
            <Card>
              <Card.Header>
                <Accordion.Toggle
                  as={BtnP}
                  variant="secondary"
                  size="lg"
                  eventKey="1"
                >
                  Resto do dia
                </Accordion.Toggle>
              </Card.Header>

              <Accordion.Collapse className="sectorCardName" eventKey="1">
                <Card.Body className="sectorCardName">Hambúrgueres</Card.Body>
              </Accordion.Collapse>

              <Accordion.Collapse eventKey="1">
                <Card.Body className="sectorCardBody">
                  Hamburguer simples R$10,00
                  <BtnP
                    type="button"
                    className="btn btn-lg btn-warning btnFood"
                    onClick={(e) => handleShow(e, "Hamburguer simples", 10)}
                  >
                    Adicionar
                  </BtnP>
                </Card.Body>
              </Accordion.Collapse>

              <Accordion.Collapse eventKey="1">
                <Card.Body className="sectorCardBody">
                  Hamburguer duplo R$15,00
                  <BtnP
                    type="button"
                    className="btn btn-lg btn-warning btnFood"
                    onClick={(e) => handleShow(e,'Hamburguer duplo', 15)}
                  >
                    Adicionar
                  </BtnP>
                </Card.Body>
              </Accordion.Collapse>

              <Accordion.Collapse className="sectorCardName" eventKey="1">
                <Card.Body className="sectorCardName">
                  Acompanhamentos
                </Card.Body>
              </Accordion.Collapse>

              <Accordion.Collapse eventKey="1">
                <Card.Body className="sectorCardBody">
                  Batata frita R$5,00
                  <BtnP
                    type="button"
                    className="btn btn-lg btn-warning btnFood"
                    onClick={(e) => customerRequest(e, "Batata frita", 5)}
                  >
                    Adicionar
                  </BtnP>
                </Card.Body>
              </Accordion.Collapse>

              <Accordion.Collapse eventKey="1">
                <Card.Body className="sectorCardBody">
                  Anéis de cebola R$5,00
                  <BtnP
                    type="button"
                    className="btn btn-lg btn-warning btnFood"
                    onClick={(e) => customerRequest(e, "Anéis de cebola", 5)}
                  >
                    Adicionar
                  </BtnP>
                </Card.Body>
              </Accordion.Collapse>

              <Accordion.Collapse className="sectorCardName" eventKey="1">
                <Card.Body className="sectorCardName">Bebidas</Card.Body>
              </Accordion.Collapse>

              <Accordion.Collapse eventKey="1">
                <Card.Body className="sectorCardBody">
                  Água 500ml R$5,00
                  <BtnP
                    type="button"
                    className="btn btn-lg btn-warning btnFood"
                    onClick={(e) => customerRequest(e, "Água 500ml", 5)}
                  >
                    Adicionar
                  </BtnP>
                </Card.Body>
              </Accordion.Collapse>

              <Accordion.Collapse eventKey="1">
                <Card.Body className="sectorCardBody">
                  Água 750ml R$7,00
                  <BtnP
                    type="button"
                    className="btn btn-lg btn-warning btnFood"
                    onClick={(e) => customerRequest(e, "Água 750ml", 7)}
                  >
                    Adicionar
                  </BtnP>
                </Card.Body>
              </Accordion.Collapse>

              <Accordion.Collapse eventKey="1">
                <Card.Body className="sectorCardBody">
                  Refrigerante 500ml R$7,00
                  <BtnP
                    type="button"
                    className="btn btn-lg btn-warning btnFood"
                    onClick={(e) => customerRequest(e, "Refrigerante 500ml", 7)}
                  >
                    Adicionar
                  </BtnP>
                </Card.Body>
              </Accordion.Collapse>

              <Accordion.Collapse eventKey="1">
                <Card.Body className="sectorCardBody">
                  Refrigerante 759ml R$10,00
                  <BtnP
                    type="button"
                    className="btn btn-lg btn-warning btnFood"
                    onClick={(e) =>
                      customerRequest(e, "Refrigerante 750ml", 10)
                    }
                  >
                    Adicionar
                  </BtnP>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </div>
      </div>
      <div>
        <h2 className="title">Resumo</h2>
      </div>

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
                      {item.name} 
                      {item.add} 
                      {item.extra}
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
                  <li kay={index}>
                    {item.count}
                    <BtnP
                      className="btn btn-lg btn-warning btnFood"
                      onClick={(e) => deleteItem(e, item.name)}
                    >
                      X
                    </BtnP>
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
            <Resumo order={itens} clearItens={clearItens}  />
          </div>
        </div>
      </div>

      <Modal clasName="modal" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Adicionais</Modal.Title>
        </Modal.Header>
        <Modal.Body>Escolha seu sabor.</Modal.Body>
        <Modal.Body>
          <Form>
            <Form.Check
              type="switch"
              id="frango"
              label="Frango"
              onClick={() => setChecked("frango")}
            />
            <Form.Check
              type="switch"
              id="carne "
              label="Carne bovina"
              onChange={() => setChecked("carne")}
            />
            <Form.Check
              type="switch"
              id="Vegetariano"
              label="Vegetariano"
              onClick={() => setChecked("veg")}
              //onClick={ (e) => customerRequest(e, 'Batata frita', 5)
            />
          </Form>
        </Modal.Body>
        <Modal.Body>Quer adicionar por mais R$1,00?</Modal.Body>
        <Modal.Body>
          <Form>
            <Form.Check
              type="switch"
              id="ovo"
              label="Ovo"
              onClick={() => setCheck("ovo")}
            />
            <Form.Check
              type="switch"
              id="queijo"
              label="Queijo"
              onClick={() => setCheck('queijo',1)}
            />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <BtnP variant="secondary sizeModal" onClick={handleClose}>
            Cancelar
          </BtnP>
          <BtnP variant="warning sizeModal" onClick={handleAdd}>
            Adicionar
          </BtnP>
        </Modal.Footer>
      </Modal>
    </>
  );
};


export default Menu