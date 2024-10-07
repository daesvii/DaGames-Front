import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { validateRegisterForm } from "../../utils/validateForm";
import { showAlert } from "../../utils/showAlert";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/common.styles.css";

const Register: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
    documentNumber: "",
    username: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const isValid = validateRegisterForm(formData);
    if (!isValid) return;

    try {
      const response = await fetch("http://localhost:3001/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: formData.username,
          password: formData.password,
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phoneNumber: formData.phoneNumber,
          documentNumber: formData.documentNumber,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }

      await showAlert(
        "Registro Exitoso",
        "Te has registrado correctamente.",
        "success"
      );

      navigate("/");
    } catch (error) {
      if (error instanceof Error) {
        await showAlert("Error al registrar", error.message, "error");
      } else {
        await showAlert(
          "Error al registrar",
          "Ocurrió un error inesperado.",
          "error"
        );
      }
    }
  };

  return (
    <div className="container text-center mt-5 mb-5 p-5 bg-light rounded shadow w-50 mx-auto">
      <h1>REGISTRARSE</h1>
      <form
        id="registration-form"
        className="login-form"
        onSubmit={handleSubmit}
      >
        <div className="form-group">
          <label htmlFor="first-name">Nombre:</label>
          <input
            type="text"
            id="first-name"
            name="firstName"
            placeholder="Ingresa tu nombre"
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="last-name">Apellido:</label>
          <input
            type="text"
            id="last-name"
            name="lastName"
            placeholder="Ingresa tu apellido"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Correo electrónico:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Ingresa tu correo electrónico"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Ingresa una contraseña"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirm-password">Confirmar Contraseña:</label>
          <input
            type="password"
            id="confirm-password"
            name="confirmPassword"
            placeholder="Confirma tu contraseña"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Teléfono:</label>
          <input
            type="tel"
            id="phone"
            name="phoneNumber"
            placeholder="Ingresa tu teléfono"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="document-number">Cédula:</label>
          <input
            type="number"
            id="document-number"
            name="documentNumber"
            placeholder="Ingresa tu cédula"
            value={formData.documentNumber}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="username">Nombre de usuario:</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Cree un nombre de usuario"
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        <div className="form-group full-width">
          <button type="submit" id="register-btn">
            Registrar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
