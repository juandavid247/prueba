import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import { IconContext } from 'react-icons';
import { FaUser } from 'react-icons/fa'; 

const NavbarComponent = () => {
  const { isLoggedIn } = useAuth();

  const renderNavbarContent = () => {
    if (isLoggedIn) {
      return (
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/entregas">Entregas</Nav.Link>
          <Nav.Link as={Link} to="/ordenes-fabricacion-pendientes">O Pendientes</Nav.Link>
          <Nav.Link as={Link} to="/DetallesGuiaTransporteYDocumentosEntrega">DetallesEntrega</Nav.Link>
          <Nav.Link as={Link} to="/EntregasCompletasParaCliente">EntregasCompletasParaCliente</Nav.Link>
          <Nav.Link as={Link} to="/PruebasEntregaParaGuiaTransporte">PruebasTransporte</Nav.Link>
          <Nav.Link as={Link} to="/TotalVentasYFacturasPorCliente">TotalVentas</Nav.Link>

        </Nav>
      );
    } else {
      return (
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/login">Iniciar sesión</Nav.Link>
          {/* Agrega más enlaces de navegación aquí */}
        </Nav>
      );
    }
  };

  return (
<Navbar bg="dark" variant="dark" expand="lg" className="mb-4" style={{ backgroundColor: "rgb(85, 172, 186)" }}>      <Container>
        <Navbar.Brand as={Link} to="/">FLIRPAK</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {renderNavbarContent()}
          <IconContext.Provider value={{ color: "white" }}>
          <Nav className="ml-auto">
            <Nav.Item className="text-light mr-3"></Nav.Item>
              <Nav.Item>
                <FaUser className="text-light" /> {/* Cambié el icono a FaUser */}
              </Nav.Item>
          </Nav>
          </IconContext.Provider>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
