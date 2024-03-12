// App.jsx
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./Components/login";
import NavbarComponent from "./Components/NavbarComponent";
import EntregasComponent from "./Components/EntregasComponent";
import OrdenesFabricacionPendientes from "./Components/OrdenesFabricacionPendientes";
import DetallesGuiaTransporteYDocumentosEntrega  from "./Components/DetallesGuiaTransporteYDocumentosEntrega";
import EntregasCompletasParaCliente from "./Components/EntregasCompletasParaCliente";
import PruebasEntregaParaGuiaTransporte  from "./Components/PruebasEntregaParaGuiaTransporte";
import TotalVentasYFacturasPorCliente from "./Components/TotalVentasYFacturasPorCliente";

import { useAuth } from "./AuthContext";

function PrivateRoute({ element, ...props }) {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? element : <Navigate to="/login" />;
}

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/home"
        element={<PrivateRoute element={<NavbarComponent />} />}
      />
        <Route
        path="/entregas"
        element={<PrivateRoute element={<EntregasComponent />} />}
      />
      <Route
        path="/ordenes-fabricacion-pendientes"
        element={<PrivateRoute element={<OrdenesFabricacionPendientes />} />}
      />
            <Route
        path="/detalles-guia-transporte-documentos-entrega"
        element={<PrivateRoute element={<DetallesGuiaTransporteYDocumentosEntrega />} />}
      />
            <Route
        path="/entregas-completas-para-cliente"
        element={<PrivateRoute element={<EntregasCompletasParaCliente />} />}
      />
            <Route
        path="/pruebas-entrega-para-guia-transporte"
        element={<PrivateRoute element={<PruebasEntregaParaGuiaTransporte />} />}
      />
            <Route
        path="/total-ventas-facturas-por-cliente"
        element={<PrivateRoute element={<TotalVentasYFacturasPorCliente />} />}
      />
    </Routes>
  );
}

export default App;
