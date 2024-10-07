import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Importar Bootstrap primero
import "./Catalog.styles.css"; // Asegúrate de que la ruta sea correcta

const Catalog: React.FC = () => {
  const [username, setUsername] = useState<string | null>(null);

  useEffect(() => {
    const currentUser = localStorage.getItem("currentUser");

    if (!currentUser) {
      window.location.href = "../html/index.html"; // Redirigir si no hay usuario
    } else {
      setUsername(currentUser); // Establecer el nombre de usuario
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    window.location.href = "../html/index.html"; // Redirigir al cerrar sesión
  };

  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="/catalog">
          Da-Games
        </a>{" "}
        {}
        <div className="ml-auto">
          <ul>
            <li className="nav-item dropdown">
              <button
                className="navbar-brand dropdown-toggle"
                type="button"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <img
                  src="../../img/forza.jpeg"
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                  alt="Usuario"
                />
                <span id="username-placeholder">[{username}]</span>
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

      <div className="container">
        {/* Aquí van tus elementos del catálogo */}
        {[
          {
            src: "../../img/nba.jpg",
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
