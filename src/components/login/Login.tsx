import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "bootstrap/dist/css/bootstrap.min.css"; // Importar Bootstrap primero
import "../../styles/common.styles.css"; // Luego, tu CSS personalizado

const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const showAlert = (
    title: string,
    text: string,
    icon: "success" | "error"
  ) => {
    Swal.fire({
      title,
      text,
      icon,
      confirmButtonText: "OK",
    });
  };

  const validateLoginForm = () => {
    let isValid = true;
    let text;

    if (username.trim() === "") {
      isValid = false;
      text = "Por favor, introduce tu nombre de usuario.";
      showAlert("Error", text, "error");
    }

    if (password.trim() === "") {
      isValid = false;
      text = "Por favor, introduce tu contraseña.";
      showAlert("Error", text, "error");
    }

    return isValid;
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!validateLoginForm()) {
      return;
    }

    try {
      const response = await fetch("http://localhost:3001/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        const errorResponse = await response.json();
        showAlert(
          "Error",
          errorResponse.message || "Credenciales incorrectas.",
          "error"
        );
        return;
      }

      showAlert(
        "Inicio de sesión exitoso",
        "Has iniciado sesión correctamente.",
        "success"
      );
      localStorage.setItem("currentUser", username);
      navigate("/catalog");
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      showAlert(
        "Error",
        "Ocurrió un error al intentar iniciar sesión.",
        "error"
      );
    }
  };

  const handleRegisterClick = () => {
    navigate("/register");
  };

  return (
    <div className="container text-center mt-5 mb-5 p-5 bg-light rounded shadow w-50 mx-auto form-container">
      <h1>INICIAR SESIÓN</h1>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Nombre de usuario:</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Ingrese su usuario o correo electrónico"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <div className="form-group full-width">
            <br />
            <button type="submit">Acceder</button>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Ingrese su contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="form-group full-width">
            <br />
            <button type="button" onClick={handleRegisterClick}>
              Registrar
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
