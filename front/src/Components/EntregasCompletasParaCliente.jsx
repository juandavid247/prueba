import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import NavbarComponent from './NavbarComponent'; 

const EntregasCompletasParaCliente = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:3333/firplak/v1/entregas-completas-para-cliente')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return (
    <>
    <NavbarComponent />
    <div>
      <h2>Entregas Completas para Cliente</h2>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>ID</th>
            <th>Fecha</th>
            <th>Estado</th>
            <th>Nombre Producto</th>
            <th>SKU</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.id_documento_entrega}>
              <td>{item.id_documento_entrega}</td>
              <td>{item.fecha}</td>
              <td>{item.estado}</td>
              <td>{item.nombre_producto}</td>
              <td>{item.sku}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
    </>
  );
};

export default EntregasCompletasParaCliente;