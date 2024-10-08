import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Importar useNavigate para redirigir
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Esto incluye Popper.js
import "./Catalog.styles.css"; // Asegúrate de que la ruta sea correcta

const Catalog: React.FC = () => {
  const [username, setUsername] = useState<string | null>(null);
  const navigate = useNavigate(); // Inicializar useNavigate

  useEffect(() => {
    const currentUser = localStorage.getItem("currentUser");

    if (!currentUser) {
      navigate("/"); // Redirigir al componente Login si no hay usuario
    } else {
      setUsername(currentUser);
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    navigate("/");
  };

  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid"> {/* Usar container-fluid para que ocupe todo el ancho */}
          <a className="navbar-brand me-auto" href="/catalog"> {/* Agregar clase me-auto para mover hacia la derecha */}
            <img
              src="../img/dagames.png"
              alt="Logo"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            DaGames
          </a>
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <button
                className="navbar-brand dropdown-toggle transparent-btn"
                type="button"
                id="navbarDropdownMenuLink"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <img
                  src="../img/user.png"
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                  alt="Usuario"
                />
                <span id="username-placeholder">{username}</span>
              </button>
              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <button className="dropdown-item" onClick={handleLogout}>
                  Cerrar sesión
                </button>
              </div>
            </li>
          </ul>
        </div>
      </nav>

      <div className="container container-catalog">
        {[
          {
            src: "../img/nba.jpg",
            title: "NBA 2K25",
            price: "$269.699 COP",
          },
          {
            src: "../img/fifa.jpg",
            title: "FIFA 24",
            price: "$380.000 COP",
          },
          {
            src: "../img/phasmophobia.jpg",
            title: "PHASMOPHOBIA",
            price: "$24.000 COP",
          },
          {
            src: "../img/sea_PC.jpg",
            title: "SEA OF THIEVES",
            price: "$115.900 COP",
          },
          {
            src: "../img/forza.jpeg",
            title: "FORZA HORIZON 5",
            price: "$214.900 COP",
          },
          {
            src: "../img/left.jpeg",
            title: "LEFT 4 DEAD 2",
            price: "$26.000 COP",
          },
        ].map((item, index) => (
          <div className="item" key={index}>
            <img src={item.src} alt={item.title} className="item-img" />
            <div className="item-text">
              <h3>{item.title}</h3>
              <p>{item.price}</p>
            </div>
            <div className="d-flex justify-content-center">
              <button type="button" className="btn btn-success">
                Comprar
              </button>
            </div>
            <br />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalog;