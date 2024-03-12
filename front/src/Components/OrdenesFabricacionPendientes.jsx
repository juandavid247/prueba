import React, { useState, useEffect } from "react";
import { Table, Pagination, Form } from "react-bootstrap";
import axios from 'axios';
import NavbarComponent from "./NavbarComponent";

const OrdenesFabricacionPendientes = () => {
  const [data, setData] = useState([]);
  const [metadata, setMetadata] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const [searchTerm, setSearchTerm] = useState("");
  const API_BASE_URL = import.meta.env.VITE_API_ORDENESFABRICACIONPENDIENTES_URL;

  useEffect(() => {
    fetchOrdenes();
  }, [currentPage, searchTerm]);

  const fetchOrdenes = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}`, {
        params: {
          page: currentPage,
          perPage: itemsPerPage
        }
      });
      const { data, meta } = response.data;
      setData(data);
      setMetadata(meta);
    } catch (error) {
      console.error('Error fetching ordenes:', error);
    }
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = data.filter(item => {
    return (
      item.nombre_producto.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.sku.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <>
      <NavbarComponent />
      <div>
        <h2 className="text-center">Órdenes de Fabricación Pendientes</h2>
        <div className="d-flex justify-content-center">
          <Form.Group controlId="search">
            <Form.Control type="text" placeholder="Buscar..." value={searchTerm} onChange={handleSearchChange} />
          </Form.Group>
          
        </div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Fecha de Creación</th>
              <th>ID de Línea de Pedido</th>
              <th>Nombre Producto</th>
              <th>SKU</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map(item => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.fecha_creacion}</td>
                <td>{item.id_linea_pedido}</td>
                <td>{item.nombre_producto}</td>
                <td>{item.sku}</td>
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
      </div>
    </>
  );
};

export default OrdenesFabricacionPendientes;
