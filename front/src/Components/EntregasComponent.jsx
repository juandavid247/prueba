import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Table, Form, Pagination, Alert } from 'react-bootstrap';
import NavbarComponent from './NavbarComponent'; 
const EntregasComponent = () => {
  const [entregas, setEntregas] = useState([]);
  const [metadata, setMetadata] = useState({});
  const [filtros, setFiltros] = useState({});
  const [busqueda, setBusqueda] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const [notificacion, setNotificacion] = useState(null);

  useEffect(() => {
    fetchEntregas();
  }, [filtros, busqueda, currentPage]);

  const fetchEntregas = async () => {
    try {
      let url = `${import.meta.env.VITE_API_BASE_URL}?page=${currentPage}&perPage=${itemsPerPage}`;
      if (Object.keys(filtros).length > 0) {
        url += `&${new URLSearchParams(filtros).toString()}`;
      }
      if (busqueda) {
        url += `&q=${busqueda}`;
      }
      
      const response = await axios.get(url);
      const { data, meta } = response.data;
      
      setEntregas(data);
      setMetadata(meta);
    } catch (error) {
      console.error('Error fetching entregas:', error);
    }
  };
  
  

  const handleFiltroChange = (filtro, valor) => {
    setFiltros({ ...filtros, [filtro]: valor });
  };

  const handleBusquedaChange = (event) => {
    setBusqueda(event.target.value);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const mostrarNotificacion = (mensaje, tipo) => {
    setNotificacion({ mensaje, tipo });
    setTimeout(() => {
      setNotificacion(null);
    }, 3000);
  };

  return (
    <>
     <NavbarComponent />
    <Container className="mt-5">
      <h4 className="text-center mb-4">Listado de Entregas</h4>
      {notificacion && <Alert variant={notificacion.tipo} className="mb-4">{notificacion.mensaje}</Alert>}
      <Row className="mb-3">
        <Col>
          <Form>
            {/* Aquí puedes añadir controles de filtro */}
          </Form>
          <Form>
            <Form.Group controlId="formBusqueda">
              <Form.Control
                type="text"
                placeholder="Buscar..."
                value={busqueda}
                onChange={handleBusquedaChange}
              />
            </Form.Group>
          </Form>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>ID Entrega</th>
                <th>ID Guía de Transporte</th>
                <th>ID Cliente</th>
                <th>ID Pedido</th>
                <th>Fecha Despacho</th>
                <th>Fecha Entrega</th>
                <th>Estado Entrega</th>
                <th>POD Recibido</th>
                <th>Fecha POD Recibido</th>
                <th>Observaciones</th>
                <th>ID Transportadora</th>
              </tr>
            </thead>
            <tbody>
              {entregas.map(entrega => (
                <tr key={entrega.id_entrega}>
                  <td>{entrega.id_entrega}</td>
                  <td>{entrega.id_guia_transporte}</td>
                  <td>{entrega.id_cliente}</td>
                  <td>{entrega.id_pedido}</td>
                  <td>{entrega.fecha_despacho}</td>
                  <td>{entrega.fecha_entrega}</td>
                  <td>{entrega.estado_entrega}</td>
                  <td>{entrega.pod_recibido ? 'Sí' : 'No'}</td>
                  <td>{entrega.fecha_pod_recibido}</td>
                  <td>{entrega.observaciones}</td>
                  <td>{entrega.id_transportadora}</td>
                </tr>
              ))}
            </tbody>
          </Table>
          <Pagination className="justify-content-center">
            <Pagination.First onClick={() => handlePageChange(1)} disabled={currentPage === 1} />
            <Pagination.Prev onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} />
            <Pagination.Item active>{currentPage}</Pagination.Item>
            <Pagination.Next onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === metadata.last_page} />
            <Pagination.Last onClick={() => handlePageChange(metadata.last_page)} disabled={currentPage === metadata.last_page} />
          </Pagination>
        </Col>
      </Row>
    </Container>
    </>
  );
};

export default EntregasComponent;
