import { showAlert } from "./showAlert";

export const validateRegisterForm = (formData: any) => {
  const {
    firstName,
    lastName,
    email,
    password,
    confirmPassword,
    phoneNumber,
    documentNumber,
    username,
  } = formData;

  const errors: string[] = [];

  if (!username || username.length < 1 || username.length > 10) {
    errors.push("El nombre de usuario debe tener entre 1 y 10 caracteres.");
  }

  if (!password || password.length < 6 || password.length > 20) {
    errors.push("La contraseña debe tener entre 6 y 20 caracteres.");
  }

  if (!firstName || firstName.length < 3 || firstName.length > 40) {
    errors.push("El nombre debe tener entre 3 y 40 caracteres.");
  }

  if (!lastName || lastName.length < 3 || lastName.length > 40) {
    errors.push("El apellido debe tener entre 3 y 40 caracteres.");
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Validación de correo electrónico
  if (!email || !emailRegex.test(email) || email.length > 70) {
    errors.push(
      "Por favor, introduce un correo electrónico válido (máx. 70 caracteres)."
    );
  }

  if (!phoneNumber || phoneNumber.length !== 10 || isNaN(Number(phoneNumber))) {
    errors.push(
      "El número de teléfono debe tener exactamente 10 dígitos y contener solo números."
    );
  }

  if (
    !documentNumber ||
    documentNumber.length < 6 ||
    documentNumber.length > 10 ||
    isNaN(Number(documentNumber))
  ) {
    errors.push(
      "El número de documento debe tener entre 6 y 10 caracteres y contener solo números."
    );
  }

  if (password !== confirmPassword) {
    errors.push("Las contraseñas no coinciden.");
  }

  if (errors.length > 0) {
    errors.forEach((error) => showAlert("Error", error, "error"));
    return false;
  }

  return true;
};
