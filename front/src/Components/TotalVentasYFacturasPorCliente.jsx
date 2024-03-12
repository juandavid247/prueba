import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import NavbarComponent from './NavbarComponent'; 
const TotalVentasYFacturasPorCliente = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('URL_DEL_BACKEND/total-ventas-facturado-cliente')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return (
    <>
    <NavbarComponent />
    <div>
      <h2>Total de Ventas y Facturas por Cliente</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nombre Cliente</th>
            <th>Total Pedidos</th>
            <th>Total Facturado</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.nombre_cliente}>
              <td>{item.nombre_cliente}</td>
              <td>{item.total_pedidos}</td>
              <td>{item.total_facturado}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
    </>
  );
};

export default TotalVentasYFacturasPorCliente;
