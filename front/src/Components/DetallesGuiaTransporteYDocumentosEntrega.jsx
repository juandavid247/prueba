import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import NavbarComponent from './NavbarComponent'; 

const DetallesGuiaTransporteYDocumentosEntrega = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('URL_DEL_BACKEND/detalles-guia-transporte-documentos')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return (
    <>
    <NavbarComponent />
    <div>
      <h2>Detalles de Guía de Transporte y Documentos de Entrega</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID Guía de Transporte</th>
            <th>Número Guía</th>
            <th>Fecha Guía</th>
            <th>ID Documento Entrega</th>
            <th>Fecha Entrega</th>
            <th>Estado Entrega</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.id_guia_transporte}>
              <td>{item.id_guia_transporte}</td>
              <td>{item.numero_guia}</td>
              <td>{item.fecha_guia}</td>
              <td>{item.id_documento_entrega}</td>
              <td>{item.fecha_entrega}</td>
              <td>{item.estado_entrega}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
    </>
  );
};

export default DetallesGuiaTransporteYDocumentosEntrega;
