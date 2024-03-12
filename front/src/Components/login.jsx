// Login.js
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext";

function Login() {
  const [correoElectronico, setCorreoElectronico] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [mensaje, setMensaje] = useState("");
  const { setIsLoggedIn } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      if (!correoElectronico || !contraseña) {
        setMensaje("Por favor completa todos los campos.");
        return;
      }

      const loginUrl = import.meta.env.VITE_LOGIN_URL;

      const response = await axios.post(loginUrl, {
        correo_electronico: correoElectronico,
        password: contraseña,
      });

      console.log("Respuesta del servidor:", response.data);

      if (response.status === 200) {
        setIsLoggedIn(true); // Actualizar el estado de autenticación
        navigate("/home"); // Redirigir a NavbarComponent después de un inicio de sesión exitoso
      } else {
        if (response.status === 404) {
          setMensaje("Error: Usuario no encontrado");
        } else if (response.status === 401) {
          setMensaje("Error: Contraseña incorrecta");
        } else {
          setMensaje("Error: " + response.data.message);
        }
      }
    } catch (error) {
      console.error("Error de inicio de sesión:", error);
      if (error.response && error.response.status === 401) {
        setMensaje("Error: Contraseña incorrecta");
      } else if (error.response && error.response.status === 404) {
        setMensaje("Error: Usuario no encontrado");
      } else {
        setMensaje(
          "Error de inicio de sesión: No se pudo conectar al servidor."
        );
      }
    }
  };

  return (
    <div>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <div
          style={{
            backgroundColor: "rgb(85 172 186)",
            border: "1px solid #63cdda",
            borderRadius: "10px",
            padding: "20px",
          }}
        >
          <h5 className="mb-4  d-flex justify-content-center align-items-center">
            Firplak
          </h5>{" "}
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Correo electrónico</Form.Label>
              <Form.Control
                type="email"
                placeholder="Ingresa tu correo electrónico"
                value={correoElectronico}
                onChange={(e) => setCorreoElectronico(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Contraseña"
                value={contraseña}
                onChange={(e) => setContraseña(e.target.value)}
              />
            </Form.Group>
            <br />
            <div className="text-center">
              {" "}
              <Button variant="light" size="sm" onClick={handleLogin}>
                Iniciar sesión
              </Button>
            </div>
          </Form>
          <p className="mt-3">{mensaje}</p>
        </div>
      </div>
    </div>
  );
}

export default Login;
