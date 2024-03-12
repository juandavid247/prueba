import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import NavbarComponent from './NavbarComponent'; 

const PruebasEntregaParaGuiaTransporte = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('URL_DEL_BACKEND/pruebas-entrega-guia-especifica')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return (
    <>
    <NavbarComponent />
    <div>
      <h2>Pruebas de Entrega para Guía de Transporte Específica</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID Prueba Entrega</th>
            <th>Firma Cliente</th>
            <th>Observación</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.id_prueba_entrega}>
              <td>{item.id_prueba_entrega}</td>
              <td>{item.firma_cliente}</td>
              <td>{item.observacion}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
    </>
  );
};

export default PruebasEntregaParaGuiaTransporte;
